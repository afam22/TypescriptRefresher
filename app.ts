function add(n1: number, n2: number){
    return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1,number2); //throws a compilation error - benefit of typescript because number 1 is a string and wont compile

console.log(result);