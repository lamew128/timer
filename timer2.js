const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
console.log(`press b to beep right away.`);
console.log(`press 1 - 9 to set the beep timer.`);
console.log(`press ctrl + c to exit.`);
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), Number(key) * 1000);
  } else if (key === '\u0003') {
    process.exit();
  }
});