import * as readline from 'node:readline';
import addFish from './database/add';
import find from './database/find';
import list from './database/list';
import { helpScript, initialScript } from './constants';
import { getParams, patternWithText } from './utils';
import update from './database/update';
import deleteFish from './database/delete';

/**
 * Entry point function that displays a script for a Fish Database and handles user input.
 *
 * @return {void} No return value
 */
export const main = (): void => {

    const rl: readline.ReadLine = readline.createInterface(
        process.stdin, process.stdout, undefined, false);

    rl.question("", async (answer: string) => {
        const params: any = getParams(answer);
        const getCommand = (command: string) => patternWithText(command).test(answer)

        if (getCommand("list")) {
            list(params)
        } else if (getCommand("help")) {
            console.log(helpScript)
        } else if (getCommand("add")) {
            addFish(params)
        } else if (getCommand("find")) {
            find(params)
        } else if (getCommand("update")) {
            update(params)
        } else if (getCommand("delete")) {
            deleteFish(params)
        } else if (getCommand("quit")) {
            process.exit()
        } else {
            console.log("Invalid Command")
        }
        rl.close();
        main()
    });
}

console.log(initialScript)
main()