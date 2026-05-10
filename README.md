# Personal Profile Website - Daffa Mashabi

## Informasi Mahasiswa
- **Nama:** Daffa Mashabi
- **NIM:** 24.61.0282
- **Kelas:** 24 BCI 01
- **Prodi:** Bachelor of Informatics - Universitas Amikom Yogyakarta

## Deskripsi Project
Project ini adalah website profil pribadi modern yang dibuat untuk memenuhi tugas praktikum mata kuliah Pemrograman Web. Website ini dirancang untuk menampilkan identitas diri, keahlian teknis, dan portofolio project sebagai mahasiswa informatika dengan estetika premium dan profesional.

## Teknologi yang Digunakan
- **HTML5**: Struktur konten semantik untuk aksesibilitas dan SEO.
- **Tailwind CSS 4**: Framework CSS terbaru untuk desain modern dan responsif.
- **JavaScript (Vanilla)**: Logika interaktif, navigasi, dan animasi.
- **Vite**: Build tool modern untuk performa pengembangan yang cepat.
- **Lucide Icons**: Library ikon vektor yang ringan dan modern.

## Fitur
- **Responsive Layout**: Tampilan optimal di perangkat mobile, tablet, maupun desktop.
- **Hero Section**: Perkenalan singkat dengan efek visual yang menarik.
- **About Me Section**: Informasi latar belakang pendidikan dan fokus pengembangan.
- **Skills Section**: Daftar toolkit teknis dengan efek hover interaktif.
- **Projects Section**: Portfolio karya dengan layout grid dan detail visual.
- **Contact Section**: Akses cepat melalui Email, GitHub, dan Instagram.
- **Interaksi JavaScript**: Fitur mobile menu toggle dan animasi reveal on scroll.
- **Interactive UI**: Mobile menu toggle dan animasi *reveal on scroll* untuk pengalaman pengguna yang dinamis.

## Cara Menjalankan Project
Project ini menggunakan **Track B (Vite + Tailwind CSS)**. Ikuti langkah berikut:

1. **Clone atau Download** repository ini.
2. Buka terminal di folder project.
3. Jalankan perintah untuk menginstall dependensi:
   ```bash
   npm install
   ```
4. Jalankan project dalam mode development:
   ```bash
   npm run dev
   ```
5. Untuk melihat versi produksi (teroptimasi):
   ```bash
   npm run build
   npm run preview
   ```

## Refleksi Penggunaan AI
Saya menggunakan Gemini AI sebagai asisten pemograman untuk membantu:
- Memahami konfigurasi dan integrasi **Tailwind CSS 4** yang masih sangat baru.
- Mencari solusi optimasi gambar dari format `.png` ke `.avif` untuk meningkatkan performa Mobile.
- Memberikan saran mengenai aksesibilitas, seperti penggunaan `aria-label` pada tombol.
- Menyusun logika JavaScript yang efisien untuk *Intersection Observer* agar animasi berjalan mulus.
- Menyusun struktur grid dan flexbox yang kompleks agar tampilan tetap rapi di semua ukuran layar.

**Bagian yang saya kerjakan atau modifikasi sendiri:**
- Menentukan skema warna gelap (*dark mode*) dan estetika *glassmorphism*.
- Menulis seluruh konten teks profil, deskripsi project, dan riwayat pendidikan.
- Mengatur susunan grid pada bagian portofolio agar bisa menampilkan beberapa screenshot sekaligus.
- Melakukan kustomisasi pada efek transisi dan hover untuk memberikan kesan premium.
- Mengonversi gambar manual ke format AVIF dan mengatur path direktori `public/images/`.
- Mengubah Hero Section dari layout samping-menyamping menjadi layout atas-bawah pada mobile untuk keterbacaan yang lebih baik.
- Menulis dan memperbarui seluruh deskripsi project, link sosial media (Instagram/GitHub), serta informasi biodata.
- Memilih warna brand (Blue-Slate) dan mengatur efek *Glassmorphism* pada navbar agar terlihat premium.
- Memilih untuk menghapus elemen yang kurang penting (seperti Logic Design) demi performa yang lebih kencang.

**Hal yang saya pelajari:**
- Saya belajar bahwa penggunaan sistem build tool seperti Vite sangat mempermudah manajemen aset dan CSS modern.
- Saya memahami cara kerja *Utility-first CSS* dari Tailwind untuk membuat komponen UI yang konsisten tanpa harus menulis ribuan baris CSS manual.
- Saya belajar bagaimana menggunakan JavaScript untuk memberikan *feedback* visual kepada pengguna (seperti animasi saat scroll).
- Saya belajar bahwa format gambar (seperti AVIF) dan cara pemuatan script (seperti `defer` dan posisi di bawah body) sangat berpengaruh pada skor Lighthouse.
- Saya memahami cara menggunakan *Utility Classes* Tailwind untuk membuat satu elemen tampil berbeda di layar kecil dan besar.
- Saya belajar bahwa menambahkan label kecil seperti `aria-label` sangat membantu pengguna yang menggunakan alat bantu baca layar.
- Saya memahami perbedaan antara mode `dev` dan `build`, serta pentingnya melakukan *minifikasi* pada kode produksi.

**Bagian kode yang dapat saya jelaskan:**
- Saya dapat menjelaskan bagaimana tag semantik HTML digunakan untuk membagi website menjadi section yang jelas.
- Saya dapat menjelaskan bagaimana JavaScript mengubah state menu mobile dari `hidden` menjadi terlihat.
- Cara pembagian `<header>`, `<main>`, dan `<footer>` sebagai standar struktur website modern.
- Penggunaan class `grid-cols-2 lg:grid-cols-3` untuk membuat kartu project otomatis menyesuaikan jumlah kolom.
- Cara kerja pengamatan scroll (Intersection Observer) yang mendeteksi saat elemen masuk ke layar untuk memicu animasi.

---
*Dibuat untuk tugas Pemrograman Web 2026.*
