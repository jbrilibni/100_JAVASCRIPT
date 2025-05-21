function hitungTabung() {
  const r = parseFloat(document.getElementById("jari").value);
  const t = parseFloat(document.getElementById("tinggi").value);
  const phi = Math.PI;

  if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
    document.getElementById("hasil").innerHTML = "Masukkan angka yang benar dan lebih dari 0!";
    return;
  }

  const volume = phi * r * r * t;
  const luasPermukaan = 2 * phi * r * (r + t);

  document.getElementById("hasil").innerHTML = `
    <p><strong>Volume:</strong> ${volume.toFixed(2)} cm³</p>
    <p><strong>Luas Permukaan:</strong> ${luasPermukaan.toFixed(2)} cm²</p>
  `;
}