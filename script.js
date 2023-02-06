// Getting Systems Time instead of launch time

setInterval(() => {
  const date = new Date();
  let day = date.getDate();
  let seconds = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();

  day = day < 10 ? "0" + day : day;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //   ---------------SECOND FLIP CARD-------------------------

  const flipCardSecond = document.querySelector(".flip-card-second");

  const topHalfSecond = document.createElement("div");
  topHalfSecond.classList.add("top-flip");
  flipCardSecond.appendChild(topHalfSecond);

  const bottomHalfSecond = document.createElement("div");
  bottomHalfSecond.classList.add("bottom-flip");
  flipCardSecond.appendChild(bottomHalfSecond);

  const flipCardSecondChildren = Array.from(
    document.querySelector(".flip-card-second").children
  );

  flipCardSecondChildren.forEach((child) => {
    child.textContent = seconds;
  });

  //   ---------------SECOND FLIP CARD ENDS-------------------------

  //   ---------------------------------------------------------------------------------------------------

  //   --------------MINUTES FLIP CARD---------------------

  const flipCardMinute = document.querySelector(".flip-card-minute");

  const topHalfMinute = document.createElement("div");
  topHalfMinute.classList.add("top-flip");
  flipCardMinute.appendChild(topHalfMinute);

  const bottomHalfMinute = document.createElement("div");
  bottomHalfMinute.classList.add("bottom-flip");
  flipCardMinute.appendChild(bottomHalfMinute);

  const flipCardMinuteChildren = Array.from(
    document.querySelector(".flip-card-minute").children
  );

  flipCardMinuteChildren.forEach((child) => {
    child.textContent = min;
  });

  //   --------------MINUTES FLIP CARD ENDS---------------------
  // ------------------------------------------------------------------------------------------------------

  // --------------HOURS FLIP CARD---------------------

  const flipCardHour = document.querySelector(".flip-card-hour");

  const topHalfHour = document.createElement("div");
  topHalfHour.classList.add("top-flip");
  flipCardHour.appendChild(topHalfHour);

  const bottomHalfHour = document.createElement("div");
  bottomHalfHour.classList.add("bottom-flip");
  flipCardHour.appendChild(bottomHalfHour);

  const flipCardHourChildren = Array.from(
    document.querySelector(".flip-card-hour").children
  );

  flipCardHourChildren.forEach((child) => {
    child.textContent = hour;
  });

  //   --------------HOURS FLIP CARD ENDS---------------------

  //   ----------------------------------------------------------------------------------------------------

  //   --------------DAY FLIP CARD---------------------

  const flipCardDay = document.querySelector(".flip-card-day");

  const topHalfDay = document.createElement("div");
  topHalfDay.classList.add("top-flip");
  flipCardDay.appendChild(topHalfDay);

  const bottomHalfDay = document.createElement("div");
  bottomHalfDay.classList.add("bottom-flip");
  flipCardDay.appendChild(bottomHalfDay);

  const flipCardDayChildren = Array.from(
    document.querySelector(".flip-card-day").children
  );

  flipCardDayChildren.forEach((child) => {
    child.textContent = day;
  });

  //   --------------DAYS FLIP CARD ENDS---------------------
}, 1000);
