
function contador(){
    let cuenta = 0;
    return function (){
        cuenta++;
        return cuenta;
    }
}

const incrementar = contador();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


//#################################################

function multiplicador(factor){
        return function(numero){
            return numero * factor;
        }
}

const mult1 = multiplicador(2);
const mult2 = multiplicador(3);

console.log(mult1(30));
console.log(mult2(500));

