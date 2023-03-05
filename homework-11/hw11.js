// Сформировать набор предложений клиенту по выбору туристической путевки 
// различного типа (отдых, экскурсии, лечение, шопинг, круиз и т.д.) для оптимального выбора. 
// Учитывать возможность выбора транспорта, питания и числа дней. 
// Реализовать выбор и сортировку путевок.

class Tours{
    constructor(){
        this.tours = [];
    }

    addTour(tour){
        this.tours.push(tour);
    }

    printAllToursInfo(){
        console.log(tours);
    }
}

class Tour{
    constructor(destination, duration, transport, price, boardbasis){
        this.destination = destination;
        this.duration = duration;
        this.transport = transport;
        this.price = price;
        this.boardbasis = boardbasis;
    }

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis}`)
    }

}



class ShopingTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis) {
        super(destination, duration, transport, price, boardbasis)
    }
}

class HolydayTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis, standart){
        super(destination, duration, transport, price, boardbasis)
        this.standart = standart;
    }

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transfer} ${this.price} ${this.boardbasis} ${this.standart}`)
    }
}

class ActiveTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis) {
        super(destination, duration, transport, price, boardbasis)
    }
}

class MedicalalTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis) {
        super(destination, duration, transport, price, boardbasis)
    }
}

class CruisisTour extends HolydayTour{
    constructor(destination, duration, price, boardbasis, standart, cruiseshipname){
        super(destination, duration, price, boardbasis, standart)
        this.cruiseshipname = cruiseshipname;
    }

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.price} ${this.boardbasis} ${this.standart} ${this.ccruiseshipname}`)
    }
}

class BeachTour extends HolydayTour{
    constructor(destination, duration, transport, price, boardbasis, standart, lineNumber){
        super(destination, duration, transport, price, boardbasis, standart)
        this.lineNumber = lineNumber;
    }

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.standart} ${this.lineNumber}`)
    }
}

class SkiTour extends ActiveTour{
    constructor(destination, duration, transport, price, boardbasis, passportSki){
        super(destination, duration, transport, price, boardbasis)
        this.passportSki = passportSki;
    }

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.passportSki}`)
    }
}

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.tickets = [];
    }

    addTicket(ticket){
        this.tickets.push(ticket);
    }

    printTickets(){
        console.log(this.tickets);
    }

    getGeneralPrice() {
        return this.tickets.map(obj => obj.price)
            .reduce((a, b) => a + b);
    }

}

let tours = new Tours();
tours.addTour(new SkiTour('Tatry', 10, 'Bus', 1900, 'FB', true));
tours.addTour(new BeachTour('Maldives', 14, 'Plane', 5500, 'AI', '5 stars', 'First'));
tours.addTour(new MedicalalTour('Essentuki', 21, 'Train', 3000, 'NB'));
tours.printAllToursInfo();


let person = new Person('Alex', 'Smith', 33);
person.addTicket(new ActiveTour('Courchevel', 10, 'Plane', 10000, 'AI'));
person.addTicket(new CruisisTour('CaribbeanSea', 7, 'CruiseShip', 5500, 'AI', '5 stars','HarmonyOfTheSeas'));
person.printTickets();
console.log(person);
console.log(person.getGeneralPrice());
