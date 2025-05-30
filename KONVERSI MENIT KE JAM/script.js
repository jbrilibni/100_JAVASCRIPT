function konversiWaktu() {
  const total = parseInt(document.getElementById("menit").value);
  const jam = Math.floor(total / 60);
  const sisa = total % 60;
  document.getElementById("hasil3").innerText = `${jam} jam ${sisa} menit`;
}