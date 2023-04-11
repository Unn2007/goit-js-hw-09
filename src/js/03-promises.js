import { Notify } from 'notiflix/build/notiflix-notify-aio';
let delayPromise;
let stepPromise;
let amountPromise;
const refs =
{
inputFirstDelay:document.querySelector('input[name="delay"]'),
inputStep:document.querySelector('input[name="step"]'),
inputAmount:document.querySelector('input[name="amount"]'),
submitForm:document.querySelector('.form'),
submitButton:document.querySelector('.form button'),
};
refs.submitForm.addEventListener("submit",onSubmit);

function onSubmit(e) {
  e.preventDefault();
  delayPromise=refs.inputDelay.value;
  stepPromise=refs.inputStep.value;
  amountPromise=refs.inputAmount.value;
  refs.submitButton.setAttribute('disabled', '');
};




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
