// 1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
// со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

let promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, getRandomIntInclusive(1, 5) * 1000)
  })

let promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, getRandomIntInclusive(1, 5) * 1000)
})

let promise3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, getRandomIntInclusive(1, 5) * 1000)
})

Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value);
});

// 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат 
// и выводить на экран.

function getNum () {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve(getRandomIntInclusive(1, 5)), 3000);
    }); 
};

async function getResultNumberTwo() {
    let num = await getNum();
    const numQuad = Math.pow(num, 2);
    console.log(numQuad);
};

getResultNumberTwo()

// 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum, 
// а затем найдет сумму полученных чисел и выводит на экран.

function getNumOne () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getRandomIntInclusive(1, 5)), 3000);
    });
};

function getNumTwo () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getRandomIntInclusive(6, 10)), 5000);
    });
};

async function getResultNumberThree () {
    const functionNumberOne = await getNumOne(1, 5);
    const functionNumberTwo = await getNumTwo(6, 10);
    console.log(functionNumberOne + functionNumberTwo);
};

getResultNumberThree();