// config.js — fetch Firebase config dari Vercel serverless /api/config
// File ini aman di-commit karena tidak berisi key apapun.
// Keys disimpan sebagai Environment Variables di Vercel Dashboard.

window.ENV = {}; // placeholder, akan diisi setelah fetch selesai

(async () => {
  try {
    const res = await fetch('/api/config');
    if (!res.ok) throw new Error('config fetch failed: ' + res.status);
    window.ENV = await res.json();
  } catch (e) {
    console.error('[config.js] Gagal load Firebase config:', e);
  }
})();
