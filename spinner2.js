process.stdout.write('hello from spinner1.js... \rheyyy\n');
const animChars = [
  '|', '/', '-', '\\',
  '|', '/', '-', '\\',
  '|', '/', '-', '\\',
  '|', '/', '-', '\\',
  '|', '/', '-', '\\',
  '|', '/', '-', '\\',
  '|', '/', '-', '\\',
  '|', '/', '-', '\\'
];
let i = 0;
let setTime = 0;

for (const anim of animChars) {
  setTimeout(() => {
    process.stdout.write('\r   : ' + anim);
  }, setTime);
  setTime = setTime + 300;
}
