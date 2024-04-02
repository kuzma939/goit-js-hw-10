import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 const dateTime = document.querySelector('input#datetime-picker');
  const startButton = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
startButton.addEventListener("click", startingTheTimer);
let userSelectedDate;
const options = flatpickr(dateTime, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      if (userSelectedDate < Date.now()) {
             iziToast.show({
                 message: 'Please choose a date in the future',
                 position: 'topRight',
                 });
                 startButton.disabled = true;
          } else {
            startButton.disabled = false;
        };
    },
  });

   
  function startingTheTimer() {
    if (isActive) {
        return;
    } 
       isActive = true;
       input.disabled = true;
       setInterval(() => {
           const currentDate = new Date();
           const remainingTime = userSelectedDate - currentDate;
           const time = convertMs(remainingTime);
          
           dataDays.textContent = `${addLeadingZero(time.days)}`;
           dataHours.textContent = `${addLeadingZero(time.hours)}`;
          dataMinutes.textContent = `${addLeadingZero(time.minutes)}`;
           dataSeconds.textContent = `${addLeadingZero(time.seconds)}`;
           startButton.disabled = true;
           if (remainingTime <= 0) {
               dataDays.textContent = `00`;
          dataHours.textContent = `00`;
          dataMinutes.textContent = `00`;
         dataSeconds.textContent = `00`;
        }
       }, 1000); 
};
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


