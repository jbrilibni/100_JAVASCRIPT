function hitungKecepatan() {
  const jarak = parseFloat(document.getElementById('jarak').value);
  const waktu = parseFloat(document.getElementById('waktu').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(jarak) || isNaN(waktu) || waktu === 0) {
      hasil.textContent = "Inputan anda tidak valid. Pastikan angka diisi dengan benar dan waktu tidak nol.";
  } else {
      const kecepatan = jarak / waktu;
      hasil.textContent = `Kecepatan kendaraan anda adalah = ${kecepatan.toFixed(2)} m/s`;
  }
}