const hourElement1 = document.getElementById("hours")

const minuteElement1 = document.getElementById("minutes")

const secondElement1 = document.getElementById("seconds")

const ampmElement1 = document.getElementById("ampm")

function UpdateClock(){

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h = h-12
        ampm = "PM"
    }

h = h< 10 ? "0" +h :h;
m = m< 10 ? "0" +m :m;
s = s< 10 ? "0" +s :s;


    hourElement1.innerText = h;
    minuteElement1.innerText = m
    secondElement1.innerText = s
    ampmElement1, (innerText = ampm);

    setTimeout(()=>{
        UpdateClock()
    },1000)

}

UpdateClock()

