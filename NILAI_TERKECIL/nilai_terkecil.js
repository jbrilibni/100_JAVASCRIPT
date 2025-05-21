function cariNilaiTerkecil() {
  const n1 = parseInt(document.getElementById('n1').value);
  const n2 = parseInt(document.getElementById('n2').value);
  const n3 = parseInt(document.getElementById('n3').value);

  const terkecil = Math.min(n1, n2, n3);

  document.getElementById('hasil').textContent = 'Nilai terkecil adalah: ' + terkecil;
}