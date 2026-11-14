import { supabase } from './supabase.js';
import { ehAdmin } from './auth.js';

// Escapa texto digitado por usuários antes de usar em innerHTML (evita injeção de HTML/XSS).
export const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Cabeçalho e rodapé iguais em todas as páginas.
export async function montarCabecalho() {
  const { data: { session } } = await supabase.auth.getSession();
  const admin = session ? await ehAdmin() : false;
  document.getElementById('topo').innerHTML = `
    <div class="wrap barra">
      <a class="logo" href="index.html" aria-label="EcoQuest, página inicial">🌿 Eco<span>Quest</span></a>
      <nav>
        <a href="quiz.html">Quiz</a>
        ${admin ? '<a href="admin.html">Painel</a>' : ''}
        ${session ? '<button class="link" id="sair">Sair</button>' : '<a href="cadastro.html">Entrar</a>'}
      </nav>
    </div>`;
  document.getElementById('sair')?.addEventListener('click', async () => {
    await supabase.auth.signOut(); location.href = 'index.html';
  });
  document.body.insertAdjacentHTML('beforeend', '<footer>EcoQuest: aprender sobre o meio ambiente pode ser divertido</footer>');
}
