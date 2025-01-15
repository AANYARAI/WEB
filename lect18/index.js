let score=80
let attendance=75
if(score>=80 && attendance>=80){
    console.log("grade_A");
    
}
else if(score>=75||score<70 && attendance>=75){
    console.log("grade_B");
    
}
else if(score>70||score<75&& attendance>=70){
    console.log("grade_C");
    
}
else if(score>65||score<60 && attendance>=65){
    console.log("grade_D");
    
}
else if(score>50||score<60 && attendance>=70){
    console.log("grade_E");
    
}
else {
    console.log("FAIL");
    
}


