// 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let PlayerNumber0ne = 0;
let PlayerNumberTw0 = 0;

for(let i = 0; i < 3; i++){
    PlayerNumber0ne += getRandomIntInclusive(1,6);
    PlayerNumberTw0 += getRandomIntInclusive(1,6);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

result(PlayerNumber0ne, PlayerNumberTw0);

function result(Number0ne, NumberTw0){
    if(Number0ne > NumberTw0){
        console.log('\nGame result: \nPlayer #1 WINS');
    } else if (Number0ne < NumberTw0){
        console.log('\nGame result: \nPlayer #2 WINS');
    } else {
        console.log('\nGame result: \nDRAW');
}
}

// 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

let Day = 0;
let FromDate = new Date(2000, 0, 13);
let Today = new Date();
let FridayTotal = 0;

    while(FromDate < Today){
        if(FromDate.getDate() === 13 && FromDate.getDay() === 5){
            FridayTotal++;
        }
        Day++;
        FromDate = new Date(2000, 0, Day);
    }


// 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному 
//числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

function WholeNumber(n, iterations) {
    const ArrA = [];
    let sumIterationsA = 0;
    for (let i = 0; i < iterations; i++) {
        if (i === iterations - 1) {
            ArrA.push(n - sumIterationsA);
            break;
        }
        let partA = Math.round(Math.random() * (n - sumIterationsA));
        ArrA.push(partA);
        sumIterationsA += partA;
    }
    return ArrA;
    }

// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

function FractionalNumber(n, iterations) {
    const ArrB = [];
    let sumIterationsB = 0;
    for (let i = 0; i < iterations; i++) {
        if (i == iterations - 1) {
            ArrB.push(+(n - sumIterationsB).toFixed(2));
            break;
        }
        let partB = +(Math.random() * (n - sumIterationsB)).toFixed(2);
        ArrB.push(partB);
        sumIterationsB += partB;
    }
    return ArrB;
};