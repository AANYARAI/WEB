let inp= document.querySelector('input')
let h1=  document.querySelector('h1')
   let h3=      document.querySelector('h3')
     let h4=    document.querySelector('h4')
     let h5=     document.querySelector('h5')

inp.addEventListener('input',(e)=>{
    h1.innerText=e.target.value
})
 let formEl=   document.querySelector('form')
 formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let data={
        name:formEl[0].value,
        number:formEl[1].value,
        passWord:formEl[1].value
    }
   
    localStorage.setItem("key",JSON.stringify(data))

       let val=    localStorage.getItem('key')
      let realData=JSON.parse(val)
      h3.innerText=realData.name
      h4.innerText=realData.number
      h5.innerText=realData.passWord

       
 
 })