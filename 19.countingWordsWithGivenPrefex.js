
const prefixCount= function(words,prefix){
    let count=0;

    for(let value of words){
        if(value.startsWith(pre)){
            count++;
        }
    }
    return count;
}

const words=['apple','banana','apply','carret','appau'];

const pre='ap';

const result=prefixCount(words,pre);

console.log(result);