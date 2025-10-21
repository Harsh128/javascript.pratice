// h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("yellow",1000)
//     })
// })
// container=document.changeColor("green",2000,()=>{

// });
function hello() {
    console.log("Harsh")
}

function demo() {
    console.log("ok");
    hello();
}
function nodemo() {
    console.log("note ok");
    demo();
}
nodemo();



function one() {
    return 6;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
}
three();

setTimeout(() => {
    console.log("apna collage")
}, 2000);

console.log("hello...");

// let a = 0;
// for (let i = a; i < 5; i++) {
//     console.log(i);
// }

//  function uouo(){

//     for (let i=2; i<20; i+=2){
//         console.log (i);
//     }
//  }
//  uouo();

// let yoy =12;
//  function eco(){
//     for(let i=yoy; i<120; i+=12){
//         console.log(i);
//     }

//  }
//  eco();


// let a = 2;
// let b = 3;
// function sum() {
//     return function munlti() {
//         console.log( a + b + 10)
//     };
// }
// sum()();

let tot = 3;
function roro() {
    for (let i = tot; i < 30; i += 3) {
        console.log(i);
        
    }

}
roro();

function sum (a,b){
    return (a+b);
}
console.log (sum(2,3));



function  multiply(a,b){
    return (a*b);
}
console.log (multiply(3,6));


