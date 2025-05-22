function loopAngka2() {
    let output = '';
    let c = 1;
    while (c < 6) {
      output += c + '\n';
      c++;
    }
    output += '------+\n15';
    document.getElementById('hasil').textContent = output;
  }