 function loopBintang() {
    let output = '';
    for(let a=0; a<=6; a++) {
      output += '*'.repeat(a) + '\n';
    }
    document.getElementById('hasil').textContent = output;
  }