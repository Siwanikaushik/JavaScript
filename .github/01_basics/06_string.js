const name ="Siwani-jb"
const repoCount = 50
console.log( name + repoCount + "value"); // not a good way
 
console.log(`Helo my name is ${name} and my repo count is ${repoCount}`); // better way , called string interpolation

const gameName = new String('lakshay-sk-com')
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // character at given position
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4);
console.log(newString);
const anotherString =gameName.slice(-10,4)
console.log(anotherString)

const newStringOne = "  Siwani.  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://siwani.com/siwani%20kaushik"
console.log(url.replace('%20','-'))
console.log(url.includes('happy'))

console.log(gameName.split('-'))