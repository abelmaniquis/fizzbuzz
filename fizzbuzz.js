function fizzbuzz(n){
  for(var i = 0; i < n; i ++){
    
    if((i % 3 === 0)&&(i % 5 != 0)){ // i divisible by 3 exclusively
      console.log("fizz");
      
    }
    else if((i % 5 == 0)&&(i % 3 != 0)){ // i divisible by 5 exclusively
      console.log("buzz");
      
    }
    else if((i % 5 == 0)&&(i % 3 == 0)){
      console.log("fizzbuzz");
    }
    else{
      console.log(i);
    }
  }
}

console.log(fizzbuzz(100));