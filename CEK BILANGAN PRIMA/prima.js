  function cekPrima() {
            let angka = parseInt(document.getElementById("angka").value);
            let prima = true;

            if (angka <= 1) prima = false;
            for (let i = 2; i <= Math.sqrt(angka); i++) {
                if (angka % i === 0) {
                    prima = false;
                    break;
                }
            }

            document.getElementById("hasilPrima").innerText =
                prima ? angka + " adalah bilangan prima" : angka + " bukan bilangan prima";
        }