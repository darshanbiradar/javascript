function mult(factor){
    return function(number){
        return factor * number;
    }
}
const double = mult(2);
const triple = mult(3);
console.log(double(5));
console.log(triple(5));