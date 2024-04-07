//Get diallines
const dialLines = document.getElementsByClassName("diallines");

//Get clock
const clockE1 = document.getElementById("clock");

//Draw diallines
for (let i = 1; i < 60; i++) {
    clockE1.innerHTML += '<div class="diallines"></div>';
    dialLines[i].style.transform = `rotate(${6 * i}deg)`
}

//Clock Function
function clock(){

    const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = (d.getMonth() + 1),
        year = d.getFullYear(),

        //Calculate
        hDeg = h * 30 + m * (360 / 720);
        mDeg = m * 6 + s * (360 / 3600);
        sDeg = s * 6;

        //Get hands
        hourE1 = document.querySelector(".hour-hand");
        minE1 = document.querySelector(".minute-hand");
        secE1 = document.querySelector(".second-hand");
        dateE1 = document.querySelector(".date");

        //Set Clock
        hourE1.style.transform = `rotate(${hDeg}deg)`
        minE1.style.transform = `rotate(${mDeg}deg)`
        secE1.style.transform = `rotate(${sDeg}deg)`

        //Display date
        dateE1.innerHTML = `${month}/${date}/${year}`;
}

//Update clock per second
setInterval("clock()", 100);