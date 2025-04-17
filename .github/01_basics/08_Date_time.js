/// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,23,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let my = new Date("01-14-2025")
console.log(my.toLocaleString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(my.getTime())
console.log(Math.floor(Date.now()/1000))//seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.toLocaleString('default',{
  weekday: "long"
}));











