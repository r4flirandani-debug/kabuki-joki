# Kabuki Joki — Website

Website statis untuk jasa joki Mobile Legends. Dibuat dengan HTML, CSS, dan JavaScript sehingga bisa langsung diunggah ke GitHub dan di-deploy ke Vercel.

## Sebelum dipublikasikan

1. Buka `script.js`.
2. Cari baris `const ADMIN_WHATSAPP = "6281234567890";`.
3. Ganti dengan nomor WhatsApp admin dalam format internasional tanpa tanda `+`, spasi, atau angka `0` di depan. Contoh: `62812345678901`.
4. Periksa dan sesuaikan daftar harga contoh di `index.html`.
5. Simpan perubahan.

## Upload ke GitHub

1. Login atau buat akun di https://github.com/.
2. Klik **New repository**.
3. Isi nama repository, misalnya `kabuki-joki`, pilih **Public**, lalu klik **Create repository**.
4. Klik **Add file → Upload files**.
5. Upload `index.html`, `style.css`, `script.js`, `README.md`, dan `vercel.json` (atau upload semua isi folder proyek).
6. Klik **Commit changes**.

## Deploy ke Vercel

1. Buka https://vercel.com/ lalu daftar/login menggunakan GitHub.
2. Klik **Add New → Project**.
3. Pilih repository `kabuki-joki`, lalu klik **Import**.
4. Karena ini website statis, tidak perlu build command khusus. Framework Preset pilih **Other** dan biarkan Build Command serta Output Directory kosong.
5. Klik **Deploy**.
6. Setelah selesai, Vercel memberikan alamat website berakhiran `.vercel.app`.

## Mengubah konten

- Nomor WhatsApp admin: `script.js`, variabel `ADMIN_WHATSAPP`.
- Harga dan teks layanan: `index.html`.
- Warna, layout, dan tampilan: `style.css`.

Setiap perubahan yang di-commit ke branch utama GitHub akan memicu deployment baru di Vercel.

## Catatan

- Formulir menyusun detail pesanan dan membuka WhatsApp; tidak menyimpan pesanan ke database.
- Pastikan nomor admin benar sebelum website dibagikan.
- Jangan meminta pelanggan mengirim password akun. Pastikan layanan dan metode pengerjaan mematuhi ketentuan Mobile Legends: Bang Bang.
- Kabuki Joki bukan situs resmi Moonton atau Mobile Legends: Bang Bang.
