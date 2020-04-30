function getDemoOption (defaultValue) {
  if (process.argv.length > 3) {
    return process.argv[3]
  } else {
    return defaultValue
  }
}

module.exports = getDemoOption
