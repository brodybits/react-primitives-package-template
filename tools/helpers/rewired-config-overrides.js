const rewiredConfigOverrides = `// config-overrides.js

module.exports = {
  webpack: function (config, env) {
    config.resolve.symlinks = false
    return config
  }
}
`

module.exports = rewiredConfigOverrides
