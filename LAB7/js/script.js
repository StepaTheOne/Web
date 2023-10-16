let prek = 12;
alert("Prikol", prek);
let i1 = 88;
let i2 = 14;
console.log("var1 =", i1);
console.log("var2 =", i2);
console.log(i1, '+' ,i2, '=', i1+i2);

console.log();
console.log("Приведение строк");

let strCheckLow = "HAHahahHAHahUGAR";
console.log("strToLow = ",strCheckLow);
console.log(strCheckLow.toLowerCase());

let strCheckHigh = "Tak NE smeshno je";
console.log("strToHigh = ",strCheckHigh);
console.log(strCheckHigh.toUpperCase());

console.log();
console.log("База над числами");

console.log(i1, '+' ,i2, '=', i1+i2);
console.log(i1, '-' ,i2, '=', i1-i2);
console.log(i2, '/' ,i1, '=', i2/i1);
console.log(i1, '*' ,i2, '=', i1*i2);
console.log(i1, '%' ,i2, '=', i1%+i2);
console.log(5, '^' ,3, '=', 5**3);

console.log('Свои задания');

console.log("Вывести длину строки");
let str1 = "Если только в Африке было бы больше москитных сеток, мы бы могли каждый год спасать МИЛЛИОНЫ москитов от спида!";
console.log(str1);
console.log("Длина строки = ", str1.length);

console.log("Сделать срез строки.");
let str2 = "Если только в Африке было бы больше москитных сеток, мы бы могли каждый год спасать";
let sl1 = str2.length;
console.log(str1.slice(sl1+1))