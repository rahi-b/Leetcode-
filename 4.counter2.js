
const createCounter= function(init){
    let represent = init;
    function Incriment(){
        return ++represent;
    }
    function Decrement(){
        return --represent;
    }
    function reset(){
        return (represent = init);
    }
    return{Incriment,Decrement,reset};
}

const Counter = createCounter(10);
console.log(Counter.Incriment());
console.log(Counter.Decrement());
console.log(Counter.reset());