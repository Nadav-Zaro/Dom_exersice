1
function getWinStr() {
    document.write("hello there")
}
getWinStr()

2
function getWinStr() {
    document.write("hello there david")
}
getWinStr()

3
function getWinStr(userName) {
    document.write(`hello there ${userName}`)
}
getWinStr("nadav")

4
function getDetails(firstName, lastName, age) {
    document.write(`hello ${firstName} ${lastName} ${age}`)
}
getDetails("nadav", "zaro", 29)

5
const user = document.getElementById("details")
function getUserId(userName, userAge) {
    user.innerText = userName + userAge;
}
getUserId("NADAV ", 29)

6
const FirstName = document.getElementById("FirstName")
const lastName = document.getElementById("lastName")
const userAge = document.getElementById("userAge")
function getUserIdSepared(userName ,userLastName , age) {
    FirstName.innerText = userName;
    lastName.innerText = userLastName;
    userAge.innerText = age;
}
getUserIdSepared("NADAV ", "zaro", 29)

7
function getUserByDiv(userName, userAge) {
    document.write(`<div>name: ${userName} , age: ${userAge}</div>`)
}
getUserByDiv("nadav", 29)

8
function getUserByDiv(firstName,userLastName, userAge) {
    document.write(`<div><p>first name: ${firstName} , last name: ${userLastName}, age: ${userAge}</p></div>`)
}
getUserByDiv("nadav", "zaro", 29)

9
function getUserByP(firstName,userLastName, userAge) {
    document.write(`<p id="userInfo">first name: ${firstName} , last name: ${userLastName}, age: ${userAge}</p>`)
}
getUserByP("nadav", "zaro", 29)

10
function getUserByDivP(firstName,userLastName, userAge) {
    document.write(`<div><p id="userInfo">first name: ${firstName} , last name: ${userLastName}, age: ${userAge}</p></div>`)
}
getUserByDivP("nadav", "zaro", 29)

11
function getUserNameByP(firstName) {
    document.write(`<p id="userInfo">first name: ${firstName}</p>`)
}
getUserNameByP("nadav")
function getUserLastNameByP(userLastName) {
    document.write(`<p id="userInfo"> last name: ${userLastName}</p>`)
}
getUserLastNameByP("zaro")

12
function getUserNameByP(firstName) {
    document.write(`<p id="userInfo">first name: ${firstName}</p>`)
}
getUserNameByP("nadav")
let taarih = new Date()
function getUserLastNameDateByP(userLastName, taarih) {
    document.write(`<p id="userInfo"> last name: ${userLastName} ,<br> date: ${taarih} </p>`)
}
getUserLastNameDateByP("zaro", taarih)

13
function getCarObject(color, model, kmh) {
    var car = {};
    car.Color = color;
    car.Model = model;
    car.Kmh = kmh;
    document.write("car color:" + car.Color + ", car Model:" + car.Model + ", car Kmh:" + car.Kmh);
}
getCarObject("red" , "renault" , "34255kmh")

14
function getCarObject(color, model, kmh) {
    let year = new Date().getFullYear() - 5;
    var car = {};
    car.Color = color;
    car.Model = model;
    car.Kmh = kmh;
    car.Year = year
    document.write("car color:" + car.Color + ", car Model:" + car.Model + ", car Kmh:" + car.Kmh + ", car year:" + car.Year);
}
getCarObject("red" , "renault" , "34255kmh")

15
function getCarObject(color, model, kmh) {
    var car = {};
    car.Color = color;
    car.Model = model;
    car.Kmh = kmh;
    document.write("car color:" + car.Color + ", car Model:" + car.Model + ", car Kmh:" + car.Kmh);
}
getCarObject("red" , "renault" , "34255kmh")

16
function getCarObject(color, model, kmh) {
    var car = {};
    car.Color = color;
    car.Model = model;
    car.Kmh = kmh;
    document.write(`<div>car color:${car.Color }, car Model:${car.Model} , car Kmh:${car.Kmh}</div>`);
}
getCarObject("red" , "renault" , "34255kmh")

17
function getCarObject(color, model, kmh, year) {
    var car = {};
    car.Color = color;
    car.Model = model;
    car.Kmh = kmh;
    car.Year = year;
    document.write(`<div><p>car color:${car.Color },</p> car Model:${car.Model} ,<p> car Kmh:${car.Kmh} ,</p> car year:${year}</div>`);
}
getCarObject("red" , "renault" , "34255kmh", 1996)

18
function getCarObject(color, model, kmh, year) {
    var car = {};
    car.Color = color;
    car.Model = model;
    car.Kmh = kmh;
    car.Year = year;
    document.write(`<div><p id = "color">car color:${car.Color },</p id = "model"> car Model:${car.Model} ,<p id = "kmh"> car Kmh:${car.Kmh} ,</p id = "year"> car year:${year}</div>`);
}
getCarObject("red" , "renault" , "34255kmh", 1996)





