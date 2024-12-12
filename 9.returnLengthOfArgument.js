const argumentsLength =function(...args){
    return args.length;
}


const result=argumentsLength({},"hello",null,1);

console.log(result);