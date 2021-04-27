var count = 0; //定义图片更改次数
var FI = null; //储存淡入interval循环
var timer = null; //储存轮播interval循环
var fullBox = document.querySelector('.bigImg'); //用于设置背景颜色
var pictures = document.querySelectorAll('.pictures'); //储存图片
var arrow = document.querySelectorAll('.arrow'); //储存左右箭头
var button = document.querySelectorAll('.button');//储存下部圆圈
var percent = 0; //淡入循环变量

console.log(pictures.length);

function fadeIn() {
  //淡入函数
  FI = setInterval(function() {
    percent += 0.010000; //精确浮点数精度
    if(percent >= 1){clearInterval(FI);}
    else {
      pictures[count].style.opacity = percent;
    }
  }, 16)
  percent = 0;
}

function pic() {
  //图像变换函数

  for(var i = 0; i < pictures.length; i++) {
    pictures[i].style.opacity = 0;
  }; //所有图片透明
  fullBox.style.backgroundColor = pictures[count].id//背景图片颜色等于相应图片的id

  for(var c = 0; c < button.length; i++) { //底部按钮颜色变化
    button[c].style.backgroundColor = 'grey';
  };

  button[count].style.backgroundColor = 'red';
}

// 主轮播循环
// showtime();

// function showtime() {
//   timer = setInterval(show, 4000)
// }

// function show() {
//   //轮播循环函数

//   count++;
//   if(count > pictures.length - 1) {
//     count = 0;
//   }

//   fadeIn();

//   pic();
// }

// // 左右箭头
// for(var i = 0; i < arrow.length; i++) {
//   arrow[i].onmouseover = function () {
//     clearInterval(timer);
//   };

//   arrow[i].onmouseout = function (){
//     showtime();
//   }

//   arrow[i].onclick = function () {
//     if(this.id == 'left') {
//       count--;
//       if(count < 0) {count = pictures.length - 1;}
//     }else {
//       count++;
//       if(count > pictures.length - 1) {count = 0}
//     };

//     fadeIn();

//     pic();
//   }
// }

// // 底部原点
// for(var i = 0; i < button.length; i++) {
//   button[i].index = i;

//   button[i].onmouseover = function () {
//     clearInterval(timer);
//     count = this.index; //确保count值不会出错
//     fadeIn();

//     pic();
//   };
//   button[i].onmouseout = function () {showtime()}
// }