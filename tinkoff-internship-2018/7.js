const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dict = {};

process.stdin.on('end', () => {
  let level = 1;
  let levelBossArr = ['X'];
  let resultArr = ['X 0'];
  const employees = Object.keys(dict);

  while (levelBossArr.length) {
    levelBossArr = employees.filter(employee => levelBossArr.includes(dict[employee]));
    resultArr = resultArr.concat(levelBossArr.map(employee => `${employee} ${level}`));
    level += 1;
  }

  resultArr.sort();

  resultArr.forEach(str => {
    console.log(str);
  });

  process.exit(0);
});

let stringCounter = 0;

rl.on('line', data => {
  stringCounter += 1;

  if (stringCounter === 1) {
    return;
  }

  const [employee, boss] = data.split(' ');

  dict[employee] = boss;
});
