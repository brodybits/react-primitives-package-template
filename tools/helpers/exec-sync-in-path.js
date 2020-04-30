const child_process = require('child_process')

function execSyncInPath (command, path) {
  child_process.execSync(command, {
    cwd: path,
    stdio: [null, process.stdout, process.stderr],
    shell: true
  })
}

module.exports = execSyncInPath
