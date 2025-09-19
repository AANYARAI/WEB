// NodeJS + ExpressJS +DB  

// js => NodeJS  =>// file FileSystem => server
// console.log("hello");
// console.log(global);
// console.log(document);
// console.log("hehe");

// a()
// var a=10;
// var a=()=>{
//     console.log(a);

// }

// const a 
//     a=5;
//     console.log(a);
// var a="byee"
// // a[0]="z"
// a="hiii"
// // a[0]="z"
// console.log(a);
// one
// console.log(  typeof(typeof(1))  );

// let arr=[1,2,3,"hello","hii",true,false]


// function getString(i){
//     return typeof i =="string"
// }
// function getNumber(i){
//     return typeof i =="number"
// }
// function getFun(arr,fn){
//     let res=[]
//     for(let i of arr){
//         if(fn(i)){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(getFun(arr,getString));
// console.log(getFun(arr,getNumber));



// // function getString(arr){
// //     let res=[]
// //     for(let i of arr){
// //         if(typeof i =="string"){
// //             res.push(i)
// //         }
// //     }
// //     return res
// // }

// function getString(arr){
//     let res=[]
//     for(let i of arr){
//         if(typeof i =="number"){
//             res.push(i)
//         }
//     }
//     return res


// }


// console.log(getString(arr));
// console.log(getString(arr));



// function outer(){
//     let user="ankit"
//     function inner(){
//         console.log(user);   
//     }
//     // inner()
//     return inner
// }
// let a= outer()
// a()










// setTimeout(()=>{
//     console.log("hello");

// },3000)

// setInterval(()=>{
//     console.log("hiii");


// },1000)







// for(var i =1;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);

//     },1000*i)
// }

// {
//     let a=5;
// }
// {
//     let a=1;
// console.log(a);

// }
// // console.log(a);

// module=> fs => os 
// let fs = require("fs")
// fs.writeFileSync("index.js","hello")
// console.log("hiii");

// fs.writeFile("index.txt","hello from asynch",(err)=>{
//     if(err) throw err
//     console.log("file write successfully");


// })
// fs.rename("index.js","index.js",(err)=>{
//     if(err) throw err
//     console.log("done");

// })

//   fs.appendFileSync("index.txt","hiii")
//   fs.renameSync("index.txt","hello.txt")
//   fs.unlinkSync("hello.txt")

//  let res=    fs.existsSync("index.js")
//  console.log(res);

//   let text=    fs.readFileSync("index.txt")
//   console.log(text.toString());





// fs.writeFile("index2.txt", "hellooo", function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File created")
//     }
// })

// //To read a file using Async
// fs.readFile("index2.txt", "utf-8", function (err, data) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

// //To append something in a file using Async
// fs.appendFile("index2.txt", "hellooooo", function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File appended")
//     }
// })

// //To rename a file using Async
// fs.rename("index2.txt", "index3.txt", function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File renamed")
//     }
// })

// let http=  require('http')

//   let server=   http.createServer((req,res)=>{
//     res.end("<h1>hello</h1>")
     
//     })
//     server.listen(3000,()=>{
//         console.log("server running on port no 3000");
        

//     })
// console.log(http,"hehe");

//    let os=  require('os')
//    console.log(os.type());
//    console.log(os.platform());
//    console.log(os.arch());
//    console.log(os.platform());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());

//   let express=    require("express")
//      let app=     express()

//      app.use((req,res,next)=>{
//         // res.send("mai nhi jane dunga tumhe....")
//         next()

//      }) 
//      app.use((req,res)=>{
//         console.log(req);
        
//         //  res.send("mai to bilkul  nhi jane dunga tumhe....")
        

//      })
//      app.get('/',(req,res)=>{
//         res.send("don  no 1")
//      })
//      app.get("/hello",(req,res)=>{
//         res.send("don no 2")
//      })
//      app.get("/about",(req,res)=>{
//         res.send("don no 3")
//      })
//      app.listen(4000,()=>{
//         console.log("server running on 4000");
        
//      })

//new class 

//  let express=    require("express")
//    let fs=    require("fs")
//       let app=      express()

//       app.get("/",(req,res)=>{
//         res.send("hello from server")
//       })

