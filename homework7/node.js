// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
function doReverse (arr) {
    return arr.reverse()
}
console.log(`Массив в обратном порядке ${doReverse([1, 2, 3, 4, 5, 6])}`)


// 2. найти максимальное значение числа в массиве ([3,67,15...])
function getMaxNumber (arr) {
    return Math.max.apply(null, arr)
}
console.log(`Максимальное число в массиве - ${getMaxNumber([3, 67, 15, 12, 73, 1])}`)


// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
function fibonacci (number) {
    return number <=1 ? number : fibonacci(number-1) + fibonacci(number-2)
}
function fibonacciSlice (startIndexN, lenghtM) {
    let resultArr = []
    for (i=startIndexN; i<startIndexN+lenghtM; i++) {
        resultArr.push(fibonacci(i))
    }
    return resultArr
}
console.log(`Ряд Фибоначчи начиная с 5 элемента, длинной массива 6 - ${fibonacciSlice(5,6)}`)


/* 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих 
числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) */

// числа, в которых цифры совпадают по значению и позиции
function compareNumbers (num1, num2) {
    let counter = 0
    let num1AsString = String(num1)
    let num2AsString = String(num2)
    for (let i=0; i<4; i++) {
        if (num1AsString[i] === num2AsString[i]) {
            counter = counter + 1
        }
    }
    return counter
}
console.log(`Количество чисел, совпадающих по значению и позиции = ${compareNumbers(1234,1638)}`)

// числа, в которых цифры совпадают только по значению 
function compareNumbers2 (num1, num2) {
    let counter1in2 = 0
    let counter2in1 = 0
    let num1AsString = String(num1)
    let num2AsString = String(num2)
    /* использую 2 условия и счетчика для случаев, в которых одна цифра из первого числа, 
    совпадает с несколькими цифрами из второго числа */
    for (let i=0; i<4; i++) {
        let digit2in1 = num2AsString[i]
        if (num1AsString.indexOf(digit2in1) >= 0) {
            counter2in1 += 1
        }
        let digit1in2 = num1AsString[i]
        if (num2AsString.indexOf(digit1in2) >= 0) {
            counter1in2 += 1
        }
    }
    return Math.min(counter1in2, counter2in1)
}
console.log(`Количество чисел, совпадающих только по значению = ${compareNumbers2(4321,1010)}`)


// 5. сортировка массива по возрастанию
function sortAsc(arr){
    arr.sort(function(a,b) {return a-b})  
    return arr 
}
console.log(`Сортировка массива по возрастанию - ${sortAsc([1,3,14,2,54,13,99])}`)

// сортировка массива по убыванию
function sortDesc(arr){
    arr.sort(function(a,b) {return b-a})  
    return arr 
}
console.log(`Сортировка массива по убыванию - ${sortDesc([1,3,14,2,54,13,99])}`)


// 6. удалить из массива все повторяющиеся элементы
function removeDuplicate(arr) {
    return arr.filter(function(num, index) {
        return arr.indexOf(num) === index
    })
}
console.log(`Массив без повторяющихся элементов - ${removeDuplicate([1,2,3,1,4,1,5,1,6])}`)
