const memoize=function(fn){
    let cache={};
    return function(...args){
        let key=JSON.stringify(args);
        if(key in cache){
            console.log('Alredy value have inside')
            return cache[key];
        }
        const result=fn(...args);
        cache[key]=result;
        
        return result;
        
    }
}

const result=memoize((a,b)=>a+b)
console.log(result(10,20));
console.log(result(10,20));
console.log(result(10,20));
console.log(result(10,30));
console.log(result(10,30));
console.log(result(10,50));