//       app.get("/create",(req,res)=>{
//            fs.writeFileSync("index.html","happy birthday anya")
//            res.send("file create ")
//       })

//       app.get("/read",(req,res)=>{
//            let data=    fs.readFileSync("index.html")
//            res.send(data.toString())
//       })
       

//       app.listen(4000,()=>{
//         console.log("sever running on port no 4000");
        
//       })


    //  let express=  require("express")
    //   let app=    express()
    //   app.use(express.json())
    //   let fs=    require("fs")
    //   let arr=[1,2,3,4,5,6,5,4,34,3,11,3,4,55,56]

    //   app.get("/:data",(req,res)=>{
    //     let {data}=req.params
    //       let val=  arr.filter((a)=>{
    //         return data==a

    //        })

    //     console.log(val);
    //     res.send(val)
  
    //   //  /
    //   })
              
      // app.get('/',(req,res)=>{
      //   res.send("hello")

      // })
      // http://localhost:4000/search?name=anu&&lastname=jain
      // app.get("/search",(req,res)=>{
      //   let data=   req.query
      //   console.log(data);
        
      //  let {a}=   req.params
      //  console.log(a);
      //   let val=   arr.filter((data)=>{
      //       return data==a

      //     })
      //     res.send(val)
       
     //    npx nodemon start

    //  let {ani}=    req.params
    //     res.send(ani)
        // console.log(req);
        // res.send(req)
        // req.send("heee")
      // })
    //   app.get("/cat",(req,res)=>{
    //     res.send("cat")
    //     // console.log(req);
    //     // res.send(req)
    //     // req.send("heee")

    //   })
//  srverrrrrrr    
// app.get("/",()=>{
//   res
// })
//     app.get("/read",(req,res)=>{
//          let data=  fs.readFileSync('index.txt')
//       res.send(data.toString())
//     })

//     app.post("/creat",(req,res)=>{
//          let data=    req.body
//         //  console.log(data);
//         fs.writeFileSync("index.txt",JSON.stringify(data))
//       res.send("hello mai post req hu ")
//     })

//     app.delete("/remove",(req,res)=>{
//       fs.unlinkSync("index.txt")
//       res.send("data delet ho chuka haiii")

//     })
    // app.post ,app.patch app.delete

    // https://www.flipkart.com/
      // app.listen(4000,()=>{
      //   console.log("server running  on 4000");

      // })





// let data={
//     ani:"cat"
// }
// let {ani}=data

// console.log();

         















   





// // new class 

// let express= require("express")
//  let app=    express()
//  let fs=   require('fs')
//  let cors=  require('cors')
//  app.use(express.json())
//  app.use(express.urlencoded({extended:true}))
//  app.use(cors())


//  app.get('/',(req,res)=>{
//   // res.send("hello")
//   //  let data=   fs.readFileSync("index.html")
//    res.send(data.toString())

//  })
//  app.post("/create",(req,res)=>{

//      console.log(req.body);
    
//   // fs.writeFileSyn =c("index.html",data.msg)
//   res.send(req.body)

//  })
//  app.post("/login",(req,res)=>{

//     let loginInfo=   req.body
//   res.send(loginInfo)


//  })

// //  app.patch("/edit",(req,res)=>{
// //   let dataForEdit=   req.body
// //         fs.appendFileSync("index.html",dataForEdit.msg)
// //         res.send("file was updatededddddddddd")
// //  })

//  app.listen(4000,()=>{
//   console.log("server running on port no 4000");
  
//  })


// //  http://localhost:5173 =>REACT
 
// //  http://localhost:4000/create' BACKEND

// //  cors  
let express = require("express");
let app = express();

app.use(express.json());

const User = require("./user"); // <-- Import your user model

let mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/MyFirstDB")
  .then(() => {
    console.log("db connected....");
  })
  .catch((err) => {
    console.log(err);
  });

// Simple GET route
app.get("/", (req, res) => {
  res.send("hello");
});

// POST route to create user
app.post("/user", async (req, res) => {
  try {
    let { name, email, passWord } = req.body;
    let userData = new User({
      name,
      email,
      passWord,
    });
    await userData.save();
    res.send({ msg: "user saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error saving user" });
  }
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});

         















   

