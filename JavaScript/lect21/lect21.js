// const arr = [
// 'https://plus.unsplash.com/premium_photo-1666363015338-73a59bf58bf3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 'https://images.unsplash.com/photo-1639770609855-530d9bad0cd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 'https://images.unsplash.com/photo-1739611840534-1260cea02268?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]
// const imageEl = document.querySelector('img');
// let num = 0;
// setInterval(function(){
//     imageEl.setAttribute('src',arr[num]);
//     num = (num + 1)% arr.length;
// },2000);

function fun1(){
console.log("HELLOOOOOOOOOO");

}
//  let btn = document.querySelector("#one")
//  btn.onclick=function(){
//     console.log("Byeeeeeeeeeeee");
    
//  }

//  let btn = document.querySelector('#one')
//  btn.addEventListener("click",function(){
//     console.log("HIIIIIIIIII");
    
//  })




// let btn = document.querySelector('#one')
// let body = document.querySelector("body")
// btn.addEventListener("click",function(){
//     body.style.backgroundColor="Pink"
// })


let btn=document.querySelector('button')
let body=document.querySelector('body')

let isbool=false
btn.addEventListener('click',()=>{
      
    if(isbool){
        body.style.backgroundColor='#FF90BB'
        isbool=false
    }
    else{
        body.style.backgroundColor='#FFC1DA'
        isbool=true
    }
})

