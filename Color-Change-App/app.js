// var button = document.getElementById('button');
// var canvas = document.getElementById('canvas');
// var colors = ['yellow', 'blue', 'black', 'green'];
// var index;

// button.addEventListener('click', function(){
//   index = parseInt(Math.random() * 4);
//   canvas.style.backgroundColor = colors[index];
// })

let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']

let button = document.getElementById('button')

button.addEventListener('click', function() {
  let index = parseInt((Math.random() * colors.length) + 1);

  let canvas = document.getElementById('canvas')

  canvas.style.background = `${colors[index]}`
})