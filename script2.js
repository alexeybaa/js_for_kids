// Интерактивное программирование

//Отложенное выполнение кода

function timeUp() {
  alert("Время вышло!");
}

setTimeout(timeUp, 3000); // миллисекунды

// отмена отложенного выполнения кода
function doHomeworkAlarm() {
  alert("Эй! Пора делать домашку!");
}

let timeoutId = setTimeout(doHomeworkAlarm, 6000);
//clearTimeout(timeoutId); // clearTimeout отменил отложенный код

// Многократный запуск кода и setInterval
let counter = 1;
function printMessage() {
  if (counter < 10) {
    console.log("Ты смотришь в консоль уже " + counter + " сек");
  }
  counter++;
}

let intervalId = setInterval(printMessage, 1000);

//clearInterval(intervalId); // clearInterval отменил отложенный код
