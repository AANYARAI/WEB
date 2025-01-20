//scope 
//Global Scope
var a=5
console.log(window.a);
//script Scope
// let a=5
// console.log(a);
//block Scope
// {
//     let a=5
//     console.log(a);
    
// }
// let z=23 
// {
//     let z=11
//     console.log(z); 
// }
sum()
function sum() {
    var a=5
    // console.log(a);
}

console.log(a);

let obj={
    firstname:"angel",
    lastname:"priya",
    fullname:function(city,age){
        console.log(this.firstname +" "+ this.lastname+ city+age);
    } 
    }
    let user={
        firstname:"hritik",
        lastname:"roshan",
    }
    obj.fullname.apply(user,["bhopal","101"])