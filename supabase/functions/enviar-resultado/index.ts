// Envia o resultado do quiz por e-mail (usa Resend). Chamada pelo quiz.html após salvar.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };
const esc = (t: string) => t.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  // Usa o token de quem chamou: as regras RLS garantem que só o dono lê o próprio resultado.
  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
    global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } },
  });
  const { resultado_id } = await req.json();
  const { data: r } = await sb.from('resultados').select('*, profiles(nome,email)').eq('id', resultado_id).single();
  if (!r) return new Response('Resultado não encontrado', { status: 404, headers: cors });

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: Deno.env.get('EMAIL_FROM'), to: r.profiles.email, subject: 'Seu resultado no EcoQuest 🌿',
      html: `<h2>Olá, ${esc(r.profiles.nome)}!</h2><p>Você acertou <b>${r.acertos}</b> de ${r.total} perguntas (${r.percentual}%) e fez <b>${r.pontos}</b> pontos.</p><p>Continue aprendendo com o EcoQuest.</p>`,
    }),
  });
  return new Response(JSON.stringify({ ok: resp.ok }), { status: resp.ok ? 200 : 502, headers: { ...cors, 'Content-Type': 'application/json' } });
});
