const createHelloWorld= function(){
    
    return function(){
        return "hello world";
    }
}

// console.log(createVariable()())

const variable2=createHelloWorld();
console.log(variable2())