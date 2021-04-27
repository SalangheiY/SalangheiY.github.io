let bill = document.querySelector('#bill');
let percentage = document.querySelector('#percentage');
let total = document.querySelector('#total');
let tip = document.querySelector('#tip');
let btn = document.querySelector('#button');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(2);
  bill = Number(bill.value);
  percentage = Number(percentage.value);

  if(isNaN(bill) || bill <= 0 || bill === null) {
    alert('please enter a valid Bill Amount')
  }else if (isNaN(percentage) || percentage <= 0 || percentage === null) {
    alert('please enter a valid percentage tip')
  }else {
    console.log(1)
    let tipAmount = bill/100 * percentage;
    tip.value = '$' + tipAmount;
    let finalTotal = tipAmount + bill;
    total.value = '$' + finalTotal;
  }
})