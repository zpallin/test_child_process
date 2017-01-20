var child_process = require('child_process');
var spawn = child_process.spawnSync;

var output = spawn("python", ["./test.py"], { 
  cwd: process.cwd(),
  env: process.env,
  stdio: 'pipe',
  encoding: 'utf-8'
});

console.log(output.stdout);
