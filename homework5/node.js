let stringValueEmpty = '';
let stringValueNumber = '123';
let stringValue = 'hi';
let numberValueZero = 0;
let numberValueMinus = -1;
let numberValueTen = 10;
let boolValueT = true;
let boolValueF = false;

// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// string+boolean
let result1 = stringValueEmpty+boolValueT;
console.log(`stringValueEmpty + boolValueT = ${result1} (this is ${typeof result1})`);
let result2 = stringValueNumber+boolValueT;
console.log(`stringValueNumber + boolValueT = ${result2} (this is ${typeof result2})`);
let result3 = stringValue+boolValueF;
console.log(`stringValue + boolValueF = ${result3} (this is ${typeof result3})`);

// На этом моменте я поняла, что лучше использовать функции.
// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
function sumValues(firstValue, secondValue) {
    let result = firstValue + secondValue;
    console.log(`${firstValue} (${typeof firstValue}) + ${secondValue} (${typeof secondValue}) = ${result} (${typeof result})`);
}
sumValues(stringValueNumber, boolValueT);
sumValues(stringValue, numberValueMinus);
sumValues(numberValueZero, boolValueF)

// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
function multiplyValues(firstValue, secondValue) {
    let result = firstValue * secondValue;
    console.log(`${firstValue} (${typeof firstValue}) * ${secondValue} (${typeof secondValue}) = ${result} (${typeof result})`);
}
multiplyValues(stringValueNumber, boolValueT);
multiplyValues(stringValue, numberValueMinus);
multiplyValues(numberValueZero, boolValueF)

// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
function divideValues(firstValue, secondValue) {
    let result = firstValue / secondValue;
    console.log(`${firstValue} (${typeof firstValue}) / ${secondValue} (${typeof secondValue}) = ${result} (${typeof result})`);
}
divideValues(stringValue, boolValueT);
divideValues(stringValueEmpty, numberValueMinus);
divideValues(numberValueZero, boolValueT);

// 4) Выполнить явное преобразование(number, string, boolean)
// number
console.log(Number(stringValue));
console.log(Number(boolValueT));
// string
console.log(String(numberValueMinus));
console.log(String(boolValueF));
// boolean
console.log(Boolean(stringValueNumber));
console.log(Boolean(numberValueZero))

// Через функцию
function transformValue(value, type) {
    let result = type(value);
    console.log(`${type.name} (${value}) = ${result} (${typeof result})`);
}
transformValue(stringValue, Number);
transformValue(boolValueT, Number);
transformValue(numberValueMinus, String);
transformValue(boolValueF, String);
transformValue(stringValueNumber, Boolean);
transformValue(numberValueZero, Boolean);
