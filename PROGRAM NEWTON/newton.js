function updateForm() {
      const jenis = document.getElementById("pilih").value;
      const form = document.getElementById("inputForm");
      form.innerHTML = "";

      if (jenis === "F") {
        form.innerHTML = `
          <div class="input-group">
            <label for="massa">Massa (kg):</label>
            <input type="number" id="massa">
          </div>
          <div class="input-group">
            <label for="percepatan">Percepatan (m/s²):</label>
            <input type="number" id="percepatan">
          </div>
        `;
      } else if (jenis === "m") {
        form.innerHTML = `
          <div class="input-group">
            <label for="gaya">Gaya (N):</label>
            <input type="number" id="gaya">
          </div>
          <div class="input-group">
            <label for="percepatan">Percepatan (m/s²):</label>
            <input type="number" id="percepatan">
          </div>
        `;
      } else if (jenis === "a") {
        form.innerHTML = `
          <div class="input-group">
            <label for="gaya">Gaya (N):</label>
            <input type="number" id="gaya">
          </div>
          <div class="input-group">
            <label for="massa">Massa (kg):</label>
            <input type="number" id="massa">
          </div>
        `;
      }
    }

    function hitung() {
      const jenis = document.getElementById("pilih").value;
      const hasil = document.getElementById("hasil");

      let m, a, F;

      try {
        if (jenis === "F") {
          m = parseFloat(document.getElementById("massa").value);
          a = parseFloat(document.getElementById("percepatan").value);
          F = m * a;
          hasil.textContent = `Gaya yang dihasilkan adalah ${F.toFixed(2)} N`;
        } else if (jenis === "m") {
          F = parseFloat(document.getElementById("gaya").value);
          a = parseFloat(document.getElementById("percepatan").value);
          m = F / a;
          hasil.textContent = `Massa benda adalah ${m.toFixed(2)} kg`;
        } else if (jenis === "a") {
          F = parseFloat(document.getElementById("gaya").value);
          m = parseFloat(document.getElementById("massa").value);
          a = F / m;
          hasil.textContent = `Percepatan benda adalah ${a.toFixed(2)} m/s²`;
        } else {
          hasil.textContent = "Silakan pilih opsi terlebih dahulu.";
        }
      } catch (error) {
        hasil.textContent = "Terjadi kesalahan input.";
      }
    }