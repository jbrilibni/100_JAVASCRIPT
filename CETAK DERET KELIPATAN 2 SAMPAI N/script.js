  function cetakKelipatan2() {
            const n = parseInt(document.getElementById("inputN").value);
            if (isNaN(n) || n < 2) {
                document.getElementById("hasil").innerText = "Masukkan angka minimal 2.";
                return;
            }
            let hasil = [];
            for(let i = 2; i <= n; i += 2) {
                hasil.push(i);
            }
            document.getElementById("hasil").innerText = "Deret kelipatan 2: " + hasil.join(", ");
        }