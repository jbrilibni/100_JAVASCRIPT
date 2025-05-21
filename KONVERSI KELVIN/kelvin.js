function konversiKelvin() {
  const k = parseFloat(document.getElementById("kelvin").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(k) || k < 0) {
      hasil.innerHTML = "<b>Input tidak valid.</b><br>Masukkan angka suhu dalam Kelvin yang benar (≥ 0).";
      return;
  }

  const c = k - 273.15;
  const f = (9/5) * (k - 273.15) + 32;
  const r = (4/5) * (k - 273.15);

  hasil.innerHTML = `
      <strong>Hasil Konversi:</strong><br>
      ${c.toFixed(2)} Celsius<br>
      ${f.toFixed(2)} Fahrenheit<br>
      ${r.toFixed(2)} Reamur
  `;
}