function konversiSuhu() {
  const c = parseFloat(document.getElementById("celsius").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(c)) {
      hasil.innerHTML = "<b>Input tidak valid.</b><br>Masukkan angka suhu Celsius dengan benar.";
      return;
  }

  const f = (9/5 * c) + 32;
  const k = c + 273.15;
  const r = (4/5 * c);

  hasil.innerHTML = `
      <strong>Hasil Konversi:</strong><br>
      ${f.toFixed(2)} Fahrenheit<br>
      ${k.toFixed(2)} Kelvin<br>
      ${r.toFixed(2)} Reamur
  `;
}