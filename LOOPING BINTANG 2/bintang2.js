function loopBintang2() {
    let output = '';
    let l = 5;
    for(let b=0; b<5; b++) {
      output += '*'.repeat(l) + '\n';
      l--;
    }
    document.getElementById('hasil').textContent = output;
  }