

const timeLimit=function(fn,t){

    return async function(...args){

        return new Promise((resolve,reject)=>{
            setTimeout(()=>reject('Time limit exeeded'),t);
            fn(...args).then(resolve).catch(reject);
        })
    }
}

const exampleFn=async function(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`Fuction is working before time${delay}`),delay)
    });
}

const result=timeLimit(exampleFn,2000);

result(3000).then(console.log).catch(console.log);