# 🚂 Kereta Pompa — Petualangan Rel
> Game Three.js tentang anak bermain kereta pompa di rel berkelok!

## 🎮 Cara Main
| Tombol | Aksi |
|--------|------|
| `SPASI` | Pompa tangan untuk melaju |
| `B` atau `↓` | Rem kereta |
| Tombol ⬆ di layar | Pompa (mobile) |
| Tombol 🛑 di layar | Rem (mobile) |

**Strategi:**
- ⛰️ **Naik bukit** → Pompa cepat dan sering!
- ➡️ **Rel datar** → Pompa santai, jaga kecepatan
- ⬇️ **Turun bukit** → Tekan rem agar tidak kebablasan!

---

## 🚀 Panduan Deploy ke Vercel (Step by Step)

### Prasyarat
- Akun [GitHub](https://github.com) (gratis)
- Akun [Vercel](https://vercel.com) (gratis)
- [Git](https://git-scm.com/downloads) terinstall di komputer

---

### Langkah 1 — Siapkan File di Komputer

Pastikan folder proyek kamu berisi file-file ini:
```
railpump-game/
├── index.html      ← Game utama
├── vercel.json     ← Konfigurasi Vercel
└── README.md       ← (opsional)
```

---

### Langkah 2 — Buat Repository di GitHub

1. Buka [github.com](https://github.com) dan login
2. Klik tombol **"New"** (atau ikon `+` > New repository)
3. Isi nama repository: `railpump-game`
4. Pilih **Public** (agar mudah di-deploy)
5. **Jangan** centang "Initialize this repository"
6. Klik **"Create repository"**

---

### Langkah 3 — Upload ke GitHub via Terminal

Buka Terminal / Command Prompt, lalu jalankan:

```bash
# Masuk ke folder game
cd railpump-game

# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "🚂 Initial commit - Kereta Pompa game"

# Hubungkan ke GitHub (ganti USERNAME dengan username GitHub kamu)
git remote add origin https://github.com/USERNAME/railpump-game.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

> **Tips:** Jika diminta username/password GitHub, gunakan Personal Access Token.
> Buat di: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

---

### Langkah 4 — Deploy ke Vercel

**Cara A — Via Website Vercel (Paling Mudah):**

1. Buka [vercel.com](https://vercel.com) dan login (bisa pakai akun GitHub)
2. Klik **"Add New Project"** atau **"New Project"**
3. Klik **"Import Git Repository"**
4. Pilih repository `railpump-game` yang tadi dibuat
5. Di halaman konfigurasi:
   - **Framework Preset:** pilih `Other`
   - **Root Directory:** biarkan `.` (default)
   - **Build Command:** kosongkan (tidak perlu)
   - **Output Directory:** kosongkan atau isi `.`
6. Klik **"Deploy"**
7. Tunggu 1-2 menit...
8. 🎉 **Selesai!** Vercel akan memberikan URL seperti `railpump-game.vercel.app`

---

**Cara B — Via Vercel CLI:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy (jalankan dari dalam folder railpump-game)
vercel

# Ikuti instruksi:
# - Set up and deploy? → Y
# - Which scope? → pilih akun kamu
# - Link to existing project? → N
# - Project name? → railpump-game
# - In which directory? → . (enter)
# - Override settings? → N

# Deploy ke production
vercel --prod
```

---

### Langkah 5 — Update Game (Setelah Edit)

Setiap kali kamu mengubah `index.html`:

```bash
git add .
git commit -m "✏️ Update game"
git push
```

Vercel akan **otomatis re-deploy** setelah push ke GitHub!

---

## 🌐 Custom Domain (Opsional)

1. Di dashboard Vercel, buka project kamu
2. Klik tab **"Domains"**
3. Klik **"Add Domain"**
4. Masukkan domain kamu (contoh: `keretapompa.com`)
5. Ikuti instruksi DNS yang diberikan Vercel

---

## 🛠️ Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Game tidak muncul | Pastikan `index.html` ada di root folder |
| Error saat push GitHub | Cek Personal Access Token |
| CDN Three.js gagal load | Periksa koneksi internet; CDN: `cdnjs.cloudflare.com` |
| Layar hitam di mobile | Aktifkan hardware acceleration di browser |

---

## 📁 Struktur Kode

```
index.html
├── CSS Styling     → HUD, overlay, tombol, animasi UI
├── Three.js Setup  → Renderer, scene, kamera, pencahayaan
├── Track System    → Spline bezier, slope detection
├── Rail Geometry   → Rel, bantalan kayu (sleepers)
├── Terrain         → Pohon, gunung, awan, langit
├── Trolley         → Kereta pompa + karakter anak 3D
├── Particles       → Efek debu/percikan saat pompa
├── Physics         → Gravitasi, kecepatan, rem, energi
├── Input System    → Keyboard + touch mobile
└── Game Loop       → requestAnimationFrame, HUD update
```

---

## ✨ Fitur Game

- 🌄 Trek rel 3D procedural dengan tanjakan dan turunan
- 🚂 Model kereta pompa 3D dengan animasi karakter
- ⚡ Sistem energi pompa yang realistis
- 🏔️ Fisika gravitasi berdasarkan kemiringan rel
- 🎮 HUD real-time: kecepatan, jarak, energi
- 📱 Support mobile dengan tombol layar sentuh
- 🌲 Environment 3D: pohon, gunung, awan, langit gradien
- ✨ Efek partikel saat memompa
- 🌫️ Fog atmosferik

---

*Made with Three.js — Deploy gratis di Vercel!*
