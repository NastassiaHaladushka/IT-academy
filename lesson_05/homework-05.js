let num = 13;
let str = 'thirteen';
let bool = false;

//Выполнить сложение различных типов(string+boolean, string+number, number+boolean):
let summ1 = str + bool;
let summ2 = str + num;
let summ3 = num + bool;

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean):
let mult1 = str * bool;
let mult2 = str * num;
let mult3 = num * bool;

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean):
let div1 = str / bool;
let div2= str / num;
let div3= num / bool;

//Выполнить явное преобразование(number, string, boolean):
num = String(num);
num = Boolean(num);
num = Number(num);

str = Number(str);
str = Boolean(str);
str = String(str);

bool = String(bool);
bool = Number(bool);
bool = Boolean(bool);
