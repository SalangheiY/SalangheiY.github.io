function getTimeRemaining(endtime) {
  var time = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(time / 1000 % 60);
  var minutes = Math.floor(time/ 1000/ 60 % 60);
  var hours = Math.floor(time / (1000 * 60 * 60) % 24);
  var days = Math.floor(time / (1000 * 60 *60 * 24));
  debugger;
  console.log(time, seconds, minutes, hours, days)
  return {
    "time": time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function initializeTime(id, endtime) {
  var clock = document.getElementById('clockdiv');
  var days = document.querySelector('.days');
  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds')

  function updateTime() {
    var t = getTimeRemaining(endtime);

    days.innerHTML = t.days;
    hours.innerHTML = ('0' + t.hours).slice(-2);
    minutes.innerHTML = ('0' + t.minutes).slice(-2);
    seconds.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.time <= 0) {
      clearInterval(timeinterval)
    }
  }
  updateTime();
  var timeinterval = setInterval(updateTime, 1000);
}

var endtime = new Date(Date.parse(new Date()) + 7 * 24 *60 * 60 * 1000);
// console.log(endtime)
initializeTime('clockdiv', endtime)