// window es el objeto global del navegador
// console.log(window)

// global es el objeto global de Node JS
// console.loga(global)

// window !== global -> son diferentes

console.log("1. Esto se ejecuta de inmediato");

setTimeout(() => {
  console.log("2. Esto se ejecuta despues de 3 segundo");
}, 3000);
