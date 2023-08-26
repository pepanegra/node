const process = require("node:process");
require("dotenv").config();

if (process.argv[2]) {
    console.log(`Hello ${process.argv[2]}`);
    process.on("exit", () => {
      console.log("Good bye the process to finish");
    });
} else{ 
    console.log("Something went wrong, please write your name")
    process.exit(0);
}


if (process.env.NODE_ENV === "development") {
  console.log("We are in development");
} else if (process.env.NODE_ENV === "production") {
  console.log("We are in production");
} else {
  console.log("Enviroment variable not found");
}
