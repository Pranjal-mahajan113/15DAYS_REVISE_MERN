function debounce(fn,delay){
    let timer; //timeout ka id store hoga
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
