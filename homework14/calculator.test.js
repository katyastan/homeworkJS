/* 1. Файл calculator.js лежит в облаке;
   2. Создать проект для автотестов;
   3. Выбрать один из пройденных фреймворков: Jamine, Mocha, Jest;
   4. Написать максимальное количество юнит тестов для методов класса, каждый тест должен содержать проверку;
   5. Установить eslint, настроить правила для статической проверки кода, добавить папки,
   которые не надо проверять в игнор на проверку. */

const Calculator = require('./calculator.js')
const calculator = new Calculator()
// unit tests for calculator.js
// add
describe('add', function () {
  it.each([
    [[21, 2], 23],
    [[3, 10, -2], 11],
    [[-3, -7, -2], -12],
    [['a', 'b', 'c'], '0abc'],
    [[54, NaN], NaN],
    [[11, Infinity], Infinity]
  ])('adds %p expecting %p', (numbers, result) => {
    expect(calculator.add(...numbers)).toEqual(result)
  })
})

// multiply
describe('multiply', function () {
  it.each([
    [[21, 2], 42],
    [[3, 7, -2], -42],
    [['a', 'b', 'c'], NaN],
    [[54, NaN], NaN],
    [[11, Infinity], Infinity]
  ])('multiplies %p expecting %p', (numbers, result) => {
    expect(calculator.multiply(...numbers)).toEqual(result)
  })
})

// subtraction
describe('subtraction', function () {
  it.each([
    [5, 1, 4],
    [10, 2, 8],
    [-5, -5, 0],
    [1, -2, 3],
    ['a', 'b', NaN]
  ])('%p minus %p equal %d', (a, b, result) => {
    expect(calculator.subtraction(a, b)).toEqual(result)
  })
})

// divide (решила сделать не только параметризированно)
describe('divide', function () {
  it('devide 2/1=2', function () {
    expect(calculator.divide(2, 1)).toEqual(2)
  })
  it('devide 10/2=5', function () {
    expect(calculator.divide(10, 2)).toEqual(5)
  })
  it('devide 105656788998298/2=52828394499149', function () {
    expect(calculator.divide(105656788998298, 2)).toEqual(52828394499149)
  })
  it('devide 15/0=Infinity (divided by zero)', function () {
    expect(calculator.divide(15, 0)).toEqual(Infinity)
  })
  it('devide 13/(-2)=-6.5', function () {
    expect(calculator.divide(13, -2)).toEqual(-6.5)
  })
  it('devide a/b=NaN', function () {
    expect(calculator.divide('a', 'b')).toEqual(NaN)
  })
  it('devide 0/0=NaN (divided zero by zero)', function () {
    expect(calculator.divide(0, 0)).toEqual(NaN)
  })
})

// exponentiation
describe('exponentiation', function () {
  it.each([
    [2, 4],
    [3.5, 12.25],
    [-3, 9],
    [0, 0],
    [123456789, 15241578750190520],
    ['b', NaN]
  ])('exponentiation %p equal %d', (a, result) => {
    expect(calculator.exponentiation(a)).toEqual(result)
  })
})
