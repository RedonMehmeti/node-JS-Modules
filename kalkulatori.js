function shto(a, b){
    return a + b;
}
function zbatoOperacionin(a, b, operacioni){
    if (operacioni === 'shto'){
        return shto(a , b)
    }
}

module.exports = {
    shto,
    zbatoOperacionin
}