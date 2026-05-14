function x () {
    var x=7;
    function y () {
        console.log(x);
    }
    return y;
}
var z = x();
console.log(z)
z();