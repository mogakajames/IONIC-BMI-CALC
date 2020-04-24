

const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');

const height = document.getElementById('height');
const weight = document.getElementById('weight');

const displayresult = document.getElementById('result');

const reset = () => {
 height.value = '';
 weight.value = '';
};

const calculateBmi = () => {
    
   const enteredHeight = +height.value;
   const enteredWeight = +weight.value;

   const bmi = enteredWeight / (enteredHeight * enteredHeight);

  if(isNaN(bmi)){
  alert('Invalid inputs');
  };

  const resultElement = document.createElement('ion-card');

  resultElement.innerHTML = `
  <ion-card-content>
  <h3>${bmi}</h3>
  </ion-card-content>
  `; 
  displayresult.innerHTML = '';
  displayresult.appendChild(resultElement);
};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', reset);