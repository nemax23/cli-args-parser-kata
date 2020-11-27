const test = require('ava')
const parser = require('./parser')

test('Should give empty object with no parameters', async t => {
  t.deepEqual(parser.parse(''), {})
})

test('Should parse empty args', async t => {
  t.deepEqual(parser.parse('--foo --bar'), { foo: true, bar: true })
})

test('Should parse args values', async t => {
  t.deepEqual(parser.parse('--foo value1 --bar value2'), { foo: 'value1', bar: 'value2' })
})

test('Should parse multi args values as array', async t => {
  t.deepEqual(parser.parse('--foo value1 value2 --bar value3 value4'), { foo: ['value1', 'value2'], bar: ['value3', 'value4'] })
})

test('Should parse same args in different positions', async t => {
  t.deepEqual(parser.parse('--foo value1 value2 --bar value3 value4 --foo value5 --foo value6'), { foo: ['value1', 'value2', 'value5', 'value6'], bar: ['value3', 'value4'] })
})

test('Should parse args provided as array', async t => {
  t.deepEqual(parser.parse(['--foo', 'value1', '--bar', 'value3', '--foo', 'value2', '--bar', 'value4']), { foo: ['value1', 'value2'], bar: ['value3', 'value4'] })
})
