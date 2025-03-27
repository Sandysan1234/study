// const requestcallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("error: connection timeout");
//     } else {
//       success(`Success: ${url}(${delay} ms)`);
//     }
//   }, delay);
// };

// const requestpromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("error: connection timeout");
//       } else {
//         resolve(`Success: ${url}(${delay} ms)`);
//       }
//     }, delay);
//   });
// };

//CALLBACK FUNCTION TAPI MASIH GAGAL
// requestpromise('movie.com').then((response)=>{
//     console.log('succes', response);
// }).catch((error) => {
//     console.log('error',error);

// })

//  "CARA MENGGUNAKAN FUNGSI PROMISE YANG BENAR"
// requestpromise('movie.com')
//     .then((result)=>{
//         console.log('success1');
//         console.log(result);
//         return requestpromise('movie.com')
//     })
//     .then(()=>{
//         console.log('success2');
//         return requestpromise('movie.com')

//     })
//     .then(()=>{
//         console.log('success3');
//         return requestpromise('movie.com')

//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//"CARA MEMBAUT PROMISE"
// const contohpromise=()=>{
//     return new Promise((resolve, reject) => {
//         resolve(()=>{
//             'berhasil';
//         })
//         reject(()=>{
//             'gagal'

//         })
//     })

// }

// const colordelaychange = (color, delay)=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay);
//     })
// }

// colordelaychange("red",1000)
//     .then (()=>colordelaychange("blue",1000))
//     .then (()=>colordelaychange("purple",1000))
//     .then (()=>colordelaychange("green",1000))
//     .then (()=>colordelaychange("yellow",1000))

// fungsi async keyword

// async function hello() {
//     console.log("helloworld");

// }

// const hello = async () => {
//     return "hello world"
// }

// hello().then((res)=>{
//     console.log('response', res);

// }).catch((err)=>{
//     console.log('error', err);

// })
//async berguna untuk mengubah function biasa menjadi promise

//END

// // 'fungsi await keyword'
// const colordelaychange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// async function changecolor() {
//   await colordelaychange("red", 1000);
//   await colordelaychange("yellow", 1000);
//   await colordelaychange("green", 1000);
//   await colordelaychange("blue", 1000);

//   return 'all done'
// }

// async function printrainbow() {
//     await changecolor();
//     console.log('all done');
    
// }


        // MEGELOLA KONDISI EROR DENGAN ASYNC AWAIT
// const requestpromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//         if (delay > 4000) {
//             reject("error: connection timeout");
//         } else {
//             resolve(`Success: ${url}(${delay} ms)`);
//         }
//         }, delay);
//     });
// };


// async function erorhandler() {
//     try {
//         let result = await requestpromise('movie.com')
//         console.log(result);
        
//     } catch (error) {
//         console.log('error', error);
        
//     }
// }

        //MELAKUKAN REQUEST DENGAN XMLHTTPREQUEST


// const req = new XMLHttpRequest();

// req.onload = function (){
//   console.log(this);  
// }

// req.onerror = function () {
//   console.log('Error', this);
// }

// req.open('GET', 'https://swapi.dev/api/people/1')
// req.send()

// function Color(r,g,b) {
//   this.r = r
//   this.g = g
//   this.b = b
// }


class Color {
  constructor(r,g,b,nama) {
    this.r =r;
    this.g =g;
    this.b = b;
    this.name = nama;
  }
  colorname(){
    console.log('the color is' + this.name);
    
  }
  rgb(){
    const {r,g,b,}= this
    return `rgb${r}, ${g}, ${b}`
  }

  rgba(a= 1){

  } 

  hex(){
    const {r,g,b,} = this
    return `#` + ((1<<24) + (r<<16) + (g << 8) + b ).toString(16).slice(1)
  }
} 

