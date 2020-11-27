
const readline = require('readline')
const { parse } = require('./parser')

const rl = readline.createInterface(process.stdin)

rl.on('line', (line) => {
  const result = parse(line)
  console.log(`Parsing result: ${JSON.stringify(result)}`)
})
