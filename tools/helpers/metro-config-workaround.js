const metroConfigWorkaround = `// metro.config.js with multiple workarounds
// with thanks for some pointers:
// - https://github.com/facebook/metro/issues/1#issuecomment-541642857
// - https://github.com/brodybits/create-react-native-module/issues/232

const path = require('path')

module.exports = {
  // workaround for issue with symlinks encountered starting with
  // metro@0.55 / React Native 0.61
  // (not needed with React Native 0.60 / metro@0.54)
  resolver: {
    extraNodeModules: new Proxy(
      {},
      { get: (_, name) => path.resolve('.', 'node_modules', name) }
    )
  },

  // another workaround needed
  watchFolders: [path.resolve('.'), path.resolve('..')]
}
`

module.exports = metroConfigWorkaround
