const startEl=document.getElementById("start");
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");
const timerEl=document.getElementById("timer");


let interval;
let timeleft =1800;
function updatetimer(){
    let minutes = Math.floor(timeleft / 60 );
    let seconds = timeleft % 60 ;
    let formattedtime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerEl.innerHTML = formattedtime;
}
function starttimer(){
    interval = setInterval(()=>{
        timeleft--;
        updatetimer();
        if (timeleft ===0){
            clearInterval(interval);
            alert("Time's Up");
            timeleft =1800;
            updatetimer();
        }
    },1000);
}

function stoptimer(){
    clearInterval(interval);
}
function resettimer(){
    clearInterval(interval);
    timeleft = 1800;
    updatetimer();
}
startEl.addEventListener("click", starttimer);
stopEl.addEventListener("click", stoptimer);
resetEl.addEventListener("click", resettimer);