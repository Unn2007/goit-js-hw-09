import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const daysCounterValue = document.querySelector("span[data-days]");
const hoursCounterValue = document.querySelector("span[data-hours]");
const minutesCounterValue = document.querySelector("span[data-minutes]");
const secondsCounterValue = document.querySelector("span[data-seconds]");
const inputDateTime = document.querySelector("#datetime-picker");
startBtn.setAttribute('disabled', '');
let currentTime = new Date();
let selectedTime = null;
let timerId=null;
let secondsCounter=0;
function addLeadingZero(value) {
  
  return  value<10 ? (String(value).padStart(2,"0")) :  String(value);
}


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
    else {Notify.failure('Please choose a date in the future',{timeout: 2000,});};
    },
  };
  flatpickr("#datetime-picker", options);
  startBtn.addEventListener("click",onStart);
  function onStart() {
    startBtn.setAttribute('disabled', '');
    inputDateTime.setAttribute('disabled', '');
    currentTime = new Date();
    timerId = setInterval(startCounter,1000);
    };
 function startCounter() {
  
  secondsCounter+=1;
  NumberOfMiliSeconds = selectedTime.getTime()-currentTime.getTime();
  NumberOfSeconds = Math.floor(NumberOfMiliSeconds/1000)-secondsCounter;
  NumberOfdays = Math.floor(NumberOfSeconds/86400);
  NumberOfHoursInLastDay = Math.floor((NumberOfSeconds-NumberOfdays*86400)/3600);
  NumberOfMinutesInLastHours = Math.floor(((NumberOfSeconds-NumberOfdays*86400)-NumberOfHoursInLastDay*3600)/60);
  NumberOfSecondsInLastMinutes = NumberOfSeconds - NumberOfdays*24*60*60-NumberOfHoursInLastDay*60*60 - NumberOfMinutesInLastHours*60;
  daysCounterValue.textContent = addLeadingZero(NumberOfdays);
  hoursCounterValue.textContent  = addLeadingZero(NumberOfHoursInLastDay);
  minutesCounterValue.textContent = addLeadingZero(NumberOfMinutesInLastHours) ;
  secondsCounterValue.textContent = addLeadingZero(NumberOfSecondsInLastMinutes);
  if ((NumberOfdays===0)&(NumberOfHoursInLastDay===0)&(NumberOfMinutesInLastHours===0)&(NumberOfSecondsInLastMinutes===0)) {
    
    clearInterval(timerId);
    startBtn.removeAttribute('disabled', '');
    inputDateTime.removeAttribute('disabled', '');
  }
  

 };

  