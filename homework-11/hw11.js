// Сформировать набор предложений клиенту по выбору туристической путевки 
// различного типа (отдых, экскурсии, лечение, шопинг, круиз и т.д.) для оптимального выбора. 
// Учитывать возможность выбора транспорта, питания и числа дней. 
// Реализовать выбор и сортировку путевок.

class Tours{
    constructor(){
        this.tours = [];
    };
    addTour(tour){
        this.tours.push(tour);
    };
    printAllToursInfo(){
        console.log(tours);
    };
    sortAllTours(){
        this.tours.sort((a, b) => a.price > b.price ? 1 : -1);
    };
    // Фильтр по пункту назначения:
    filterToursDestination(destination){
        console.log(this.tours.filter(tour => tour.destination === destination));
    };
    // Фильтр по продолжительности тура:
    filterToursDuration(duration){
        console.log(this.tours.filter(tour => tour.duration === duration));
    };
    filterToursMinMaxDuration(minDuration, maxDuration){
        console.log(this.tours.filter(tour => tour.duration >= minDuration && tour.duration <= maxDuration));
    };
    // Фильтр по виду транспорта:
    filterToursTransport(transport){
        console.log(this.tours.filter(tour => tour.transport === transport));
    };
    // Фильтр по цене:
    filterToursMinMaxPrice(minPrice, maxPrice){
        console.log(this.tours.filter(tour => tour.price >= minPrice && tour.price <= maxPrice));
    };   
};

class Tour{
    constructor(destination, duration, transport, price, boardbasis, visa){
        this.destination = destination;
        this.duration = duration;
        this.transport = transport;
        this.price = price;
        this.boardbasis = boardbasis;
        this.visa = visa;
    };

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.visa}`)
    };

};

class ShopingTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis, visa) {
        super(destination, duration, transport, price, boardbasis, visa)
    };
};

class HolydayTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis, visa, standart){
        super(destination, duration, transport, price, boardbasis, visa)
        this.standart = standart;
    };

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.visa} ${this.standart}`)
    };
};

class ActiveTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis, visa) {
        super(destination, duration, transport, price, boardbasis, visa)
    };
};

class MedicalalTour extends Tour{
    constructor(destination, duration, transport, price, boardbasis, visa) {
        super(destination, duration, transport, price, boardbasis, visa)
    };
};

class CruisisTour extends HolydayTour{
    constructor(destination, duration, transport, price, boardbasis, visa, standart, cruiseshipname){
        super(destination, duration, transport, price, boardbasis, visa, standart)
        this.cruiseshipname = cruiseshipname;
    };

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.visa} ${this.standart} ${this.ccruiseshipname}`)
    };
};

class BeachTour extends HolydayTour{
    constructor(destination, duration, transport, price, boardbasis, visa, standart, linenumber){
        super(destination, duration, transport, price, boardbasis, visa, standart)
        this.linenumber = linenumber;
    };

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.visa} ${this.standart} ${this.linenumber}`)
    };
};

class SkiTour extends ActiveTour{
    constructor(destination, duration, transport, price, boardbasis, visa, passportSki){
        super(destination, duration, transport, price, boardbasis, visa)
        this.passportSki = passportSki;
    };

    printTourInfo(){
        console.log(`${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.boardbasis} ${this.visa} ${this.passportSki}`)
    };
};

let tours = new Tours();
tours.addTour(new SkiTour('Tatry', 10, 'Bus', 1900, 'FB', 'Schengen visa', true));
tours.addTour(new SkiTour('Tatry', 14, 'Bus', 2500, 'FB', 'Schengen visa', true));
tours.addTour(new SkiTour('Karpaty', 10, 'Bus', 1000, 'FB', 'Schengen visa', true));
tours.addTour(new SkiTour('Shamoni', 7, 'Plane', 3500, 'AI', 'Schengen visa', true));
tours.addTour(new SkiTour('Trento', 14, 'Plane+Bus', 2500, 'FB', 'Schengen visa', true));
tours.addTour(new SkiTour('MonBlane', 14, 'Plane', 5000, 'AI', 'Schengen visa', true));
tours.addTour(new SkiTour('Courchevel', 10, 'Plane', 10000, 'FB', 'Schengen visa', true));
tours.addTour(new BeachTour('Maldives', 14, 'Plane', 5500, 'FB', 'No', '5 stars', 'First'));
tours.addTour(new BeachTour('Maldives', 10, 'Plane', 4000, 'AI', 'No', '5 stars', 'First'));
tours.addTour(new BeachTour('Maldives', 17, 'Plane', 6500, 'BB', 'No', '3 stars', 'Second'));
tours.addTour(new BeachTour('Turkey', 11, 'Plane', 1500, 'UAI', 'No', '5 stars', 'First'));
tours.addTour(new BeachTour('Turkey', 14, 'Plane', 1700, 'AI', 'No', '4 stars', 'First'));
tours.addTour(new BeachTour('Turkey', 21, 'Plane', 3000, 'NB', 'No', 'Apartments', 'Second'));
tours.addTour(new MedicalalTour('Essentuki', 7, 'Train', 1000, 'NB', 'No'));
tours.addTour(new MedicalalTour('Essentuki', 14, 'Train', 2000, 'NB', 'No'));
tours.addTour(new MedicalalTour('Essentuki', 21, 'Train', 3000, 'NB', 'No'));
tours.addTour(new ShopingTour('Vilnus', 2, 'Bus', 100, 'NB', 'Schengen visa'));
tours.addTour(new ShopingTour('Warszawa', 2, 'Bus', 130, 'NB', 'Schengen visa'));
tours.addTour(new ShopingTour('Białostok', 2, 'Bus', 110, 'NB', 'Schengen visa'));
tours.addTour(new CruisisTour('CaribbeanSea', 7, 'CruiseShip', 5500, 'AI', 'USA visa', '5 stars','HarmonyOfTheSeas'));
tours.addTour(new CruisisTour('CaribbeanSea', 10, 'CruiseShip', 8500, 'AI', 'USA visa', '5 stars','HarmonyOfTheSeas'));
tours.addTour(new CruisisTour('CaribbeanSea', 14, 'CruiseShip', 11000, 'AI', 'USA visa', '5 stars','HarmonyOfTheSeas'));
tours.printAllToursInfo();
console.log('Сортировка по цене:');
tours.sortAllTours();

//Фильтр по пункту назначения:
console.log('Фильтр по пункту назначения: Maldives:');
tours.filterToursDestination('Maldives');

// Фильтр по продолжительности тура:
console.log('Фильтр по продолжительности тура: 10 дней:');
tours.filterToursDuration(10);
console.log('Фильтр по продолжительности тура: 7-10 дней:');
tours.filterToursMinMaxDuration(7,10);

// Фильтр по виду транспорта:
console.log('Фильтр по виду транспорта: Самолет:');
tours.filterToursTransport('Plane');

// Фильтр по диапазону цены:
console.log('Фильтр по диапазону цены:');
tours.filterToursMinMaxPrice(2000, 4000);