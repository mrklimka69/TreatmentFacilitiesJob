const todayDate = new Date();
// const todayDate = "17.07.2024";
document.getElementById('todayDate').innerHTML = "Сегодня - " + getHumanDate(todayDate);

const guaranteedWorkingDay = new Date(1720644657461);
const dayInSeconds = 345600;

// console.log(getWorkDays());
showWorkDays(getWorkDays());


function showWorkDays(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        result += "<br>";
    }

    document.getElementById('workingDates').innerHTML = result;

}

function getWorkDays() {
    while (guaranteedWorkingDay.getTime() < todayDate.getTime()) {
        guaranteedWorkingDay.setDate(guaranteedWorkingDay.getDate() + 4);
    }

    let arr = [
        getHumanDate(guaranteedWorkingDay)
    ];


    let temp;
    for (let i = 1; i <= 15; i++) {
        temp = guaranteedWorkingDay.setDate(guaranteedWorkingDay.getDate() + 4);
        arr.push(getHumanDate(new Date(temp)));
    }

    return arr;
}

function getDateFromSeconds(seconds) {
    let tmpSeconds = seconds;

    let years = 0;
    while (tmpSeconds >= 31536000) {
        tmpSeconds -= 31536000;
        years++;
    }

    let month = 0;
    while (tmpSeconds >= 2592000) {
        tmpSeconds -= 2592000;
        month++;
    }

    let days = 0;
    while (tmpSeconds >= 86400) {
        tmpSeconds -= 86400;
        days++;
    }



    if (days < 10) {
        days = "0" + days;
    }

    if (month < 10) {
        month = "0" + month;
    }

    return days + "." + month + "." + years;
}

function getHumanDate(today) {
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }

    return day + "." + month + "." + year;
}

function getSecondsFromDate(humanDate) {
    let day = humanDate[0] + humanDate[1];
    let month = humanDate[3] + humanDate[4];
    let year = humanDate[6] + humanDate[7] + humanDate[8] + humanDate[9];

    return (year * 31536000) + (month * 2592000) + (day * 86400);
}