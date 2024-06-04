

const startStopBtn = document.querySelector('#startStopBtn')
 const resetBtn = document.querySelector('#resetBtn');

 //variables for time

 let seconds = 0;
 let minutes = 0;
 let hours = 0;

 //variables for leadind Zero

 let leadindseconds = 0;
 let leadindMinutes = 0;
 let leadindHours = 0;
// Variables for set interval & timerstatus

let timerInterval = null;

let timerstatus = "stopped";

 // stop watch function

 function stopwatchFunction(){
  seconds++
  if (seconds /60 === 1){
    seconds = 0;
    minutes ++;

    if(minutes/60 === 1){
      minutes = 0;
      hours ++;
      
    }
  }

    if (seconds < 10){
      leadindseconds = '0' + seconds.toString();
    }else
    {
      leadindseconds = seconds;
    }

    if (minutes < 10){
      leadindMinutes = '0' + minutes.toString();
    }else
    {
      leadindMinutes = minutes;
    }

    if (hours < 10){
      leadindHours = '0' + hours.toString();
    }else
    {
      leadindHours = hours;
    }

  let displayTimer = document.getElementById('timer').innerText =
   leadindHours + ':' + leadindMinutes + ':' + leadindseconds;
   
 }

 //window.setInterval(stopwatchFunction, 0)

 startStopBtn.addEventListener('click', function(){

  if (timerstatus === 'stopped') {
    timerInterval = window.setInterval(stopwatchFunction, 1000);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`;
    timerstatus = 'started';
  }
  
  else{
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
    timerstatus = 'stopped';
  }
 });

 resetBtn.addEventListener('click', function(){


  window.clearInterval(timerInterval);
  seconds = 0 ;
  minutes = 0 ;
  hours = 0 ;
  
  document.getElementById('timer').innerHTML = '00:00:00'
 })

