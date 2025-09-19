let express = require("express")
let app = express()
app.use(express.json())
const User= require('./user')
   let mongoose=    require("mongoose")
   mongoose.connect("mongodb://127.0.0.1:27017/MyFirstDB").then(()=>{
    console.log("db....");
    

   }).catch((err)=>{
    console.log(err);
    

   })
app.get('/', (req, res) => {
  res.send("hello")
})
  
app.post('/user', async(req,res)=>{
    
   let {name,email,passWord}= req.body 
     let userData=    new User({
        name,
        email,
        passWord
      })
        await  userData.save()
        res.send({msg:"user saved  succuessfulyyy"})
          


})
app.listen(4000, () => {
  console.log("server running on port no 4000");

})

         
