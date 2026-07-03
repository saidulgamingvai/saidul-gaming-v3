
// ==============================
// Saidul Gaming Vai Live Engine
// ==============================

let match = JSON.parse(localStorage.getItem("match")) || CONFIG;

// Save Data
function saveMatch() {
    localStorage.setItem("match", JSON.stringify(match));
}

// Update Screen
const timeline=document.getElementById("timeline");

if(timeline){

if(match.timeline.length===0){

timeline.innerHTML="No Events Yet";

}else{

timeline.innerHTML="";

match.timeline.forEach(item=>{

timeline.innerHTML+=`
<div class="timeline-item">

${item.minute}' ${item.event} - ${item.text}

</div>
`;

});

}

}
document.getElementById("possession").innerText =
match.stats.possession;

document.getElementById("shots").innerText =
match.stats.shots;

document.getElementById("shotsTarget").innerText =
match.stats.shotsTarget;

document.getElementById("corners").innerText =
match.stats.corners;

document.getElementById("fouls").innerText =
match.stats.fouls;
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
const goalList = document.getElementById("goalScorers");

if(goalList){

    if(match.goalScorers.length===0){

        goalList.innerHTML="No Goals";

    }else{

        goalList.innerHTML = match.goalScorers.join("<br>");

    }

}
const ticker = document.getElementById("tickerText");

if (ticker) {
    ticker.innerText = match.commentary;
}
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
function showEvent(text,type){

    const popup=document.getElementById("eventPopup");

    popup.innerHTML=text;

    popup.className=type;

    popup.style.display="block";

    setTimeout(()=>{

        popup.style.display="none";

    },2500);

}