// const countDown = () => {
//   //getTime---- converts the returned  date(string) to milliseconds(number)
//   //launchDate is the future Date
//   const launchDate = new Date("Dec 26,2022 16:15:00").getTime();
//   // Current date
//   const now = new Date().getTime();

//   //calculating Difference between then and now
//   const gap = launchDate - now;

//   //time units
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   //calculating the time
//   let textDay = Math.floor(gap / day);
//   let textHour = Math.floor((gap % day) / hour);
//   let textMinute = Math.floor((gap % hour) / minute);
//   let textSecond = Math.floor((gap % minute) / second);

//   //Adding 0 if the digit is single
//   textHour = textHour < 10 ? "0" + textHour : textHour;
//   textMinute = textMinute < 10 ? "0" + textMinute : textMinute;
//   textSecond = textSecond < 10 ? "0" + textSecond : textSecond;

//   //DOM manipulation in action
//   // document.querySelector(".days").innerText = textDay;
//   // document.querySelector(".hours").innerText = textHour;
//   // document.querySelector(".minutes").innerText = textMinute;
//   // document.querySelector(".seconds").innerText = textSecond;
// };

// setInterval(countDown, 1000);
// --------------------------------------------------------------------------------
// Getting Systems Time instead

setInterval(() => {
  const date = new Date();
  let day = date.getDate();
  let seconds = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();

  document.querySelector(".days").innerText = day;
  document.querySelector(".hours").innerText = hour;
  document.querySelector(".minutes").innerText = min;
  document.querySelector(".seconds").innerText = seconds;
}, 1000);
