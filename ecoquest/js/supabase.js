// Cole aqui os dados do seu projeto: Supabase > Project Settings > API
// (a chave "anon/publishable" pode ficar no front-end; a segurança vem das regras RLS do schema.sql)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm';

const SUPABASE_URL = 'https://onyfcwhnjhjxaxihcyhb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_KRmPjuvi0AwNkfRwnxB3Ow_c8hNkeXF';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
