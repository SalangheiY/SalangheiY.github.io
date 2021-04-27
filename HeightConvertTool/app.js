const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let feet = document.querySelector('#feet');
  let inches = document.querySelector('#inches');
  const result = document.querySelector('#result');

  feet = parseInt(feet.value);
  inches = parseInt(inches.value);

  if(isNaN(feet) || isNaN(inches)) {
    result.textContent = 'Please enter a valid number!'
  }else if(feet < 0) {
    result.textContent = 'Please enter a valid number!'
  }else if(inches < 0 || inches >=12) {
    result.textContent = 'Please enter an inch value between 0 and 12'
  }else {
    //calculate
    let resultValue = (feet * 12) + inches;
    result.textContent = `${resultValue} cm`
    document.querySelector('#feet').value = '';
    document.querySelector('#inches').value = '';
  }
})