function hitungKubus() {
  const sisi = parseFloat(document.getElementById('sisi').value);

  if (isNaN(sisi) || sisi <= 0) {
    document.getElementById('hasil').innerHTML = '<p style="color:red;">Masukkan angka yang valid!</p>';
    return;
  }

  const volume = Math.pow(sisi, 3); // sisi^3
  const luasPermukaan = 6 * Math.pow(sisi, 2); // 6 × sisi²

  document.getElementById('hasil').innerHTML = `
    <p><strong>Volume Kubus:</strong> ${volume.toFixed(2)} cm³</p>
    <p><strong>Luas Permukaan Kubus:</strong> ${luasPermukaan.toFixed(2)} cm²</p>
  `;
}

