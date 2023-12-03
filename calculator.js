class Calculator {

    sum(a, b){
        return console.log(`${a} + ${b} = ${a + b}`)
    }

    subtract(a, b){
        return console.log(`${a} - ${b} = ${a - b}`)
    }

    multiple(a, b){
        return console.log(`${a} . ${b} = ${a * b}`)
    }

    divide (a, b){
        return console.log(`${a} / ${b} = ${a / b}`)
    }

}

const calc = new Calculator ();

const result1 = calc.sum(4,8);
const result2 = calc.subtract(3, 1);
const result4 = calc.multiple(11, 12);
const result3 = calc.divide(55, 1);

// console.log(calc.constructor)
