const os = require("node:os");

console.log("Información del sistema operativo:");
console.log("----------------------------------");
console.log("Nombre del sistema operativo:", os.platform());
console.log("Version del sistema operativo:", os.release());
console.log("Arquitectura del sistema operativo:", os.arch());
console.log("CPUs:", os.cpus().length);
console.log("uptime:", os.uptime / 60 / 60, "horas")