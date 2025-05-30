function hitungKonsonan() {
  const teks = document.getElementById("kalimat1").value.toLowerCase();
  const konsonan = teks.match(/[bcdfghjklmnpqrstvwxyz]/g);
  document.getElementById("hasil4").innerText = `Jumlah konsonan: ${konsonan ? konsonan.length : 0}`;
}