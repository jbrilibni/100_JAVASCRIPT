function cekBarang() {
  const jumlah = parseInt(document.getElementById('jumlah').value);
  const output = document.getElementById('output');

  if (isNaN(jumlah)) {
    output.innerText = 'Masukkan angka yang valid.';
    return;
  }

  if (jumlah >= 50) {
    output.innerText = 'Barang boleh dijual belikan.';
  } else if (jumlah <= 10) {
    output.innerText = 'Barang harus direstok.';
  } else {
    output.innerText = 'Barang tidak boleh diperjualbelikan.';
  }
}