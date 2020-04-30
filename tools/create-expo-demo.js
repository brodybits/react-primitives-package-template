const fs = require('fs')

const path = require('path')

const process = require('process')

const getDemoName = require('./helpers/get-demo-name')

const getDemoOption = require('./helpers/get-demo-option')

const execSync = require('./helpers/exec-sync')

const execSyncInPath = require('./helpers/exec-sync-in-path')

const addDependenciesInPath = require('./helpers/add-dependencies-in-path')

const metroConfigWorkaround = require('./helpers/metro-config-workaround')

const { peerDependencies } = require('../package.json')

// It is possible to overwrite this to use earlier version of expo ref:
// https://github.com/expo/expo-cli/issues/142
const DEFAULT_EXPO_TEMPLATE = 'blank'

const demoName = getDemoName()

const expoTemplate = getDemoOption(DEFAULT_EXPO_TEMPLATE)

console.log('check for valid yarn & expo versions')

try {
  execSync(`yarn --version`)
} catch (e) {
  console.error('no valid yarn version found')
  process.exit(1)
}

try {
  execSync(`expo --version`)
} catch (e) {
  console.error('no valid expo version found')
  process.exit(1)
}

console.log(
  `creating expo demo with name: ${demoName} template: ${expoTemplate}`
)

execSync(`expo init ${demoName} --template ${expoTemplate}`)

const demoPath = path.resolve(demoName)

console.log(`initialized demo in path: ${demoPath}`)

console.log('adding dependencies from package peerDependencies')

addDependenciesInPath(peerDependencies, demoPath)

console.log('overwrite demo App.js')

fs.writeFileSync(
  `${demoName}/App.js`,
  `module.exports = require('..')
`
)

console.log('write demo metro.config.js with multiple workarounds')

fs.writeFileSync(`${demoName}/metro.config.js`, metroConfigWorkaround)

console.log(`=== expo demo with name: ${demoName} is now ready ===`)
