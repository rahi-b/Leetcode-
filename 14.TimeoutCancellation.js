const Timeout=function(fn,t,...args){
    const cancelFn=function(){
        clearTimeout(timedOut);
    }
    
    const timedOut=setTimeout(()=>{
        fn(...args);
    },t)
    
    return cancelFn;
}

const args=[2];

const fn=(X)=>X*X;

const t=3000;

const cancelFn=Timeout(fn,t,...args);
console.log(cancelFn);

setTimeout(()=>{
    cancelFn();
    console.log('cancel function execution is cancelled');
},2000)