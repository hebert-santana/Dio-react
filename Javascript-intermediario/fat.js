let n = 9;
let nZero = 9;
let soma = 0;
const varia = -1;
                                    

while (n >= 4 ) {
    if (n == nZero) {
    soma += parseInt(n*((n-1) / (n-2)));
    soma += (n-3);
    n = n - 4; 
    } else {
    soma += varia * parseInt(n*((n-1) / (n-2)))
    soma += (n-3);
    n = n - 4;
}}

if (n == 3) {
    soma += varia * parseInt(n*((n-1) / (n-2)));
} else if (n == 2) {
    soma += varia * (n * (n-1));
} else if (n == 1) {
    soma += varia * n
}






console.log(soma);

let contas = parseInt(9 * 8 / 7) + 6 - parseInt( 5 * 4 / 3) + 2 - 1;
console.log(contas)

// n!d = n * [parseInt((n-1) / (n-2))] + (n-3) - (n-4)...
// usar break?
// usar módulo?
