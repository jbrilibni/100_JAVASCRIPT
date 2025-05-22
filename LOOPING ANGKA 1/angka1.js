 function loopAngka() {
    let output = '';
    let a = 1;
    let sum = 0;
    while (a < 6) {
      output += a + ' ';
      sum += a;
      a++;
    }
    output += '= ' + sum;
    document.getElementById('hasil').textContent = output;
  }