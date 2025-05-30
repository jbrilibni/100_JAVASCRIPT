 function tampilkanFibonacci() {
            const n = parseInt(document.getElementById("jumlah").value);
            if (isNaN(n) || n <= 0) {
                document.getElementById("hasil").innerText = "Masukkan angka positif valid.";
                return;
            }

            let fib = [0, 1];
            for (let i = 2; i < n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }

            const deret = fib.slice(0, n).join(", ");
            document.getElementById("hasil").innerText = "Deret Fibonacci: " + deret;
        }