function add(n1: number, n2: number){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error ('incorrect input type');
    }
    return result;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1,number2); 

console.log(result);