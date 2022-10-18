const remain = document.querySelector("#remain")

function getClock() {
const date = new Date();
const Dday = new Date("2022-12-25");

const xmas = Dday - date;

const xmasDay = String ( Math.floor(xmas / (1000*60*60*24)));
const xmasHour = String ( Math.floor((xmas / (1000*60*60)) %24)).padStart(2, "0");
const xmasMin = String ( Math.floor((xmas / (1000*60)) %60)).padStart(2, "0");
const xmasSeconds = String ( Math.floor(xmas / 1000 %60)).padStart(2, "0");

remain.innerText = `${xmasDay}D ${xmasHour}H ${xmasMin}M ${xmasSeconds}S`;

}

getClock();
setInterval(getClock, 1000);