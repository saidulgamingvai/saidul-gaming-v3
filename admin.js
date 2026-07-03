// ==============================
// Saidul Gaming Vai Admin Panel
// ==============================

let match = loadMatch();

// Save
function saveMatch(match);
window.dispatchEvent(new Event("storage"));
 {
    localStorage.setItem("match", JSON.stringify(match));
}

// Home Goal +
function homePlus() 
celebrateGoal();
match.goalEvent = true;
saveMatch(match);
window.dispatchEvent(new Event("storage"));
{
    match.homeTeam.score++;
    saveMatch(match);
window.dispatchEvent(new Event("storage"));;
}

// Home Goal -
function homeMinus() {
    if (match.homeTeam.score > 0) {
        match.homeTeam.score--;
        saveMatch(match);
    }
}

// Away Goal +
function awayPlus() 
celebrateGoal();
match.goalEvent = true;
saveMatch(match);
window.dispatchEvent(new Event("storage"));
{
    match.awayTeam.score++;
    saveMatch(match);
window.dispatchEvent(new Event("storage"));
}

// Away Goal -
function awayMinus() {
    if (match.awayTeam.score > 0) {
        match.awayTeam.score--;
        saveMatch(match);
window.dispatchEvent(new Event("storage"));
    }
}

// Start / Pause Timer
function toggleTimer() {
    match.timer.running = !match.timer.running;
    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert(match.timer.running ? "▶️ Timer Started" : "⏸️ Timer Paused");
}

// Save Team Name & Commentary
function saveChanges() {

    match.homeTeam.name =
        document.getElementById("homeName").value;

    match.awayTeam.name =
        document.getElementById("awayName").value;

    match.commentary =
        document.getElementById("commentary").value;

    saveMatch(match.stats.possession =
document.getElementById("possession").value;

match.stats.shots =
document.getElementById("shots").value;

match.stats.shotsTarget =
document.getElementById("shotsTarget").value;

match.stats.corners =
document.getElementById("corners").value;

match.stats.fouls =
document.getElementById("fouls").value;);

    alert("✅ Changes Saved Successfully");
}
function yellowCard(){

    match.event={
        text:"🟨 Yellow Card",
        type:"yellow"
    };

    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert("Yellow Card Sent");

}

function redCard(){

    match.event={
        text:"🟥 Red Card",
        type:"red"
    };

    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert("Red Card Sent");

}
function addGoalScorer(){

    const player = document.getElementById("goalPlayer").value;

    if(player==="") return;

    const minute = match.timer.minute;

    match.goalScorers.push(`${minute}' ⚽ ${player}`);

    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert("Goal Scorer Added");

}
match.timeline.push({

minute:match.timer.minute,

event:"⚽ Goal",

text:player

});

saveMatch(match);
window.dispatchEvent(new Event("storage"));
function addYellowCard(){

    const player = document.getElementById("yellowPlayer").value;

    if(player==="") return;

    match.timeline.push({
        minute:match.timer.minute,
        event:"🟨 Yellow Card",
        text:player
    });

    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert("Yellow Card Added");

}

function addRedCard(){

    const player = document.getElementById("redPlayer").value;

    if(player==="") return;

    match.timeline.push({
        minute:match.timer.minute,
        event:"🟥 Red Card",
        text:player
    });

    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert("Red Card Added");

}
function addSubstitution(){

    const outPlayer = document.getElementById("playerOut").value;
    const inPlayer = document.getElementById("playerIn").value;

    if(outPlayer==="" || inPlayer==="") return;

    match.timeline.push({
        minute: match.timer.minute,
        event: "🔄 Substitution",
        text: `${outPlayer} ⟶ ${inPlayer}`
    });

    saveMatch(match);
window.dispatchEvent(new Event("storage"));
    alert("Substitution Added");

}
function halfTime(){

    match.commentary = "⏸ Half Time";

    match.timeline.push({
        minute: match.timer.minute,
        event: "⏸ Half Time",
        text: ""
    });

    match.timer.running = false;

    saveMatch(match);
window.dispatchEvent(new Event("storage"));
    alert("Half Time");
}

function fullTime(){

    match.commentary = "🏆 Full Time";

    match.timeline.push({
        minute: match.timer.minute,
        event: "🏆 Full Time",
        text: ""
    });

    match.timer.running = false;

    saveMatch(match);
window.dispatchEvent(new Event("storage"));

    alert("Full Time");
}

function resetMatch(){

    localStorage.removeItem("match");

    location.reload();

}