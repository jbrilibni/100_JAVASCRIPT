function cekKesehatan() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const usia = parseInt(document.getElementById("usia").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(berat) || isNaN(tinggi) || isNaN(usia) || berat <= 0 || tinggi <= 0 || usia <= 0) {
      hasil.innerHTML = "<b>Input tidak valid.</b><br>Masukkan angka positif untuk berat, tinggi, dan usia.";
      return;
  }

  const bmi = berat / (tinggi * tinggi);
  let kategori = "";
  let risiko = "";

  if (bmi < 18.5) {
      kategori = "Kekurangan berat badan";
      risiko = "- Malnutrisi<br>- Osteoporosis<br>- Sistem imun yang lemah";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Berat badan normal";
      risiko = "Risiko rendah untuk masalah kesehatan.";
  } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Kelebihan berat badan";
      risiko = "- Diabetes tipe 2<br>- Penyakit jantung<br>- Tekanan darah tinggi";
  } else {
      kategori = "Obesitas";
      risiko = "- Diabetes tipe 2<br>- Penyakit jantung<br>- Hipertensi<br>- Masalah tidur (sleep apnea)<br>- Beberapa jenis kanker";
  }

  hasil.innerHTML = `
      <strong>Indeks Massa Tubuh (BMI) Anda:</strong> ${bmi.toFixed(2)}<br>
      <strong>Kategori:</strong> ${kategori}<br>
      <strong>Risiko kesehatan:</strong><br>${risiko}
  `;
}