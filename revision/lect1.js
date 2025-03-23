// let var1 =1 
// let var2 =9

// while(var1<=9 && var2>=1){
//     console.log(var1, "*",var2,"=", var1 * var2);
//     var1++
//     var2--
// }

//prime numbers//
for (let i = 1; i <= 5; i++) {
    // console.log(i, "---");
    const number = i
    let isPrime = true
    for(let j=2; j<number; j++){
      if(number % j === 0) {
        isPrime = false
      }
    }
    if(isPrime) {
      console.log("Prime number", number);
    }
  }

  //given number = 1 ,increment till 100,if the no. is div by 3 multiply by 3//
  //else if by 5 multiply by 5

  let a=1
  while(1<=100){
    if(a%3===0){
        a=a*3
    }
    else if(a%5===0){
        a=a*5
    }
    else{
        a++
    }
}


let arg = 2
while(arg < 2){
  console.log("Number is less than 2");
  arg++
}

// Do while
arg = 2
do{
  console.log("Number is may be less than 5");
  arg++
} while (arg < 2);

// For loop
for(let i=1; i<=10; i++) {
  if (i === 5){
    break;
  }
  console.log(i)
}

// Continue
for(let i=1; i<=5; i++) {
    console.log("before i is", i)
    if (i === 3){
      continue;
    }
    console.log("after i is", i)
  }

  
  //function (argument/parameter)
  function myfunction(arg1,arg2,arg3)
  {
    console.log(arg1 ,arg2 ,arg3 );
    
  }
function getage(age){
    age>=16{
        console.log();
        
    }
}


