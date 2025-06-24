let inp=document.querySelector('input')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')

btn.addEventListener('click',()=>{

    let li=document.createElement('li')  //creating element
    li.innerText=inp.value
    ul.append(li)
    inp.value=""

    //deletion feature 
    li.addEventListener('click',()=>{
        li.remove()
        // removes the clicked Todo (List element)
    })
})