let canvas = document.querySelector('canvas')

let pen = canvas.getContext('2d')
// pen.fillStyle="red"
// pen.fillRect(100,0,50,50)

let  snakeCell = [[0,0],[50,0],[100,0]]
let cell = 50
document.addEventListener("keydown",()=>{
    console.log("hehehehe");
    
})
function draw(){
    for(let i of snakeCell){

    pen.fillRect(i[1],i[0],cell,cell)

    }

}
draw()
function update(){


    let headX =  snakeCell[snakeCell.length-1][0]
    let headY=  snakeCell[snakeCell.length-1][1]
    let  newX = headX+cell;
    let newY= headY

    snakeCell.push([newX,newY])
}

setInterval(()=>{
draw()
update()
},150)