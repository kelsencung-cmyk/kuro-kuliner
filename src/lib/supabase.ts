import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const hasSupabase = Boolean(url && key);
export const supabase = hasSupabase ? createClient(url as string, key as string) : null;

export async function fetchMenus() { if (!supabase) return null; const { data, error } = await supabase.from('menus').select('*').order('name'); if (error) return null; return data; }
export async function insertOrder(order: any) {
  if (!supabase) return { ok: false };
  const { error } = await supabase.from('orders').insert({
    id: order.id, items: order.items, total: order.total, status: order.status,
    buyer_name: order.buyerName, buyer_phone: order.buyerPhone, address: order.address, note: order.note ?? null,
    payment_method: order.paymentMethod
  });
  if (error) { console.error(error); return { ok: false }; } return { ok: true };
}
export async function fetchOrders() { if (!supabase) return null; const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false }); if (error) return null; return data; }
export async function updateOrderStatus(id: string, status: string) { if (!supabase) return { ok: false }; const { error } = await supabase.from('orders').update({ status }).eq('id', id); if (error) return { ok: false }; return { ok: true }; }

export async function fetchStoreStatus() {
  if (!supabase) return true;
  const { data, error } = await supabase.from('settings').select('is_open').eq('id', 1).single();
  if (error || !data) return true; 
  return data.is_open;
}

export async function setStoreStatus(isOpen: boolean) {
  if (!supabase) return { ok: false };
  const { error } = await supabase.from('settings').upsert({ id: 1, is_open: isOpen });
  if (error) { console.error(error); return { ok: false }; } return { ok: true };
}
export async function fetchStoreSettings() {
  if (!supabase) return null;
  const { data, error } = await supabase.from('store_settings').select('*').eq('id', 1).single();
  if (error) return null;
  return data;
}

export async function updateStoreSettings(name: string) {
  if (!supabase) return { ok: false };
  const { error } = await supabase.from('store_settings').update({ store_name: name }).eq('id', 1);
  if (error) return { ok: false };
  return { ok: true };
}
