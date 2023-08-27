
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
   
    corpo.classList.add('bodychangeday')}else{
        var lua = document.getElementById("lua");
        corpo.classList.add('Night');
        lua.classList.add('moonAnimation');
        clock.classList.add("ClockAnimation");

        function makeStars(){
            var space = document.getElementById("starscontainer");
            const star = document.createElement("div");
            star.className = "star";
            star.classList.add('starAnimation');
            const size = Math.random() * 3 + "px";
            star.style.width = size;
            star.style.height = size;
        
            const x = Math.random() * 200;
            const y = Math.random() * 100;
            star.style.top = `${y}vw`;
            star.style.left = `${x}vh` ;
            
        space.appendChild(star);
        }
        
        setInterval(makeStars, 100);
    }
 
}


