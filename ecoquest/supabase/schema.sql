-- Rode este arquivo inteiro em: Supabase > SQL Editor > New query > Run

create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  nome text not null,
  email text not null unique,            -- e-mail único: impede cadastro duplicado
  criado_em timestamptz not null default now()
);
create table public.resultados (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  acertos int not null, total int not null, pontos int not null,
  percentual numeric(5,1) not null,
  criado_em timestamptz not null default now()
);
create table public.admins (email text primary key);   -- quem é administrador

-- Cria o perfil automaticamente quando alguém se cadastra (nome vem do formulário)
create function public.novo_usuario() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, nome, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'nome', 'Participante'), lower(new.email));
  return new;
end $$;
create trigger ao_criar_usuario after insert on auth.users
  for each row execute function public.novo_usuario();

-- O e-mail já tem cadastro confirmado?
create function public.email_cadastrado(p_email text) returns boolean
language sql security definer stable set search_path = '' as $$
  select exists (select 1 from auth.users where lower(email) = lower(p_email) and email_confirmed_at is not null)
$$;

-- O usuário logado é administrador?
create function public.is_admin() returns boolean
language sql security definer stable set search_path = '' as $$
  select exists (select 1 from public.admins where lower(email) = lower(auth.jwt() ->> 'email'))
$$;

-- Segurança (RLS): cada pessoa só vê os próprios dados; admin vê tudo
alter table public.profiles  enable row level security;
alter table public.resultados enable row level security;
alter table public.admins    enable row level security;   -- sem policies: ninguém lê direto

create policy "ver perfil"      on public.profiles   for select to authenticated using (id = auth.uid() or public.is_admin());
create policy "ver resultados"  on public.resultados for select to authenticated using (user_id = auth.uid() or public.is_admin());
create policy "salvar resultado" on public.resultados for insert to authenticated with check (user_id = auth.uid());

-- Depois de rodar, cadastre o(s) administrador(es):
-- insert into public.admins (email) values ('seu-email@exemplo.com');
