
        const menuBulan = {
            "januari": 31,
            "februari": 29,
            "maret": 31,
            "april": 30,
            "mei": 31,
            "juni": 30,
            "juli": 31,
            "agustus": 31,
            "september": 30,
            "oktober": 31,
            "november": 30,
            "desember": 31
        };

        function tampilkanHari() {
            const bulan = document.getElementById("bulan").value.toLowerCase();
            const output = document.getElementById("output");

            if (menuBulan[bulan]) {
                output.textContent = `${bulan.charAt(0).toUpperCase() + bulan.slice(1)} memiliki ${menuBulan[bulan]} hari.`;
            } else {
                output.textContent = "Silakan pilih bulan terlebih dahulu.";
            }
        }
