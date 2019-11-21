function timer() {
    let elmnt = document.getElementById('timer');
    let nowDate = new Date();
    let achiveDate = new Date(elmnt.dataset.date);
    let result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor((result/1000/60/60/24)%30);
    let months = Math.floor((result/1000/60/60/24/30)%12)
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    if (months < 10) months = '0' + months;
    elmnt.innerHTML = months + ' месяцев ' + days + ' дней ' + hours + ' часов ' + minutes + ' минут ' + seconds + ' секунд ';
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}

var imgsrc = "image/snow/snow.gif";
var height = document.body.scrollHeight;
if (height<document.body.clientHeight) height = document.body.clientHeight;
var width = document.body.scrollWidth;
var col = Math.round(height/25);    //количество снежинок

var amp = new Array();
var x_pos = new Array();
var y_pos = new Array();
var stx = new Array();
var sty = new Array();
var deltax = new Array();
var obj = new Array();

for (i=0; i<col; ++i) {
 amp[i] = Math.random()*19;
 x_pos[i] = Math.random()*(width-amp[i]-29);
 y_pos[i] = Math.random()*height;
 stx[i] = 0.03 + Math.random()*0.25;
 sty[i] = 2 + Math.random();
 deltax[i] = 0;

 document.write("<img id=\"sn"+ i +"\" style=\"position: absolute; " +
 "z-index: 50; top: -50px; left: -50px;\" src='" + imgsrc + "'>");

 obj[i] = document.getElementById("sn" + i);
}

function flake() {
 for (i=0; i<col; ++i) {
    y_pos[i] += sty[i];
    if (y_pos[i]>height-49) {
        x_pos[i] = Math.random()*(width-amp[i]-29);
        y_pos[i] = 0;
    }
    deltax[i] += stx[i];
    obj[i].style.top = y_pos[i] + "px";
    obj[i].style.left = x_pos[i] + amp[i]*Math.sin(deltax[i]) + "px";
 }
setTimeout("flake()", 60);
}
flake();