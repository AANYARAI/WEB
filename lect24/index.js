
// function step1(fn){
//     setTimeout(()=>{
//         console.log('selecttttt');
//         fn()
        
//     },5000)
// }

// function step1(fn){
//     setTimeout(()=>{
//         console.log('filter');
//         fn()
        
//     },4000)
// }

// function step1(fn){
//     setTimeout(()=>{
//         console.log('caption');
//         fn()
        
//     },3000)
// }

// function step1(fn){
//     setTimeout(()=>{
//         console.log('post');
//         fn()
        
//     },2000)
// }
//call back hell
function callback(a){
    console.log("hiiii");
    
    }
    callback(function outer(){})
    
     function Step1(fn) {
        console.log("select");
        fn(),2000
     }
     function Step2(fn){
        console.log("filter");
        fn(),3000
         }
         function Step3(fn){
            console.log("caption");
            fn(),4000
             }
             function Step4(){
                console.log("post");
            
                 }
         Step1(function() {
            Step2(function() {
                Step3(function(){
                    Step4()
                })
            })
         })

    //      //promises
    //  let promise = new Promise((res,rej)=>{
    //     let a=false 
    //     if(a){
    //         res()
    //     }
    //     else{
    //         rej()
    //     }
    //  })
    //  console.log(promise);

     let p= new Promise((res,rej)=>{
        res()
     })
     p.then(()=>{
        console.log('hello');
        
     })
     c.catch(()=>{
        console.log('hiiii');
     })

     function step1(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res('selectttt')
                console.log('selecttttttt');
                

            },5000)

        })
    }
    function step2(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res('filtredddddd')
                console.log('filtredddddd');
                

            },2000)

        })
    }

     async function call(){
        await step1()
    
        await  step2()

    }
    call()



    // step1().then((img)=>{
    //     console.log(img);
    //     return step2().then((fImg)=>{
    //         console.log(fImg);
            

    //     })
    // })
