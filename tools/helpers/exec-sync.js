const child_process = require('child_process')

function execSync (command) {
  child_process.execSync(command, {
    stdio: [null, process.stdout, process.stderr],
    shell: true
  })
}

module.exports = execSync
