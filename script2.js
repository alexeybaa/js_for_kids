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
clearTimeout(timeoutId); // clearTimeout отменил отложенный код

// Многократный запуск кода и setInterval
