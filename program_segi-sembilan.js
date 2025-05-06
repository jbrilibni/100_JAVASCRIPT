function hitungKeliling() {
  const s = parseFloat(document.getElementById('sisi').value);
  if (isNaN(s) || s <= 0) {
    document.getElementById('hasil').innerText = 'Masukkan panjang sisi yang valid!';
    return;
  }

  const keliling = (s) => 9 * s; // lambda dalam bentuk arrow function
  document.getElementById('hasil').innerText = `Keliling: ${keliling(s).toFixed(2)} cm`;
}