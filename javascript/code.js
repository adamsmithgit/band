var showDate = new Date("April 29, 2020 19:00:00");
var dateDisplay = document.getElementById('dateOfShow');
var dateToday = Date.now();
dateDisplay.innerHTML = showDate.toDateString();
if (dateToday > showDate) {
    document.getElementById("showButton").disabled = true;
    document.getElementById("showButton").style.background = "red";
    document.getElementById("showButton").innerHTML = "Sorry Date Passed";
}