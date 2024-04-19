/**
 * Returns a RegExp that matches a string that starts with the given `text`
 * followed by either a space, the end of the string, or a '--' indicating
 * the start of a parameter.
 *
 * @param {string} text - The text to match at the start of the string.
 * @return {RegExp} The constructed RegExp.
 */
export const patternWithText = (text: string): RegExp => {
    // Builds a RegExp that matches a string that starts with the given text
    // followed by either a space, the end of the string, or a '--' indicating
    // the start of a parameter.
    return new RegExp(`^${text}(?: |$|--)`);
}


/**
 * Parses a command string and extracts parameters in the format of `--key=value` or `--key value`.
 *
 * @param {string} command - The command string to parse.
 * @return {Object} An object containing the parsed parameters, where the keys are the parameter names and the values are the corresponding parameter values.
 */
export const getParams = (command: string) => {
    const params: any = {};

    /**
     * Regular expression for matching parameters in the format of
     * `--key=value` or `--key value`.
     *
     * Groups:
     * 1. Key name
     * 2. Value if enclosed in double quotes
     * 3. Value if not enclosed in double quotes
     */
    const paramRegex = /--(\w+)(?:=(?:"([^"]+)"|(\S+)))?/g;

    let match;
    while ((match = paramRegex.exec(command)) !== null) {
        const key = match[1];
        const value = match[2] || match[3] || true; // Use true if value is not provided. Could expand this project to handle booleans in the future.
        params[key] = value;
    }

    return params
}