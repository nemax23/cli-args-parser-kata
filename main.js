
const readline = require('readline');
const { parse } = require('./parser');
 
const rl = readline.createInterface(process.stdin);
 
rl.on('line', (line) => {
    const result = parse(line);

    /**
     * Plain object print
     * console.log(output);
     */

    /**
     * String print
     */
    console.log(`Parsing result: ${JSON.stringify(result)}`);
});
 
