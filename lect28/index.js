// function fun1(){
//     console.log('hello');
    
// }


// let btn= document.querySelector('#one')


// btn.oneclick=function(){
//     console.log('byeeee');
    
// }


// let btn1= document.querySelector('#two')
// let body= document.querySelector('body')
// let h1= document.querySelector('h1')

// btn1.addEventListener('click',()=>{
//     body.style.backgroundColor="plum"
//     h1.innerText="AANYA"
//      // alert('hello')
//     // console.log('AANYA');
    
// })

// let inp= document.querySelector('input')
// let h1= document.querySelector('h1')

// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value,"HIIII");
//     h1.innerText=e.target.value
    
// })


// let btn= document.querySelector('#two')
// let body= document.querySelector('body')
// let inp= document.querySelector('input')
// let h1= document.querySelector('h1')

// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     btn.addEventListener('click',()=>{
//         h1.innerText=e.target.value 
//     })
   
    
// })

let btn=document.querySelector('button')
let body=document.querySelector('body')

let isbool=false
btn.addEventListener('click',()=>{
      
    if(isbool){
        body.style.backgroundColor='purple'
        isbool=false
    }
    else{
        body.style.backgroundColor='lightblue'
        isbool=true
    }
    

})

