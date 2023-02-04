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

  // -----Days section--------------

  document.querySelector(".days-top").innerText = day;
  document.querySelector(".days-bottom").innerText = day;
  document.querySelector(".top-flip").innerText = day;
  document.querySelector(".bottom-flip").innerText = day;

  // -----Hours section--------------

  document.querySelector(".hours-top").innerText = hour;
  document.querySelector(".hours-bottom").innerText = hour;
  // document.querySelector(".top-flip").innerText = hour;
  // document.querySelector(".bottom-flip-hours").innerText = hour;

  // -----Mins section--------------

  document.querySelector(".minutes-top").innerText = min;
  document.querySelector(".minutes-bottom").innerText = min;
  // document.querySelector(".top-flip-minutes").innerText = min;
  // document.querySelector(".bottom-flip-minutes").innerText = min;

  // -----Secondss section--------------

  document.querySelector(".seconds-top").innerText = seconds;
  document.querySelector(".seconds-bottom").innerText = seconds;
  // document.querySelector(".top-flip").innerText = seconds;
  // document.querySelector(".bottom-flip").innerText = seconds;
}, 1000);

// const topHalfs = document.querySelectorAll(".top-flip");
// const bottomHalfs = document.querySelectorAll(".bottom-flip");

// const topHalfArray = Array.from(topHalfs);
// const bottomHalfArray = Array.from(bottomHalfs);

// topHalfArray.forEach((top) => {
//   top.addEventListener("onClick", () => {
//     console.log(top);
//   });
// });
