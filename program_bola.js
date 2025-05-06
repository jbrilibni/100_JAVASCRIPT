function hitungBola() {
  const r = parseFloat(document.getElementById('radius').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('output').innerText = 'Masukkan jari-jari yang valid!';
    return;
  }

  const luas = 4 * 3.14 * r * r;
  const volume = (4 / 3) * 3.14 * r * r * r;

  document.getElementById('output').innerHTML =
    `Luas: ${luas.toFixed(2)} cm²<br>Volume: ${volume.toFixed(2)} cm³`;
}