function jumlahDigit() {
  const angka = document.getElementById("angka1").value;
  let jumlah = 0;
  for (let digit of angka) {
    jumlah += parseInt(digit);
  }
  document.getElementById("hasil1").innerText = `Jumlah digit: ${jumlah}`;
}