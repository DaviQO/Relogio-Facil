let clock = document.querySelector(".timer");

setInterval(function () {
   const date = new Date().toLocaleTimeString();
   clock.innerHTML = date;
}, 1000) 