function hitungSegitiga() {
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const alas = parseFloat(document.getElementById('alas').value);
  const sisi = parseFloat(document.getElementById('sisi').value);

  if ([tinggi, alas, sisi].some(val => isNaN(val) || val <= 0)) {
    document.getElementById('output').innerText = 'Semua input harus angka positif!';
    return;
  }

  const luas = 0.5 * alas * tinggi;
  const keliling = 3 * sisi;

  document.getElementById('output').innerHTML =
    `Luas: ${luas.toFixed(2)} cm²<br>Keliling: ${keliling.toFixed(2)} cm`;
}