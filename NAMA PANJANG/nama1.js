 function hitungPanjang() {
      const nama = document.getElementById("namaInput").value.trim();
      const output = document.getElementById("outputHasil");

      if (nama === "") {
        output.innerHTML = `<span class="error">Masukkan inputan bertipe string saja.</span>`;
      } else {
        const panjang = nama.length;
        output.innerHTML = `Panjang nama anda adalah = <strong>${panjang}</strong>`;
      }
    }