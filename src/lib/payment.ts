import type { Order, OrderItem } from '@/types';

async function sendTelegramNotification(order: Order) {
  const token = '9282780125:AAEUmQBPwv3vPJ5el4YKfGMtcLWqAcYXz20';
  const chatId = '8644464926';
  
  const text = `🔔 *PESANAN BARU MASUK!*\n\n` +
    `🆔 ID: \`${order.id}\`\n` +
    `👤 Nama: ${order.buyerName}\n` +
    `📞 WA: ${order.buyerPhone}\n` +
    `🏠 Alamat: ${order.address}\n` +
    `💳 Pembayaran: ${order.paymentMethod}\n` +
    `💰 Total: Rp ${order.total.toLocaleString('id-ID')}\n\n` +
    `Segera cek Admin Panel untuk konfirmasi!`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });
  } catch (error) {
    console.error('Gagal kirim notif Telegram', error);
  }
}

export async function payMock(payload: {
  items: OrderItem[]; total: number; buyerName: string; buyerPhone: string; address: string; note?: string; paymentMethod: string;
}): Promise<Order> {
  await new Promise((r) => setTimeout(r, 600));
  
  const order: Order = {
    id: 'ORD-' + Date.now().toString(36).toUpperCase(),
    items: payload.items, total: payload.total, status: 'pending',
    buyerName: payload.buyerName, buyerPhone: payload.buyerPhone, address: payload.address, note: payload.note,
    paymentMethod: payload.paymentMethod, createdAt: new Date().toISOString()
  };

  // Tembak notifikasi ke Telegram
  await sendTelegramNotification(order);

  return order;
}
