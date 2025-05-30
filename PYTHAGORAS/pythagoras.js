 function hitungKemiringan() {
            const a = parseInt(document.getElementById("a").value);
            const b = parseInt(document.getElementById("b").value);

            if (isNaN(a) || isNaN(b)) {
                document.getElementById("hasil").textContent = "Mohon masukkan nilai a dan b yang valid.";
                return;
            }

            const c = a**2 + b**2;

            document.getElementById("hasil").textContent = "Kemiringan adalah: " + c;
        }