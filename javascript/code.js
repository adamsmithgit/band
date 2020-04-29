
function setTicketButton() {
    var showDate = new Date("April 26, 2020 19:00:00");
    var dateDisplay = document.getElementById('dateOfShow');
    var dateToday = Date.now();
    dateDisplay.innerHTML = showDate.toDateString();
    if (dateToday > showDate) {
        document.getElementById("showButton").disabled = true;
        document.getElementById("showButton").style.background = "red";
        document.getElementById("showButton").innerHTML = "Sorry Date Passed";
    }
}

function setBackgroundColor() {
    var favoriteColor = "color";
    var currentPrompt = "Do you prefer a black or blue background?";
    do {    
        favoriteColor = prompt(currentPrompt, "black");
        currentPrompt = "Sorry you can only choose 'black' or 'blue.' Please re-enter your response.";
    } while (favoriteColor.toLowerCase() != "black" && favoriteColor.toLowerCase() != "blue");
        if (favoriteColor.toLowerCase().includes("black")) {
        document.getElementById('page').style.background = "black";
        } else {
            if (favoriteColor.toLowerCase().includes("blue")) {
                document.getElementById('page').style.background = "blue";
            } 
        }
}   

function favSong() {
    var response = "";
    var currentPrompt = "Which song should we add to our next album? 'Give it Up' or 'Tomorrow Today'";
    var favoriteSong = "default";
    do {
        favoriteSong = prompt(currentPrompt, "Enter your vote here");
        currentPrompt = "Sorry we did not understand your answer. Which song should we add to our next album? 'Give it Up' or 'Tomorrow Today'";
    } while (!favoriteSong.toLowerCase().includes("giv") && !favoriteSong.toLowerCase().includes("tod"));
    if (favoriteSong.toLowerCase().includes("giv")) {
        document.getElementById("favSong").innerHTML = "Give it Up"
    } else {
    if (favoriteSong.toLowerCase().includes("tod")) {
        document.getElementById("favSong").innerHTML = "Tommorow Today";
        }
    }
}

window.onload = function () {
    setTicketButton();
    this.favSong();
    this.setBackgroundColor();
}

