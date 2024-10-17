const clock = document.querySelector('.js-clock');




function getClock() {
  // const date = new Date();
  // const hours = date.getHours().toString().padStart(2,"0");
  // const minutes =date.getMinutes().toString().padStart(2,"0");
  // // const seconds = date.getSeconds().toString().padStart(2,"0");
  // const seconds = String(date.getSeconds()).padStart(2,"0");

  const timeNow = new Date();
  const monthNow = timeNow.getMonth();
  const dateNow = timeNow.getDate();

  let xmasDate;

  if (monthNow === 11 & dateNow > 24) {
    xmasDate = new Date(timeNow.getFullYear() + 1, 11, 24,); //month,date,hour,min,sec
  }
  else {
    xmasDate = new Date(timeNow.getFullYear(), 11, 24,); //month,date,hour,min,sec
  }

  const difference = xmasDate - timeNow;

  const days = Math.floor(difference/(24*60*60*1000));
  const hours = Math.floor((difference%(24*60*60*1000))/(60*60*1000)).toString().padStart(2,"0");
  const minutes = Math.floor((difference%(60*60*1000))/(60*1000)).toString().padStart(2,"0");
  const seconds = Math.floor((difference%(60*1000))/(1000)).toString().padStart(2,"0");

  
  



  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // clock.innerText =`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
