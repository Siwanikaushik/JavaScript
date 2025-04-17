//array

const myArr = [0,1,2,3,4,5]

const myHeros = ["sahaktiman","naggaraj","spiderman"]
console.log(myArr[1]);
console.log(myHeros[1]);

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9) //added 9 to starting
console.log(myArr);
myArr.shift()//remove 9 from starting
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

console.log(typeof newArr);

// slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log('B',myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c",myArr);

const dc = ["superman","flash","batman"]
// myHeros.push(dc)
// console.log(myHeros);

// console.log(myHeros[3][1]);

const newHero =myHeros.concat(dc)
console.log(newHero);

const allHero = [...myHeros,...dc]
console.log(allHero);

const another_array =[1,2,3,[4,5,6],7,[6,[4,5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray('hitesh'))
console.log(Array.from('hitesh'))
console.log(Array.from({name: "hitesh"}))//impt


let score1 = 100
let score2 = 200
let score3 =300
console.log(Array.of(score1,score2,score3))














