/* 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза.
 У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья. */
 function rollTheDice() {
    return Math.ceil(Math.random()*6)
}

function playGame(roundsCount){
    let sumPlayer1 = 0;
    let sumPlayer2 = 0;
    for (i=0; i<roundsCount; i++) {
        sumPlayer1 += rollTheDice();
        sumPlayer2 += rollTheDice()
    };
    if (sumPlayer1 > sumPlayer2) {
        console.log(`Player1 is the winner with ${sumPlayer1} : ${sumPlayer2}`)
    }
    if (sumPlayer1 < sumPlayer2) {
        console.log(`Player2 is the winner with ${sumPlayer2} : ${sumPlayer1}`)
    }
    if (sumPlayer1 === sumPlayer2) {
        console.log(`Draw in the game ${sumPlayer2} : ${sumPlayer1}`)
    }
}
playGame(3) 
// Можно поиграть и 100 раундов :)


// 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня.
let counter = 0
for(let year=2000; year<=2023; year++){
    for(let monthIndex=0; monthIndex<=11; monthIndex++){
        let friday13 = new Date(year,monthIndex,13)
        if(friday13.getDay()===5){
            if(friday13>Date.now()){
                break
            }
           counter = counter + 1
        }
    }
}
console.log(`There were ${counter} fridays from 01/01/2000 to the present.`)


 /* 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых
  будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15)(4,6,5)
  а. числа изначальное число целое, числа разбивки - целые (4,6,5) */
 function breakNumbers(mainNumber, countOfParts){
    let newNumbers = []
    let sumLeft = mainNumber
    for(i=0; i<countOfParts-1; i++){
        let randomNumber = Math.floor(Math.random()*sumLeft)
        sumLeft = sumLeft-randomNumber
        newNumbers.push(randomNumber)
    }
    newNumbers.push(sumLeft)
    return newNumbers
}
console.log(`Splitting an integer into integers ${breakNumbers(20,5)}`)


// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
function breakNumbersB(mainNumber, countOfParts){
    let newNumbers = []
    let sumLeft = mainNumber
    for(i=0; i<countOfParts-1; i++){
        let randomNumber = Math.round(Math.random()*sumLeft*100)/100
        sumLeft = sumLeft-randomNumber
        newNumbers.push(randomNumber)
    }
    sumLeft = Math.round(sumLeft*100)/100
    newNumbers.push(sumLeft)
    return newNumbers
}
console.log(`Splitting a number into fractional numbers ${breakNumbersB(15, 4)}`)
