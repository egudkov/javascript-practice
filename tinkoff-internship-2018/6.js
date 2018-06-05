const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.on('end', () => {
  process.exit(0);
});

rl.on('line', data => {
  const dataArr = data.split(' ').map(Number);
  const x = dataArr[0];
  const y = dataArr[1];

  const isBelowEyebrows = 0.5 * Math.abs(x) + 0.5 > y;
  const isInsideHead = 0.5 * x * x + y * y < 1;
  const isOutsideRightEye = (x - 0.5) * (x - 0.5) + y * y > 0.3;
  const isOutsideLeftEye = (x + 0.5) * (x + 0.5) + y * y > 0.3;
  const isOutsideEyes = isOutsideRightEye && isOutsideLeftEye;

  if (isBelowEyebrows && isInsideHead && isOutsideEyes) {
    console.log('YES');
  } else {
    console.log('NO');
  }
});

