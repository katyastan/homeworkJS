/* 1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена 
функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1,
второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего 
промиса и выведите результат его работы на экран. */

function getPromiseWithNumber(num) {
    let timeOut = Math.random() * 5 * 1000
    return new Promise(function (resolve) {
        setTimeout(resolve, timeOut, num)
    })
}

let promise1 = getPromiseWithNumber(1)
let promise2 = getPromiseWithNumber(2)
let promise3 = getPromiseWithNumber(3)

Promise.race([promise1, promise2, promise3])
    .then((data) => {
        console.log(`[Task 1] First resolved Promise ${data}`)
    })


/* 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет 
случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться результата
 getNum, затем возводить его в квадрат и выводить на экран. */
function getNum() {
    return new Promise((res) => {
        setTimeout(res, 3000, Math.ceil(Math.random() * 5))
    })
}

async function getPow2() {
    let num = await getNum()
    console.log(`[Task 2] Result getNum function ${num}^2 = ${Math.pow(num, 2)}`)
}

getPow2()


/* 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет 
случайное число от 1 до 5. Используйте также функцию getNum, чобы вернуть промис, который с задержкой
 в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет 
 дожидаться результата getNum, затем будет дожидаться результата getNum, а затем найдет сумму полученных
  чисел и выводит на экран. */
function getNumCommon(timeOut, minRandom, maxRandom) {
    return new Promise((res) => {
        setTimeout(res, timeOut, Math.random() * (maxRandom - minRandom) + minRandom)
    })
}

async function getNumResult() {
    let num1 = await getNumCommon(3000, 1, 5)
    let num2 = await getNumCommon(5000, 6, 10)
    console.log(`[Task 3] Sum of two getNumCommon ${num1} + ${num2} = ${num1 + num2}`)
}

getNumResult()


/* 4. Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
промиса. После окончания манипуляций выведите число консоль лог на экран. */
function sleepMultiply(num) {
    console.log(`[Task 4] Get ${num} (sleepMultiply)`)
    return new Promise((res) => {
        setTimeout(res, 3000, num * num)
    })
}

new Promise((res) => {
    setTimeout(res, 0, Math.ceil(Math.random() * 100))
})
    .then(sleepMultiply)
    .then(sleepMultiply)
    .then((num) => {
        console.log(`[Task 4] Result - ${num}`)
    })
