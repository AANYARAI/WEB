   let canvas=    document.querySelector('canvas')
  let pen=    canvas.getContext('2d')
let  snakeCells=[ [0,0] ]
let cell=50
let direction='right'
let gameOver=false
let score=0
let foodCell = generateRandomCell();
let id=   setInterval(()=>{
    draw()
    update()

},200)


   document.addEventListener("keydown",(e)=>{
    // console.log(e);
    if(e.key==='ArrowUp'){
        direction='up'


    }
    else if(e.key=="ArrowDown"){
        direction="down"
   

    }
    else if(e.key==="ArrowLeft"){
        direction="left"
  

    }
    else{
        direction="right"
      
    }
    
   })

   

function draw(){
    if(gameOver==true){
        clearInterval(id)
       pen.fillStyle = 'red';
       pen.font = '40px sans-serif';
       pen.fillText('Game over', 50, 150);
        return;
        
    }
    pen.clearRect(0,0 ,1500,720)
    for(let i of snakeCells){
        pen.fillRect(i[0],i[1],cell,cell)

    }

    pen.fillStyle = 'red';
    pen.fillRect(foodCell[0], foodCell[1], 50, 50);
    pen.fillStyle = 'white';
    pen.font = '40px sans-serif';
    pen.fillText(`${score} score`, 100,200)
 
}
function update(){
      let headX=   snakeCells[snakeCells.length-1][0]
         let headY=   snakeCells[snakeCells.length-1][1]
       let newX
       let newY
       if(direction=="right"){
        newX=headX+cell
        newY=headY
        if(newX===1500){
            gameOver=true
        }
       }
       else if(direction==="left"){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
       }

       }
       else if(direction=='up'){
        newX=headX;
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
       }
       else{
        newX=headX
        newY=headY+cell
        if(newY==720){
            gameOver=true
        }
       }

       snakeCells.push([newX,newY])
       if (foodCell[0] === headX && foodCell[1] === headY) {
        foodCell = generateRandomCell();
        score += 1;
      } else {
        snakeCells.shift();
      }
    }



function generateRandomCell() {
    return [
      Math.round((Math.random()*(650))/50)*50,
      Math.round((Math.random()*(350))/50)*50
    ]
  }
