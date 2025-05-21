function hitungTrapesium() {
  const s1 = parseFloat(document.getElementById('s1').value);
  const s2 = parseFloat(document.getElementById('s2').value);
  const s3 = parseFloat(document.getElementById('s3').value);
  const s4 = parseFloat(document.getElementById('s4').value);
  const t = parseFloat(document.getElementById('t').value);

  if ([s1, s2, s3, s4, t].some(isNaN)) {
    document.getElementById('output').innerText = 'Mohon isi semua nilai dengan angka yang valid.';
    return;
  }

  const luas = 0.5 * (s1 + s2) * t;
  const keliling = s1 + s2 + s3 + s4;

  document.getElementById('output').innerHTML = `
    Luas: ${luas.toFixed(2)}<br>
    Keliling: ${keliling.toFixed(2)}
  `;
}