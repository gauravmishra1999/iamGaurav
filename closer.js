function m(){
    var a=10
    function b(){
        console.log(a)
    }
    return b
}
m()()