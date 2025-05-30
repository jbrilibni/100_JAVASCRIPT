  function cekKelipatan() {
            const angka = parseInt(document.getElementById("angka").value);
            let hasilText = "";

            if (isNaN(angka)) {
                hasilText = "Masukkan angka yang valid.";
            } else if (angka % 3 === 0 && angka % 5 === 0) {
                hasilText = angka + " adalah kelipatan 3 dan 5.";
            } else if (angka % 3 === 0) {
                hasilText = angka + " adalah kelipatan 3.";
            } else if (angka % 5 === 0) {
                hasilText = angka + " adalah kelipatan 5.";
            } else {
                hasilText = angka + " bukan kelipatan 3 maupun 5.";
            }

            document.getElementById("hasil").innerText = hasilText;
        }