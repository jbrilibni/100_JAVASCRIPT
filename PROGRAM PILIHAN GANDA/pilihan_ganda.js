function cekJawaban() {
  const jawaban = document.getElementById('jawaban').value.toLowerCase();
  const output = document.getElementById('output');

  if (jawaban === 'b') {
    output.innerText = 'Benar!';
  } else {
    output.innerText = 'Salah, jawabannya adalah b.';
  }
}