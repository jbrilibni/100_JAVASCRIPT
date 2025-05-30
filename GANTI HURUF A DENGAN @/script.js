 function gantiA() {
            const teks = document.getElementById("teks").value;
            const hasil = teks.replace(/a/gi, "@");
            document.getElementById("hasil").innerText = hasil;
        }