// CommonJs module
// const { readFileSync } = require("fs")
// ES Modules
// (File System) — pour interagir avec les fichiers et dossiers
import { readFileSync, existsSync } from "fs";
// (path) - pour manipuler les chemins de fichiers
import { join } from "path";
// (Operating System) — pour obtenir des infos sur le système
// équivalent du "~" dans le terminal.
import { homedir } from "os";
const data = readFileSync("recipes.json", "utf-8");
const track = JSON.parse(data);
console.log(track);
const home = homedir();
// console.log(home);
