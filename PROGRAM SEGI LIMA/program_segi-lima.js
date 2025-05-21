function hitungKeliling() {
  const s = parseFloat(document.getElementById('sisi').value);
  if (isNaN(s) || s <= 0) {
    document.getElementById('hasil').innerText = 'Masukkan panjang sisi yang valid!';
    return;
  }

  const keliling = 5 * s;
  document.getElementById('hasil').innerText = `Keliling: ${keliling.toFixed(2)} cm`;
}