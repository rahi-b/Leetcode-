const createCounter = function(n){
    return function(){
        return n++;
    }
    
    return n;
}
const counter=createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());