// ===============================
// DATA FASILITAS KESEHATAN
// ===============================
const fasilitas = [
  {
    nama: "RS Umum Sehat",
    lokasi: "Jakarta",
    layanan: ["igd", "rawat inap", "poli"],
    jam: "24 Jam"
  },
  {
    nama: "Klinik Medika",
    lokasi: "Bandung",
    layanan: ["poli"],
    jam: "08.00 - 20.00"
  },
  {
    nama: "Puskesmas Harapan",
    lokasi: "Yogyakarta",
    layanan: ["poli"],
    jam: "07.00 - 15.00"
  },
  {
    nama: "RS Mitra Keluarga",
    lokasi: "Surabaya",
    layanan: ["igd", "rawat inap"],
    jam: "24 Jam"
  }
];

// ===============================
// TAMPILKAN DATA KE HTML
// ===============================
function tampilkanFasilitas(data) {
  const container = document.getElementById("fasilitas-list");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>Data fasilitas tidak ditemukan.</p>";
    return;
  }

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.nama}</h3>
        <p><strong>Lokasi:</strong> ${item.lokasi}</p>
        <p><strong>Jam Operasional:</strong> ${item.jam}</p>
        <p><strong>Layanan:</strong> ${item.layanan.join(", ")}</p>
        <a href="detail.html">Lihat Detail</a>
      </div>
    `;
  });
}

// ===============================
// FILTER + SEARCH
// ===============================
function filterFasilitas() {
  const keyword = document
    .getElementById("search")
    .value
    .toLowerCase();

  const layananDipilih = document
    .getElementById("filterLayanan")
    .value;

  const hasil = fasilitas.filter(item => {
    const cocokKeyword =
      item.nama.toLowerCase().includes(keyword) ||
      item.lokasi.toLowerCase().includes(keyword);

    const cocokLayanan =
      layananDipilih === "" ||
      item.layanan.includes(layananDipilih);

    return cocokKeyword && cocokLayanan;
  });

  tampilkanFasilitas(hasil);
}

// ===============================
// LOAD AWAL
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  tampilkanFasilitas(fasilitas);
});

// ===============================
// AGAR BISA DIPANGGIL HTML
// ===============================
window.filterFasilitas = filterFasilitas;
// JavaScript Document