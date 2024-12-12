const Once= function(fn){
    let usedonce=false;
    let result;
    return function(...args){
        if(!usedonce){
            result = fn(...args);
            usedonce=true;
            return result;
        }
        return undefined;
    }
}

const fn=(a,b,c)=>(a+b+c);

const onceCall=Once(fn);
console.log(onceCall(1,2,5));
console.log(onceCall(1,2,3));
console.log(onceCall(4,5));