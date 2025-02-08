

function expandAroundCenter(s,left,right){
    if(left>=0 && right <s.length && s[left] === s[right]){
        left --;
        right ++;
    }

    return s.substring(left+1,right);
}

var longestPalindrome= function(s){
    if(s.length ==0) return "";

    let longest ="";

    for(let i=0;i< s.length;i++){
        let odd = expandAroundCenter(s,i,i);
        let even=expandAroundCenter(s,i,i+1);

        if(odd.length>longest.length) longest=odd;
        if(even.length >longest.length) longest=even;
    }
    return longest;
}

const s="cbbd";

const result=longestPalindrome(s);
console.log(result);