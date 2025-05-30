function hitungSelisih() {
  const t1 = new Date(document.getElementById("tgl1").value);
  const t2 = new Date(document.getElementById("tgl2").value);

  if (isNaN(t1) || isNaN(t2)) {
    document.getElementById("hasilSelisih").innerText = "Masukkan kedua tanggal.";
    return;
  }

  const selisihMs = Math.abs(t2 - t1);
  const selisihHari = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));

  document.getElementById("hasilSelisih").innerText = `Selisih hari: ${selisihHari} hari`;
}