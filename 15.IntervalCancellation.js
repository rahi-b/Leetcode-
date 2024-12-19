const Cancellable=function(fn,t,...args){
    const timer=setInterval(()=>fn(...args),t);
    
    const cancelFn=()=>clearInterval(timer);
    
    return cancelFn;
}
const cleartime=3000;

const fn=(X)=>console.log(X*2);

const args=[2];

const t=300;

const cancel=Cancellable(fn,t,...args);
const result=setTimeout(()=>{
    cancel();
},cleartime)

console.log(result);