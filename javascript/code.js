var showDate = new Date("April 29, 2020 19:00:00");
var dateDisplay = document.getElementById('dateOfShow');
var dateToday = Date.now();
dateDisplay.innerHTML = showDate.toDateString();
if (dateToday > showDate) {
    document.getElementById("showButton").disabled = true;
    document.getElementById("showButton").style.background = "red";
    document.getElementById("showButton").innerHTML = "Sorry Date Passed";
}

var favoriteColor = prompt("Do you prefer a black or blue background?");
if (favoriteColor.toLowerCase().includes("black")) {
    document.getElementById('page').style.background = "black";
    } else {
        if (favoriteColor.toLowerCase().includes("blue")) {
            document.getElementById('page').style.background = "blue";
        } 
    }
alert("");

var response = "";
var favoriteSong = prompt("Which song should we add to our next album? 'Give it Up' or 'Tomorrow Today'");
if (favoriteSong.toLowerCase().includes("give")) {
    response = "We like Give it Up too."
    } else {
        if (favoriteSong.toLowerCase().includes("today")) {
        response = "Tomorrow Today is a great song."
        } else {
            response = "Unfortunately we can't understand your answer."
        }
    }

alert("Thanks for participating " + response);


