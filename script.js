
// ==============================
// Saidul Gaming Vai Live Engine
// ==============================

let match = JSON.parse(localStorage.getItem("match")) || CONFIG;

// Save Data
function saveMatch() {
    localStorage.setItem("match", JSON.stringify(match));
}

// Update Screen
function updateScreen() {

    document.getElementById("homeTeam").innerText =
        match.homeTeam.name;

    document.getElementById("awayTeam").innerText =
        match.awayTeam.name;

    document.getElementById("homeLogo").src =
        match.homeTeam.logo;

    document.getElementById("awayLogo").src =
        match.awayTeam.logo;

    document.getElementById("score").innerText =
        `${match.homeTeam.score} - ${match.awayTeam.score}`;

    document.getElementById("timer").innerText =
        String(match.timer.minute).padStart(2,"0") + ":" +
        String(match.timer.second).padStart(2,"0");

    document.getElementById("commentary").innerText =
        match.commentary;

}

// Timer
setInterval(() => {

    if(match.timer.running){

        match.timer.second++;

        if(match.timer.second >= 60){

            match.timer.second = 0;
            match.timer.minute++;

        }

        saveMatch();
        updateScreen();

    }

},1000);

// First Load
updateScreen();
function showGoalPopup(player="GOAL!"){

    const popup=document.getElementById("goalPopup");

    popup.innerHTML="⚽ "+player;

    popup.classList.add("show");

    const sound=document.getElementById("goalSound");

    if(sound){
        sound.play();
    }

    setTimeout(()=>{

        popup.classList.remove("show");

    },3000);

}