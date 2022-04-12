const args = process.argv.slice(2);

for (let i of args) {
  if (!isNaN(i) && i >= 0) {
    setTimeout(() => process.stdout.write('\x07'), i * 1000);
  }
}