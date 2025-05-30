 function hitungFaktorial() {
            let n = parseInt(document.getElementById("inputAngka").value);
            let hasil = 1;

            if (n < 0) {
                hasil = "Tidak bisa menghitung faktorial bilangan negatif";
            } else {
                for (let i = 1; i <= n; i++) {
                    hasil *= i;
                }
            }

            document.getElementById("hasilFaktorial").innerText = "Faktorial dari " + n + " adalah: " + hasil;
        }