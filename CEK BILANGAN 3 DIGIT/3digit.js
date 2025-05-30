function cekTigaDigit() {
  const a = Math.abs(parseInt(document.getElementById("angka3d").value));
  document.getElementById("hasil11").innerText = (a >= 100 && a <= 999)
    ? "Bilangan tersebut adalah 3 digit"
    : "Bukan bilangan 3 digit";
}