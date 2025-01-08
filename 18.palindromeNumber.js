

const isPalindrome = function(x){
    const reversedString =Number(x.toString().split('').reverse().join(''));
    if(x===reversedString)
        return true;
    else
    return false;
}

const x=121;

const result=isPalindrome(x);
console.log(result);