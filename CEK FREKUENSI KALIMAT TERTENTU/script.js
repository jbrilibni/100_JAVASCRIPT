function cekFrekuensi() {
  const kalimat = document.getElementById("kalimat3").value.toLowerCase();
  const huruf = document.getElementById("huruf").value.toLowerCase();
  let jumlah = 0;
  for (let karakter of kalimat) {
    if (karakter === huruf) jumlah++;
  }
  document.getElementById("hasil6").innerText = `Huruf '${huruf}' muncul sebanyak ${jumlah} kali.`;
}