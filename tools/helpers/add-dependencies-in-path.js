const execSyncInPath = require('./exec-sync-in-path')

function addDependenciesInPath (dependencies, path) {
  const all = Object.keys(dependencies)
    .map(entry => `${entry}@${dependencies[entry]}`)
    .join(' ')

  console.log(`adding dependencies: ${all}`)

  execSyncInPath(`yarn add ${all}`, path)
}

module.exports = addDependenciesInPath
