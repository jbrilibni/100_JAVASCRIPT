function panjangKata() {
  const kata = document.getElementById("kalimat4").value.split(" ");
  const max = kata.reduce((a, b) => a.length > b.length ? a : b, "");
  document.getElementById("hasil10").innerText = `Kata terpanjang: "${max}" (${max.length} huruf)`;
}