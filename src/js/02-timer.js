import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startBtn = document.querySelector('button[data-start]');
const daysCounterValue = document.querySelector("span[data-days]");
const hoursCounterValue = document.querySelector("span[data-hours]");
const minutesCounterValue = document.querySelector("span[data-minutes]");
const secondsCounterValue = document.querySelector("span[data-seconds]");
startBtn.setAttribute('disabled', '');
let currentTime = new Date();
let selectedTime = null;
let timerId=null;
let secondsCounter=0;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        currentTime = new Date();
        
if (currentTime.getTime()<selectedDates[0].getTime()) {
    selectedTime = selectedDates[0];
    startBtn.removeAttribute('disabled', '');
    }
    else {window.alert("Please choose a date in the future");};
    },
  };
  flatpickr("#datetime-picker", options);
  startBtn.addEventListener("click",onStart);
  function onStart() {
    startBtn.setAttribute('disabled', '');
    currentTime = new Date();
    timerId = setInterval(startCounter,1000);
    };
 function startCounter() {
  
  secondsCounter+=1;
  NumberOfMiliSeconds = selectedTime.getTime()-currentTime.getTime();
  NumberOfSeconds = Math.floor(NumberOfMiliSeconds/1000)-secondsCounter;
  NumberOfdays = Math.floor(NumberOfSeconds/86400);
  NumberOfHours = Math.floor((NumberOfSeconds-NumberOfdays*86400)/3600);
  NumberOfMinutes = Math.floor(((NumberOfSeconds-NumberOfdays*86400)-NumberOfHours*3600));

    
     daysCounterValue.textContent = NumberOfdays;
     console.log(secondsCounter);
     console.log((selectedTime.getDate()-currentTime.getDate()));
     hoursCounterValue.textContent  = NumberOfHours;
    // minutesCounterValue.textContent = selectedTime.getDate()-currentTime.getDate();
    // secondsCounterValue.textContent = (selectedTime.getTime()-currentTime.getTime())/1000;


 };

  