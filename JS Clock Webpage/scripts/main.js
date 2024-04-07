function clock() {
    const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        
        date = d.getDate(),
        month = d.toLocaleString('default', {month: 'long'});
        year = d.getFullYear(),

        //Get text
        hourText = document.getElementById('hour_value');
        minText = document.getElementById('min_value');
        secText = document.getElementById('sec_value');
        periodText = document.getElementById('period_value');
        dateText = document.getElementById('day_value');
        monthText = document.getElementById('month_value');
        yearText = document.getElementById('year_value');

        //Leading Zeros
        const zeroPad = (num, places) => {
            const numZeroes = places - num.toString().length + 1;
            if (numZeroes > 0) {
              return Array(+numZeroes).join("0") + num;
            }
            return num
        }

        //Set period
        if (h > 12){
            hourText.innerHTML = '"' + (zeroPad(h, 2) - 12) + '"';
            periodText.innerHTML = '"PM"';
            hourText.className = 'number';
        } else if (h == 12){
            hourText.innerHTML = '"' + (zeroPad(h, 2)) + '"';
            periodText.innerHTML = '"PM"';
            hourText.className = 'number';
        } else if (h < 12){
            hourText.innerHTML = '"' + zeroPad(h, 2) + '"';
            periodText.innerHTML = '"AM"';
            hourText.className = 'number';
        }

        //Set text
        minText.innerHTML = '"' + zeroPad(m, 2) + '"';
        minText.className = 'number';
        secText.innerHTML = '"' + zeroPad(s, 2) + '"';
        secText.className = 'number';
        periodText.className = 'string';
        dateText.innerHTML = '"' + zeroPad(date, 2) + '"';
        dateText.className = 'number';
        monthText.innerHTML = '"' + month + '"';
        monthText.className = 'string';
        yearText.innerHTML = '"' + year + '"';
        yearText.className = 'number';
}

//Update clock per second
setInterval("clock()", 100);