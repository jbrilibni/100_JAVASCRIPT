  function cekUsia() {
            const usia = parseInt(document.getElementById("usia").value);
            if (isNaN(usia) || usia < 0) {
                document.getElementById("hasil").innerText = "Masukkan usia valid.";
                return;
            }
            if (usia >= 17) {
                document.getElementById("hasil").innerText = "Boleh nonton.";
            } else {
                document.getElementById("hasil").innerText = "Belum boleh nonton.";
            }
        }