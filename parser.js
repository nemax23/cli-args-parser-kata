
/**
 * Parse arguments as strings or array. Returns array of parameters
 * @param {*} input 
 */
const getValidInput = (input) => {
    /**
     * Array input
     */
    if(input.startsWith('[') && input.endsWith(']')){
        /**
         * Remove any unnecessary space
         */
        const cleanedInput = input.replace(/\s/gi, '');
        return cleanedInput.substring(1, cleanedInput.length - 1).split(',');
    }
    /**
     * String input
     */
    return input.split(' ');
}

/**
 * Parse arguments and returns an Object with parsing result
 * @param {*} input 
 */
const parseInput = (input) => {
 
    const params = {};
 
    let lastParam = null;
    
    /**
     * Single loop on the arguments, O(n)
     */
    input.forEach((arg) => {
        if(arg.startsWith('--')){
            let param = arg.substring(2);
            lastParam = param;
            /**
             * we dont want to override any previously defined key-value
             */
            if(!params.hasOwnProperty(param)){
                params[param] = true;
            }
        } else if(lastParam !== null){
            /**
             * Support integer parsing
             */
            const newValue = isNaN(arg) ? arg : parseInt(arg);
            const currentValue = params[lastParam];
            if(currentValue === true){
                //first occurrence of a value for current parameter 
                params[lastParam] = newValue;
            } else if (Array.isArray(currentValue)){
                //nth occurrence of a value for current parameter (with n > 2) 
                params[lastParam] = [...currentValue, newValue];
            } else {
                //second occurrence of a value for current parameter 
                params[lastParam] = [currentValue, newValue];
            }
        }
    });
 
    return params;
}

/**
 * Parsing function. Validate first the input to support both string and array and then parse it 
 * @param {*} input 
 */
const parse = (input) => {
    const validatedInput = getValidInput(input);
    if(validatedInput.length === 0){
        return {};
    }
    return parseInput(validatedInput);

}

module.exports = {
    parse
}