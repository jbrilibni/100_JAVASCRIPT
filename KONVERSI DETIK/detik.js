function konversiDetik() {
  let detik = parseInt(document.getElementById("detik").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(detik) || detik < 0) {
      hasil.innerHTML = "<b>Input tidak valid.</b><br>Masukkan angka detik yang benar dan positif.";
      return;
  }

  const DETIK_HARI = 60 * 60 * 24;
  const DETIK_JAM = 60 * 60;

  const hari = Math.floor(detik / DETIK_HARI);
  detik %= DETIK_HARI;

  const jam = Math.floor(detik / DETIK_JAM);
  detik %= DETIK_JAM;

  const menit = Math.floor(detik / 60);
  detik %= 60;

  hasil.innerHTML = `
      <strong>Hasil Konversi:</strong><br>
      ${hari} hari ${jam} jam ${menit} menit ${detik} detik
  `;
}