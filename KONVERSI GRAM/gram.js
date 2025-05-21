function konversiGram() {
  const g = parseFloat(document.getElementById("gram").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(g) || g < 0) {
      hasil.innerHTML = "<b>Input tidak valid.</b><br>Masukkan angka massa dalam gram yang benar.";
      return;
  }

  const kg = g / 1000;
  const t = g / 1000000;
  const lb = g / 453.592;
  const oz = g / 28.3495;

  hasil.innerHTML = `
      <strong>Hasil Konversi:</strong><br>
      ${kg.toFixed(4)} Kilogram<br>
      ${t.toFixed(6)} Ton<br>
      ${lb.toFixed(4)} Pound (lb)<br>
      ${oz.toFixed(4)} Ounce (oz)
  `;
}