let h2 = document.querySelector("h2")
h2.innerText

$("h2").css({
    color:"red",
    border:"1px solid black",

})

console.log($("h2").text("hiii"));
$("button").click(()=>{
   $("h2").fadeOut()
    
})

$("#fadeIn").click(()=>{
    $("h2").fadeIn()
     
 })
