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
// function hello() {
//     console.log("Harsh")
// }

// function demo() {
//     console.log("ok");
//     hello();
// }
// function nodemo() {
//     console.log("note ok");
//     demo();
// }
// nodemo();



// function one() {
//     return 6;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// setTimeout(() => {
//     console.log("apna collage")
// }, 2000);

// console.log("hello...");

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

// let tot = 3;
// function roro() {
//     for (let i = tot; i < 30; i += 3) {
//         console.log(i);

//     }

// }
// roro();

// function sum(a, b) {
//     return (a + b);
// }
// console.log(sum(2, 3));



// function multiply(a, b) {
//     return (a * b);
// }
// console.log(multiply(3, 6));


h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
        h1.style.color = color;
        resolve("color changed");
    }, delay);
    });
   
}
changeColor("red",1000)
.then(()=>{
    console.log ("red color was completed");
    return changeColor("orange",1000)
})
.then(()=>{
    console.log ("orange color was completed");
    return changeColor("green",1000)
})
.then(()=>{
    console.log ("green color was completed");
    return changeColor("blue",1000)
})
.then(()=>{
    console.log ("blue color was completed");
    return changeColor("orange",1000)
})

 
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {

//             });
//         });
//     });
// });



// let h4 = document.querySelector("h4");

// function changeStyle(color, size, delay, nextChange) {
//     setTimeout(() => {
//         h4.style.color = color;      
//         h4.style.fontSize = size;    
//         if (nextChange) nextChange(); 
//     }, delay);
// }


// changeStyle("red", "30px", 1000, () => {
//     changeStyle("orange", "40px", 1000, () => {
//         changeStyle("green", "50px", 1000, () => {
//             changeStyle("blue", "60px", 1000, () => {
//                 changeStyle("purple", "70px", 1000);
//             });
//         });
//     });
// });

// function savetoDb(data, Success, Failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//         Success();
//         console.log(internetspeed);
//     } else {
//         Failure();
//         console.log(internetspeed);
//     }
// }
// savetoDb(
//     "harsh",
//     () => {
//         console.log(" Success :your data was saved");
//         savetoDb("hello world", () => {
//             console.log("Success2: data to save")    // Neesting podision can work 
//         }, () => {
//             console.log("failure2 :weak connection ");  
//         })
//     },
//     () => {
//         console.log(" failure :weak connenton . data not saved")
//     }

// );


// function savetoDb(data) {
//     return new Promise((Success, failure) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         if (internetspeed > 4) {
//             Success("success : data was saved");
//             console.log(internetspeed);
//         } else {
//             failure("failure : weak connection");
//             console.log(internetspeed);
//         }
//     });
// }

// savetoDb("Harsh");


// function table(n) {
//     return function () {
//         for (let i = n; i < 20; i += 2) {
//             console.log(i);
//         };
//     }
// }
// table(2)();

// function voting() {
//     return function () {
//         let innernat = Math.floor(Math.random() * 10) + 1;
//         if (innernat < 5) {
//             console.log("rahul is voting ");
//         } else {
//             console.log("rahul is not voting");
//         }
//     }
// }

// voting()();

// function savetoDb() {
//     return new Promise((success, failure) => {
//         let innernatspeed = Math.floor(Math.random() * 20) + 1;
//         if (innernatspeed > 4) {
//             success("succee : data was saved");
//         } else {
//             failure("failure : data was not saved");
//         }

//     });
// }
// savetoDb();

// function table() {
//     return new Promise((success, failure) => {
//         let innerTablemaching = Math.floor(Math.random() * 20) + 1;
//         if (innerTablemaching > 10) {
//             success("success table")
//             for (let i = innerTablemaching; i < 100; i += 2) {
//                 console.log(i);
//             }
//         }
//         else {
//             failure("failure table")
           
//         }

//     });
// }


// table("Harsh")
//     .then((result) => {
//         console.log(" data 1 was saved");
//         console.log ("result of promise",result);
//        return table ("ksa ho app");
//     })
//     .then((result)=>{
//         console.log ("data2 saved");
//         console.log ("result of promise",result);
//         return table ("yoyo");
//     })
//     .then((result)=>{
//         console.log ("result of promise",result);
//       console.log ("data3 saved")
//     })
//     .catch((error) => {
//         console.log("promise was reject")
//         console.log ("error of promise",error);
//     })

