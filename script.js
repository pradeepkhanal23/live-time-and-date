const secondsCard = document.getElementById("seconds");
const secondsTopCard = secondsCard.children[0].children[0];
const secondsBottomCard = secondsCard.children[0].children[1];
const secondsOverlayTopCard = secondsCard.children[1].children[0];
const secondsOverlayBottomCard = secondsCard.children[1].children[1];

const minutesCard = document.getElementById("minutes");
const minutesTopCard = minutesCard.children[0].children[0];
const minutesBottomCard = minutesCard.children[0].children[1];
const minutesOverlayTopCard = minutesCard.children[1].children[0];
const minutesOverlayBottomCard = minutesCard.children[1].children[1];

const hoursCard = document.getElementById("hours");
const hoursTopCard = hoursCard.children[0].children[0];
const hoursBottomCard = hoursCard.children[0].children[1];
const hoursOverlayTopCard = hoursCard.children[1].children[0];
const hoursOverlayBottomCard = hoursCard.children[1].children[1];

const daysCard = document.getElementById("days");
const daysTopCard = daysCard.children[0].children[0];
const daysBottomCard = daysCard.children[0].children[1];
const daysOverlayTopCard = daysCard.children[1].children[0];
const daysOverlayBottomCard = daysCard.children[1].children[1];

let previousDate = new Date();
let previousDay = previousDate.getDay();
let previousHour = previousDate.getHours();
let previousMinute = previousDate.getMinutes();
let previousSecond = previousDate.getSeconds();

previousDay = previousDay < 10 ? "0" + previousDay : previousDay;
previousHour = previousHour < 10 ? "0" + previousHour : previousHour;
previousMinute = previousMinute < 10 ? "0" + previousMinute : previousMinute;
previousSecond = previousSecond < 10 ? "0" + previousSecond : previousSecond;

setInterval(flipCard, 1000);
function flipCard() {
  const currentDate = new Date();

  let currentDay = currentDate.getDay();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();

  currentDay = currentDay < 10 ? "0" + currentDay : currentDay;
  currentHour = currentHour < 10 ? "0" + currentHour : currentHour;
  currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
  currentSecond = currentSecond < 10 ? "0" + currentSecond : currentSecond;

  secondsTopCard.innerText = currentSecond;
  secondsBottomCard.innerText = currentSecond;
  secondsOverlayTopCard.innerText = currentSecond;
  secondsOverlayBottomCard.innerText = currentSecond;

  minutesTopCard.innerText = currentMinute;
  minutesBottomCard.innerText = currentMinute;
  minutesOverlayTopCard.innerText = currentMinute;
  minutesOverlayBottomCard.innerText = currentMinute;

  hoursTopCard.innerText = currentHour;
  hoursBottomCard.innerText = currentHour;
  hoursOverlayTopCard.innerText = currentHour;
  hoursOverlayBottomCard.innerText = currentHour;

  daysTopCard.innerText = currentDay;
  daysBottomCard.innerText = currentDay;
  daysOverlayTopCard.innerText = currentDay;
  daysOverlayBottomCard.innerText = currentDay;

  // -------------------------SECOND SEGMENT-----------------------------------

  if (previousSecond != currentSecond) {
    secondsTopCard.innerText = currentSecond;
    secondsBottomCard.innerText = currentSecond;
    secondsOverlayTopCard.innerText = currentSecond;
    secondsOverlayBottomCard.innerText = currentSecond;
    secondsOverlayTopCard.classList.add("flip");
    secondsOverlayBottomCard.classList.add("flip");
    previousSecond = currentSecond;

    setTimeout(() => {
      secondsOverlayTopCard.classList.remove("flip");
      secondsOverlayBottomCard.classList.remove("flip");
    }, 500);
  } else {
    secondsOverlayTopCard.classList.remove("flip");
    secondsOverlayBottomCard.classList.remove("flip");
    previousSecond = currentSecond;
  }

  // -------------------------MINUTE SEGMENT-----------------------------------
  if (previousMinute != currentMinute) {
    // minutesTopCard.innerText = currentMinute;
    // minutesBottomCard.innerText = currentMinute;
    minutesOverlayTopCard.innerText = currentMinute;
    minutesOverlayBottomCard.innerText = currentMinute;
    minutesOverlayTopCard.classList.add("flip");
    minutesOverlayBottomCard.classList.add("flip");
    previousMinute = currentMinute;

    setTimeout(() => {
      minutesOverlayTopCard.classList.remove("flip");
      minutesOverlayBottomCard.classList.remove("flip");
    }, 500);
  } else {
    minutesOverlayTopCard.classList.remove("flip");
    minutesOverlayBottomCard.classList.remove("flip");
    previousMinute = currentMinute;
  }

  // --------------------HOUR SEGMENT------------------------------------------------------

  if (previousHour != currentHour) {
    hoursTopCard.innerText = currentHour;
    hoursBottomCard.innerText = currentHour;
    hoursOverlayTopCard.innerText = currentHour;
    hoursOverlayBottomCard.innerText = currentHour;
    hoursOverlayTopCard.classList.add("flip");
    hoursOverlayBottomCard.classList.add("flip");
    previousHour = currentHour;

    setTimeout(() => {
      hoursOverlayTopCard.classList.remove("flip");
      hoursOverlayBottomCard.classList.remove("flip");
    }, 500);
  } else {
    hoursOverlayTopCard.classList.remove("flip");
    hoursOverlayBottomCard.classList.remove("flip");
    previousHour = currentHour;
  }

  // --------------------DAY SEGMENT------------------------------------------------------

  if (previousDay != currentDay) {
    daysTopCard.innerText = currentDay;
    daysBottomCard.innerText = currentDay;
    daysOverlayTopCard.innerText = currentDay;
    daysOverlayBottomCard.innerText = currentDay;
    daysOverlayTopCard.classList.add("flip");
    daysOverlayBottomCard.classList.add("flip");
    previousDay = currentDay;

    setTimeout(() => {
      daysOverlayTopCard.classList.remove("flip");
      daysOverlayBottomCard.classList.remove("flip");
    }, 500);
  } else {
    daysOverlayTopCard.classList.remove("flip");
    daysOverlayBottomCard.classList.remove("flip");
    previousDay = currentDay;
  }
}
