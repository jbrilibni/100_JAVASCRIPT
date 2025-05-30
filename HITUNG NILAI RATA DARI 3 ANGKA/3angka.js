function hitungRata() {
  const n1 = parseFloat(document.getElementById("nilai1").value);
  const n2 = parseFloat(document.getElementById("nilai2").value);
  const n3 = parseFloat(document.getElementById("nilai3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("hasilRata").innerText = "Masukkan semua nilai.";
    return;
  }

  const rata = (n1 + n2 + n3) / 3;
  document.getElementById("hasilRata").innerText = `Rata-rata: ${rata.toFixed(2)}`;
}