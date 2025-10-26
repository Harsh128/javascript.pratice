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


// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });

// }
// async function demo() {
//     try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
//     }catch(err){
//         console.log ("error caught");
//         console.log (err);
//     }

// }
// demo();



// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000)
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000)
//     })
//     .then(() => {
//         console.log("green color was completed");
//         return changeColor("blue", 1000)
//     })
//     .then(() => {
//         console.log("blue color was completed");
//         return changeColor("orange", 1000)
//     })


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

// function gogo(pluse, multipuley) {
//     return new Promise((success, reject) => {
//         let innerqunting = Math.floor(Math.random() * 20) + 1;
//         if (innerqunting > 18)
//             for (let i = 1; i < 80; i += 8) {
//                 console.log(i);
//                 success();
//             } else {
//             reject();
//             console.log("reject data was not saved")
//         }


//     });

// }
// gogo("ok 2")
//     .then(() => {
//         console.log("success 1 data is ok");
//         return gogo("yoyo 3");
//     })
//     .then(() => {
//         console.log("success 2 data is ok");
//         return gogo("yoyo 4");
//     })
//     .then(() => {
//         console.log("success 3 data is ok");
//         return gogo("yoyo 5");
//     })
//     .then(() => {
//         console.log("success 4 data is ok");
//         return gogo("yoyo 6");
//     })
//     .catch(() => {
//         console.log("reject 1 data is not ok");

//     });


// function DVD (){
//     return function (){
//         let ok= 8+1;
//         console.log (ok);
//     }
// }

// DVD()();

// async function greet() {
//     throw "weak connection";
//     return "hello";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was:", result);
//     })
//     .catch(() => {
//         console.log("promise was rejected with error");
//     });


//     let demo = async()=>{
//         throw"not good connction";
//         return 5;
//     }


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log (num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo(params) {
//      await getNum();
//     getNum();
//     getNum();
//     getNum();
// }

// let jsonRes =
//     '{Built a modern E-Commerce Website using HTML, CSS, JavaScript & JSON}'

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);


// let student = {
//     name:"harsh",
//     marks: 56 
// };

// let url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)

//     .then((Response) => {
//         console.log(Response);
//         return Response .json();
//     })
//     then((data)=>{
//         console.log(data); 
//     })

//     .catch((err) => {
//         console.log("ERROR -", err);
//     })


    let url = "https://jsonplaceholder.typicode.com/todos/1";


    async function getfacts(){
        let res =await fetch(url);
        let data = await res.json ();
        console.log (data.facts);
    }