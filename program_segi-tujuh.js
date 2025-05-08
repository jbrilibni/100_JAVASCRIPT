function hitungKeliling() {
  const s = parseInt(document.getElementById('sisi').value);
  const keliling = sisi => 7 * sisi;

  if (!isNaN(s)) {
    document.getElementById('output').innerText = `Keliling: ${keliling(s)}`;
  } else {
    document.getElementById('output').innerText = 'Mohon masukkan angka yang valid.';
  }
}