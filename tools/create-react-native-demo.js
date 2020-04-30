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

const DEFAULT_REACT_NATIVE_VERSION = 'react-native@latest'

const demoName = getDemoName()

const reactNativeVersion = getDemoOption(DEFAULT_REACT_NATIVE_VERSION)

console.log('check for valid yarn & react-native CLI versions')

try {
  execSync(`yarn --version`)
} catch (e) {
  console.error('no valid yarn version found')
  process.exit(1)
}

try {
  execSync(`react-native --version`)
} catch (e) {
  console.error('no valid react-native CLI version found')
  process.exit(1)
}

console.log(`creating react-native demo with name: ${demoName}`)

console.log(
  `creating demo name: ${demoName} react-native version: ${reactNativeVersion}`
)

execSync(`react-native init ${demoName} --version ${reactNativeVersion}`)

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

console.log('overwrite demo App.js')

fs.writeFileSync(
  `${demoName}/App.js`,
  `module.exports = require('..')
`
)

console.log('write demo metro.config.js with multiple workarounds')

fs.writeFileSync(`${demoName}/metro.config.js`, metroConfigWorkaround)

console.log(`=== react-native demo with name: ${demoName} is now ready ===`)
