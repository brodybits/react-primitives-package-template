function getDemoName () {
  if (process.argv.length < 3) {
    console.error('missing demo name')
    process.exit(1)
  }

  return process.argv[2]
}

module.exports = getDemoName
