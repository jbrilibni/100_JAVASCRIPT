   function cetakTabel() {
            let output = '';
            for (let i = 1; i <= 10; i++) {
                for (let j = 1; j <= 10; j++) {
                    output += `${i} x ${j} = ${i*j}\t`;
                }
                output += '\n';
            }
            document.getElementById("hasil").innerText = output;
        }