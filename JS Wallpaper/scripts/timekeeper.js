function timeKeeper(){
    const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        date = d.getDate(),
        month = d.toLocaleString('default', {month: 'short'});
        year = d.getFullYear(),

        //Get text
        hourText = document.getElementById('hourtxt');
        minuteText = document.getElementById('minutetxt');
        dateText = document.getElementById('datetxt');
        dayText = document.getElementById('daytxt');

        //Leading Zeros
        const zeroPad = (num, places) => {
            const numZeroes = places - num.toString().length + 1;
            if (numZeroes > 0) {
            return Array(+numZeroes).join("0") + num;
            }
            return num
        }

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = weekday[d.getDay()];

        //Set Text
        hourText.innerHTML = "- " + h;
        minuteText.innerHTML = zeroPad(m, 2) + " -";
        dateText.innerHTML = zeroPad(date, 2) + " " + month + " " + year;
        dayText.innerHTML = day;
}

//Update clock per second
setInterval("timeKeeper()", 100);