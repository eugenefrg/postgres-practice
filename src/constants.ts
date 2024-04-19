export const helpScript = `
Enter 'add' to add a fish
    Example: add --name=<name> --species=<species> --origin=<Lake|River|Ocean|Sea>

Enter 'list' to list all fish
    Example: list [--name=<name>] [--species=<species>] [--origin=<Lake|River|Ocean|Sea>]

Enter 'update' to update a fish
    Example: update --id=<id> [--name=<name>] [--species=<species>] [--origin=<Lake|River|Ocean|Sea>]

Enter 'delete' to delete a fish
    Example: delete --id=<id>

Enter 'find' to find a fish
    Example: find --id=<id>

Enter 'quit' to exit\n
`
const asciiArt = `         ^
       //                        ___   ___
     (*)     "O"                /  _   _  \\
    (*)                           / \\ / \\
   (*)    "O"                    |   |   |    |\\
  //                             |O  |O  |___/  \\     ++
 //                               \\_/ \\_/    \\   | ++
//                              _/      __    \\  \\
/     /|   /\\                  (________/ __   |_/
     / |  |  |                   (___      /   |    |\\
    / /  /   |                     \\     \\|    |___/  |
   |  | |   /                       \\_________      _/   ++++
  /   | |  |                      ++           \\    |
 |   / /   |                              ++   |   /  +++
/   /  |   |                               ++ /__/
~~~ ~~~~   ~~~~~~~~~~~~  ~~~~~~~~~~~~~  ~~~~        ~~+++~~~~ ~`

const asciiTitle = `░        ░░       ░░░░      ░░░        ░░       ░░
▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒
▓      ▓▓▓▓       ▓▓▓  ▓▓▓▓▓▓▓▓      ▓▓▓▓  ▓▓▓▓  ▓
█  ████████  ████████  ████  ██  ████████  ████  █
█        ██  █████████      ███  ████████       ██
                                                  `

export const initialScript = `${asciiArt}\n${asciiTitle}\nEugene's Postgres CLI Fish Database\nEnter 'help' for help\n`


export const fishOrigins = ['Sea', 'River', 'Lake', 'Ocean'];