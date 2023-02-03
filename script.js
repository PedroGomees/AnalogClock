
    let SElement = document.getElementById("p_s");
    let MElement = document.getElementById('p_m');
    let HElement = document.getElementById('p_h');


var digitalElement = document.getElementById("digital")



function updateClocktime(){
    var now = new Date();
    var minute = now.getMinutes();
    var seconds = now.getSeconds();
    var hours = now.getHours();
    
 
digitalElement.innerHTML = `<p>${fixedZero(hours)}:${fixedZero(minute)}:${fixedZero(seconds)}</p>`;
  
    var SDeg = ((360 / 60 ) * seconds) - 90;
    var MDeg =  ((360 / 60 ) * minute) - 90;
    var HDeg = ((360 / 12) * hours) - 90;

    SElement.style.transform = `rotate(${SDeg}deg)`;

    MElement.style.transform = `rotate(${MDeg}deg)`;

    HElement.style.transform = `rotate(${HDeg}deg)`;

  

}

function fixedZero(time){
    return time < 10? `0${time}` : `${time}`;
}

updateClocktime();
setInterval(updateClocktime, 1000);
var clock = document.getElementById('relogio');



function change(){
    var sol = document.getElementById('sol');
    var corpo = document.getElementById('body');
    let timenow = new Date();
    let hourss = timenow.getHours(); 
    if(hourss > 5 & hourss < 19 ){
        sol.classList.add('sunAnimation');
       
            clock.classList.add('ClockAnimation');
   
    corpo.classList.add('bodychangeday')}
 
}
