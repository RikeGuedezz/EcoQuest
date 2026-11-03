# EcoQuest

Site em HTML + CSS + JavaScript puro (sem instalar nada) com Supabase para login por código de e-mail, banco de dados e envio do resultado.

```
index.html      painel com os cards       conteudo.html  apresentação / vídeo / leitura
cadastro.html   cadastro e login (código) quiz.html      quiz + resultado
admin.html      painel administrativo     css/style.css  visual (paleta no topo)
js/data.js      ★ conteúdos e perguntas (edite aqui)     js/supabase.js ★ suas chaves
supabase/schema.sql   tabelas e segurança    supabase/functions/enviar-resultado   e-mail do resultado
```

## 1. Banco de dados
1. Crie um projeto grátis em supabase.com.
2. **SQL Editor** > cole `supabase/schema.sql` > **Run**.
3. Rode também: `insert into public.admins (email) values ('seu-email@exemplo.com');` (use o e-mail com que você vai entrar no painel).
4. **Project Settings > API**: copie *Project URL* e a chave *anon/publishable* para `js/supabase.js`.

## 2. Validação de e-mail por código
O Supabase manda um link por padrão; queremos o **código**. Em **Authentication > Emails > Templates**, edite os DOIS modelos, **Confirm signup** (primeiro acesso) e **Magic Link** (login), e inclua `{{ .Token }}` no texto, por exemplo:
`<p>Seu código do EcoQuest: <b>{{ .Token }}</b></p>`

O e-mail embutido do Supabase tem limite muito baixo de envios por hora. Para valer de verdade, configure um SMTP próprio em **Authentication > Emails > SMTP Settings** (o Resend tem plano grátis).

## 3. Resultado por e-mail (opcional, mas pedido no projeto)
Com a [Supabase CLI](https://supabase.com/docs/guides/cli) instalada:
```
supabase login && supabase link --project-ref SEU_REF
supabase secrets set RESEND_API_KEY=re_xxx EMAIL_FROM="EcoQuest <contato@seudominio.com>"
supabase functions deploy enviar-resultado
```
Sem domínio verificado no Resend, ele só entrega para o seu próprio e-mail (bom para testar). Se a função não estiver publicada, o quiz continua funcionando e avisa que o e-mail não foi enviado.

## 4. Rodar localmente
Precisa de um servidor local (abrir o arquivo com duplo clique não funciona com módulos JS):
```
python3 -m http.server 5500      # ou use a extensão "Live Server" do VS Code
```
Abra http://localhost:5500. Em Authentication > URL Configuration, coloque essa URL em *Site URL*.

## 5. Publicar
Qualquer hospedagem estática serve (Netlify, Vercel, GitHub Pages). Troque o *Site URL* no Supabase pelo endereço final.

## Limitações conhecidas
- A correção do quiz acontece no navegador (as respostas ficam em `js/data.js`). Para um quiz com prêmio, mova a correção para o servidor.
- `email_cadastrado` revela se um e-mail já existe (necessário para o aviso de duplicidade).
