alert('Задание 1 - Калькулятор любви')

let A = prompt("Введите имя родителя #1")
let B = prompt("Введите имя родителя #2")

result = (Math.random() + (A.length % B.length)) * 10;

alert(`${A} подходит к ${B} на ${result} процентов!`)

////////////////////////////////////////////////////

alert('Задание 2 - Калькулятор ИМТ')
let mass = prompt("Введите вес: ")
let height = prompt("Введите рост(см): ") /100
let imt = mass/(height**2)

console.log("mass = ", mass)
console.log("height = ", height)
console.log("imt = ", imt)

if(imt<18.5){
    alert("Недостаточный вес")
}else if(imt<=25){
    alert("normalno...")
}else if(imt<=30){
    alert("веса излишнии....")
}else{
    alert("Толсто....")
}

////////////////////////////////////////////////////

alert("Задание 3 - Високосный год ?")

let year = prompt("Введите год: ")

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert("da")
            
        }else{
            alert("net")
        }
    }
    else{
        alert("da")
    }
}else{
    alert("Нет :(")
}

///////////////////////////////////////////////////////////////

alert("Задание 4 - Кто оплачивает ужин?")

var arrName = []
while(1){
    arrName.push(prompt("Введите имя или оставьте окно пустым чтобы закончить"))
    if(arrName[arrName.length-1] == null || arrName[arrName.length-1].length == 0){
        break;
    }
}

let randI = Math.floor(Math.random() * (arrName.length - 1))

alert(`Оплачивать будет ${arrName[randI]}`)

