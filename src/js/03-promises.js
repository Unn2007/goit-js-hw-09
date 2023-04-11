import { Notify } from 'notiflix/build/notiflix-notify-aio';
let delayPromise;
let stepPromise;
let amountPromise;
let delayCount = 0;
let delayArr = [];
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
  delayPromise=Number(refs.inputFirstDelay.value);
  stepPromise=Number(refs.inputStep.value);
  amountPromise=Number(refs.inputAmount.value);
  refs.submitButton.setAttribute('disabled', '');
  fillDelArr(delayPromise, amountPromise);
  delayArr.map((delay, position)=>{

createPromise((position+1), delay)
  .then(({ position, delay }) => {
    
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    }); 
  });
  delayPromise = 0;
  stepPromise = 0;
  amountPromise=0;
  delayCount = 0;
  delayArr = [];
  refs.submitButton.removeAttribute('disabled', '');
};




function createPromise(position, delay) {
  const promise = new Promise((resolve,reject) => {

    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    setTimeout(()=>{
      if (shouldResolve) {
        resolve({position:position,delay:delay});
      } else {
        reject({position:position,delay:delay});
      }
    },delay);
    

  })
  return promise;
}

function fillDelArr(delay, amount) {
for (let positionPromise = 1; positionPromise <= amount; positionPromise+=1) {
delayCount = (positionPromise === 1) ? delay : delayCount+=delay;
delayArr.push(delayCount);
}
};


