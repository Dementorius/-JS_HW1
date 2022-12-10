

for (let i=1; i<=10; i++) {

 if (i % 3 === 0) {
  console.log('FizBuz')
 }

 if (i % 2 === 0) {
  console.log('Fiz')
 }

 if (i % 2 != 0 && i % 3 != 0)
  console.log('Buz')
}
// 2 factorial

// задаём цикл который прокручивается 10 раз от 1 до 10 с шагом 1
// в каждой прокрутке factorial умножается на i, при этом переменная factorial своё  значение сохраняет нот предыдущей прокрутки, а i становится на 1 больше 1). 1*1 2)1*2 3)2*3 и т.д.

let factorial = 1
for (let i = 1; i <= 10; i++) {
 factorial *= i
} 

console.log (factorial)

// 3 

const PaperInPack = 500;
const ListPerWeek = 1200;
const weeksAmount = 8;

let paperWeekVolume = ListPerWeek * weeksAmount;

if (paperWeekVolume % PaperInPack != 0) {
let packsWeekVolume = (paperWeekVolume - (paperWeekVolume % PaperInPack)) / PaperInPack + 1;
console.log(packsWeekVolume)
} else { let packsWeekVolume = paperWeekVolume / PaperInPack;
console.log(packsWeekVolume)
}




// 4

// const porch = ?;
// const floor = ?;


const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 256;
let roomInPorch = roomsOnFloor * floors;


if (roomNumber % roomInPorch !=0) {
 let porch = (roomNumber - (roomNumber % roomInPorch)) / roomInPorch + 1
  console.log ('porch number'+' ' + porch)

 // номер кв. относительно подъезда
 let roomNumberInPorch = (roomInPorch - (porch  * roomInPorch - roomNumber)); 
 if (roomNumberInPorch % roomsOnFloor !=0) {
 let floor = (roomNumberInPorch - (roomNumberInPorch % roomsOnFloor )) / roomsOnFloor + 1
  console.log ('floor number' + ' ' + floor)
 } else {
 let floor = roomInPorch / roomsOnFloor
 console.log ('floor number' + ' ' + floor)
 }

 } else {
  let porch = roomNumber / roomInPorch;
  let floor = roomNumber / porch  / roomsOnFloor;
   console.log ('porch number' + ' ' + porch);
   console.log ('floor number' + ' ' + floor);
 }


 







