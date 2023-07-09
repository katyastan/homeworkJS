/* Спроектировать объектные модели для заданных предметных областей.
Каждый конструктор, объект, метод и переменная должны иметь
исчерпывающее смысл название и информативный состав. Необходимо точно
продумать, какие конструкторы и объекты необходимы для решения задачи.
Наследование должно применяться только тогда, когда это имеет смысл.
Конструкторы должны быть грамотно разложены по модулям. Работа с консолью
или консольное меню должно быть минимальным (только необходимые данные
для ввода, выводить только то, что просится в условии задачи). Задание
представляет собой какую-то предметную область, в которой требуется
выделить необходимую иерархию и реализовать ее с помощью ООП (используя
наследование, если необходимо). Программа должна создавать объекты
различных классов в выделенной предметной области, объединять их в какой-то
набор объектов. Как правило, задание требует выполнить какое-то действие над
объектами в наборе объектов по заданным критериям. */

/* Просьба использовать хотя бы 1 паттерн, больше лучше, каждый паттерн свыше 
2 (начиная с третьего), +1 к оценке.  */

/* Туристические путевки. Сформировать набор предложений клиенту по выбору 
туристической путевки различного типа (отдых, экскурсии,
лечение, шопинг, круиз и т.д.) для оптимального выбора. Учитывать 
возможность выбора транспорта, питания и числа дней. Реализовать
выбор и сортировку путевок. */

/* Use Patterns: FactoryMethod (to produce tours by tourOperators), decorator (to add discount for clients). */

class TourOperator {
    constructor() {
        this.discount = 0;
        this.tours = []
    }
    createResort(country, price, days, food, stars) {
        let resort = new TourResort(country, price, days, food, stars);
        this.tours.push(resort);
        return resort;
    }
    createExcursion(country, price, days, food, place) {
        let excursion = new TourExcursion(country, price, days, food, place);
        this.tours.push(excursion);
        return excursion;
    }
    createHealing(country, price, days, food, numberOfProcedures) {
        let healing = new TourHealing(country, price, days, food, numberOfProcedures);
        this.tours.push(healing);
        return healing;
    }
    createShopping(country, price, days, food, bagWeight) {
        let shopping = new TourShopping(country, price, days, food, bagWeight);
        this.tours.push(shopping);
        return shopping;
    }
    createCruise(country, price, days, food, cabinCategory) {
        let cruise = new TourCruise(country, price, days, food, cabinCategory);
        this.tours.push(cruise);
        return cruise;
    }
    getTours() {
        return this.tours
            .map(tour => ({ ...tour, price: tour.price * (1 - this.discount / 100) }))
            .sort((a, b) => a.price - b.price)
    }
    filterTours(filter) {
        return this.getTours().filter(filter)
    }
}

class Tour {
    constructor(country, price, days, food) {
        this.country = country;
        this.price = price;
        this.days = days;
        this.food = food;
    }
}
// TourResort inherits from Tour
class TourResort extends Tour {
    constructor(country, price, days, food, stars) {
        super(country, price, days, food);
        this.stars = stars;
    }
}
//  TourExcursion inherits from Tour
class TourExcursion extends Tour {
    constructor(country, price, days, food, place) {
        super(country, price, days, food);
        this.place = place;
    }
}
// TourHealing inherits from Tour
class TourHealing extends Tour {
    constructor(country, price, days, food, numberOfProcedures) {
        super(country, price, days, food);
        this.numberOfProcedures = numberOfProcedures;
    }
}
// TourShopping inherits from Tour
class TourShopping extends Tour {
    constructor(country, price, days, food, bagWeight) {
        super(country, price, days, food);
        this.bagWeight = bagWeight;
    }
}
// TourCruise inherits from Tour
class TourCruise extends Tour {
    constructor(country, price, days, food, cabinCategory) {
        super(country, price, days, food);
        this.cabinCategory = cabinCategory;
    }
}


const tourOperator = new TourOperator();
const resortDubai = tourOperator.createResort('UAE', 2500, 7, true, 5)
const resortTurkey = tourOperator.createResort('Turkey', 1500, 10, true, 4)
const excursionParis = tourOperator.createExcursion('France', 1100, 3, false, 'Eiffel Tower')
const healingMinsk = tourOperator.createHealing('Belarus', 700, 14, true, 5)
const shoppingZara = tourOperator.createShopping('Poland', 100, 2, false, 20)
const cruiseNorway = tourOperator.createCruise('Norway', 500, 4, true, 'luxury')

console.log('ALL TOURS')
console.table(tourOperator.getTours())

console.log('FILTERED TOURS FOR USUAL CLIENT')
console.table(tourOperator.filterTours(tour => tour.price < 1500 && tour.days >= 7))

class PremiumClient {
    constructor(tourOperator) {
        this.tourOperator = tourOperator;
        this.tourOperator.discount = 20;
    }
    getTours() {
        return this.tourOperator.getTours()
    }
    filterTours(filter) {
        return this.tourOperator.filterTours(filter)
    }
}
const premiumClient = new PremiumClient(tourOperator)

console.log('FILTERED TOURS FOR PREMIUM CLIENT')
console.table(premiumClient.filterTours(tour => tour.price < 3000 && tour.days >= 7 && tour.food == true))
