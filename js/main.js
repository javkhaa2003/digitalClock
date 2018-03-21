function checkTime(i) {
  if (i < 10) {  i = "0" + i; };
    return i;
};

function startTime() {

  var currentTime = new Date();
  var hour   = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();


  if (hour > 12) {
      hour = hour - 12;
  }

  minute = checkTime(minute);
  second = checkTime(second);

  document.getElementById('time').textContent = hour + ":" + minute + ":" + second;
  document.getElementById('year').textContent = setCurrentDate()

  setTimeout(startTime, 1000);
}


function setCurrentDate(){
  var now = new Date()
  var date = now.getDate()
  var month = now.getMonth()
  var fullyear = now.getFullYear()
 return date + "/" + month + "/"+ fullyear
}


document.getElementById('time').addEventListener('onload', startTime(), false);
