const fs = require('fs')

const path = require('path')

const process = require('process')

const getDemoName = require('./helpers/get-demo-name')

const execSync = require('./helpers/exec-sync')

const execSyncInPath = require('./helpers/exec-sync-in-path')

const addDependenciesInPath = require('./helpers/add-dependencies-in-path')

const rewiredConfigOverrides = require('./helpers/rewired-config-overrides.js')

const { peerDependencies } = require('../package.json')

const demoName = getDemoName()

console.log('check for valid yarn & create-react-app versions')

try {
  execSync(`yarn --version`)
} catch (e) {
  console.error('no valid yarn version found')
  process.exit(1)
}

try {
  execSync(`create-react-app --version`)
} catch (e) {
  console.error('no valid create-react-app version found')
  process.exit(1)
}

console.log(`creating expo demo with name: ${demoName}`)

execSync(`create-react-app ${demoName}`)

const demoPath = path.resolve(demoName)

console.log(`initialized demo in path: ${demoPath}`)

console.log('adding dependencies from package peerDependencies')

addDependenciesInPath(peerDependencies, demoPath)

console.log('adding react-app-rewired to demo in devDependencies')

execSyncInPath('yarn add --dev react-app-rewired', demoPath)

console.log(
  'update package scripts in demo to use react-app-rewired',
  '(as needed to apply webpack workaround for symlinks)'
)

const packageJson = fs.readFileSync(`${demoPath}/package.json`, 'utf8')

fs.writeFileSync(
  `${demoPath}/package.json`,
  packageJson.replace(/react-scripts /g, 'react-app-rewired ')
)

console.log('symlink src folder into demo src')

execSyncInPath('ln -s ../../src .', `${demoPath}/src`)

console.log('overwrite App.js in demo src')

fs.writeFileSync(
  `${demoName}/src/App.js`,
  `module.exports = require('./src')
`
)

console.log(
  'add config-overrides.js to demo, with webpack workaround for symlinks'
)

fs.writeFileSync(`${demoName}/config-overrides.js`, rewiredConfigOverrides)

console.log(`=== react-native-web demo with name: ${demoName} is now ready ===`)
