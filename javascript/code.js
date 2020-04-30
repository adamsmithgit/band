function listSongs() {
    var songList = [
        "Smells Like Teen Spirit - Nirvana", 
        "Imagine - John Lennon", 
        "One - U2", 
        "Billie Jean - Michael Jackson", 
        "Bohemian Rhapsody - Queen", 
        "Hey Jude - The Beatles", 
        "Like A Rolling Stone - Bob Dylan", 
        "I Can't Get No Satisfaction - Rolling Stones", 
        "God Save The Queen - Sex Pistols", 
        "Sweet Child O'Mine - Guns N' Roses", 
        "London Calling - The Clash", 
        "Waterloo Sunset - The Kinks", 
        "Hotel California - The Eagles", 
        "Your Song - Elton John", 
        "Stairway To Heaven - Led Zeppelin", 
        "The Twist - Chubby Checker", 
        "Live Forever - Oasis", 
        "I Will Always Love You - Whitney Houston", 
        "Life On Mars? - David Bowie", 
        "Heartbreak Hotel - Elvis Presley", 
        "Over The Rainbow - Judy Garland", 
        "What's Goin' On - Marvin Gaye", 
        "Born To Run - Bruce Springsteen", 
        "Be My Baby - The Ronettes", 
        "Creep - Radiohead", 
        "Bridge Over Troubled Water - Simon & Garfunkel", 
        "Respect - Aretha Franklin", 
        "Family Affair - Sly And The Family Stone", 
        "Dancing Queen - ABBA", 
        "Good Vibrations - The Beach Boys", 
        "Purple Haze - Jimi Hendrix", 
        "Yesterday - The Beatles",
        "Jonny B Good - Chuck Berry",
        "No Woman No Cry - Bob Marley",
        "Hallelujah - Jeff Buckley",
        "Every Breath You Take - The Police",
        "A Day In The Life - The Beatles",
        "Stand By Me - Ben E King",
        "Papa's Got A Brand New Bag - James Brown",
        "Gimme Shelter - The Rolling Stones",
        "What'd I Say - Ray Charles",
        "Sultans Of Swing - Dire Straits",
        "God Only Knows - The Beach Boys",
        "You've Lost That Lovin' Feeling - The Righteous Brothers",
        "My Generation - The Who",
        "Dancing In The Street - Martha Reeves and the Vandellas",
        "When Doves Cry - Prince",
        "A Change Is Gonna Come - Sam Cooke",
        "River Deep Mountain High - Ike and Tina Turner",
        "Best Of My Love - The Emotions"
    ];
    var displayList = "";
    var numSongs = 0;
    do {
        numSongs = prompt("How many famous songs should I list? (1 to 50)");
    } while (numSongs<1 || numSongs>50 || !Number.isInteger(+numSongs));
    for (i=0; i<numSongs; i++) {
        displayList += songList[i] + "<br>";
    }
    document.getElementById("favSongList").innerHTML = displayList;
}






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
    this.listSongs();
    setTicketButton();
    this.favSong();
    this.setBackgroundColor();
}

