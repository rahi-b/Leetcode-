const compose = function(functions){
    return function(x){
        return functions.reduceRight((acc,fn)=>fn(acc),x)
    }
}

const result = compose([x=>x+1,x=>x*x,x=>2*x])(5);

console.log(result);