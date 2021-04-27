let send = document.getElementById('send');
let reset = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e) {
  e.preventDefault();
})

send.addEventListener('click', function () {
  // console.log(1)
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  name = name.value;
  localStorage.getItem('name', name);

  email = email.value;
  localStorage.getItem('email', email);

  message = message.value;
  localStorage.getItem('message', message);
  console.log(localStorage)
})

reset.addEventListener('click', function() {
  // console.log(1);
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  name.value = '';
  email.value = '';
  message.value = '';

})