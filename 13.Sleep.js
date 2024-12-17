const Sleep=async function(millis){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('kooi');
        },millis)
    })
} 

Sleep(3000).then((result)=>{
    console.log(result);
})