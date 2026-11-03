import { supabase } from './supabase.js';

// Se não estiver logado, manda para o cadastro e volta depois para a página atual.
export async function exigirLogin() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    const pagina = location.pathname.split('/').pop() || 'index.html';
    location.href = 'cadastro.html?voltar=' + encodeURIComponent(pagina);
  }
  return session;
}
export async function ehAdmin() {
  const { data } = await supabase.rpc('is_admin');
  return data === true;
}
