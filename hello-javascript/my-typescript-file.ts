let a = 2;
let b = 3;
let s = "3"

function add(a:number,b:number):number{
    return +a + +b;
}

function multiply(a:number,b:number){
    return +a * +b;
}

console.log(add(a,b));
console.log(multiply(a,b))

console.log(add(a,s));
console.log(multiply(a,s))