let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 0;
for (const phase of spinner) {
  setTimeout(() => process.stdout.write(`\r${phase}   `), timer);
  timer += 200;
}
setTimeout(() => console.log(), spinner.length * 200);