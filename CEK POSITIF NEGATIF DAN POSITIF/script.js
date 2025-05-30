     function cekPositifNegatif() {
            const angka = parseFloat(document.getElementById("angka").value);
            let hasilText = "";

            if (isNaN(angka)) {
                hasilText = "Masukkan angka yang valid.";
            } else if (angka > 0) {
                hasilText = angka + " adalah angka POSITIF.";
            } else if (angka < 0) {
                hasilText = angka + " adalah angka NEGATIF.";
            } else {
                hasilText = "Angka adalah NOL.";
            }

            document.getElementById("hasil").innerText = hasilText;
        }