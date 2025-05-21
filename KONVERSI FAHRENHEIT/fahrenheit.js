function konversiFahrenheit() {
  const f = parseFloat(document.getElementById("fahrenheit").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(f)) {
      hasil.innerHTML = "<b>Input tidak valid.</b><br>Masukkan angka suhu Fahrenheit yang benar.";
      return;
  }

  const c = (5 / 9) * (f - 32);
  const k = c + 273.15;
  const r = (4 / 9) * (f - 32);

  hasil.innerHTML = `
      <strong>Hasil Konversi:</strong><br>
      ${c.toFixed(2)} Celsius<br>
      ${k.toFixed(2)} Kelvin<br>
      ${r.toFixed(2)} Reamur
  `;
}