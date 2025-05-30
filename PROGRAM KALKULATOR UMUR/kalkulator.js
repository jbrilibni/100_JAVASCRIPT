        function hitungUmur() {
            let tglLahir = new Date(document.getElementById("tanggalLahir").value);
            let hariIni = new Date();
            let umur = hariIni.getFullYear() - tglLahir.getFullYear();
            let bulan = hariIni.getMonth() - tglLahir.getMonth();

            if (bulan < 0 || (bulan === 0 && hariIni.getDate() < tglLahir.getDate())) {
                umur--;
            }

            document.getElementById("hasilUmur").innerText = "Umur kamu adalah: " + umur + " tahun";
        }