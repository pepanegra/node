import os from "node:os";
import chalk from "chalk";
import process from "node:process";

console.log(chalk.green("Imfomacion del sistama operativo"));
console.log(chalk.yellow("Plataforma:", chalk.white(os.platform())));
console.log(chalk.yellow("Arqitectura:", chalk.white(os.arch())));
console.log(chalk.yellow("Version:", chalk.white(os.release())));

console.log(chalk.green("Directorio del usuario"));
console.log(chalk.bgWhite(chalk.black(os.homedir())));
