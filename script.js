// Getting Systems Time instead of launch time

// setInterval(() => {
//   const date = new Date();
//   let day = date.getDate();
//   let seconds = date.getSeconds();
//   let min = date.getMinutes();
//   let hour = date.getHours();

//   day = day < 10 ? "0" + day : day;
//   min = min < 10 ? "0" + min : min;
//   hour = hour < 10 ? "0" + hour : hour;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   const topSec = document.querySelector(".top-sec");
//   const bottomSec = document.querySelector(".bottom-sec");
//   topSec.innerHTML = seconds;
//   bottomSec.textContent = seconds;

//   const topHours = document.querySelector(".top-hr");
//   const bottomHours = document.querySelector(".bottom-hr");
//   topHours.innerHTML = hour;
//   bottomHours.textContent = hour;

//   const topMins = document.querySelector(".top-mins");
//   const bottomMins = document.querySelector(".bottom-mins");
//   topMins.innerHTML = min;
//   bottomMins.textContent = min;

//   const topDays = document.querySelector(".top-days");
//   const bottomDays = document.querySelector(".bottom-days");
//   topDays.innerHTML = day;
//   bottomDays.textContent = day;

//   const secondCard = Array.from(
//     document.querySelector(".flip-card-sec").children
//   );

//   secondCard.forEach((card) => {
//     card.dataset.count = seconds;
//     console.log(card);
//   });
// }, 1000);
