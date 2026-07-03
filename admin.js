// ==============================
// Saidul Gaming Vai Admin Panel
// ==============================

let match = JSON.parse(localStorage.getItem("match")) || CONFIG;

// Save
function saveMatch() {
    localStorage.setItem("match", JSON.stringify(match));
}

// Home Goal +
function homePlus() {
    match.homeTeam.score++;
    saveMatch();
}

// Home Goal -
function homeMinus() {
    if (match.homeTeam.score > 0) {
        match.homeTeam.score--;
        saveMatch();
    }
}

// Away Goal +
function awayPlus() {
    match.awayTeam.score++;
    saveMatch();
}

// Away Goal -
function awayMinus() {
    if (match.awayTeam.score > 0) {
        match.awayTeam.score--;
        saveMatch();
    }
}

// Start / Pause Timer
function toggleTimer() {
    match.timer.running = !match.timer.running;
    saveMatch();

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

    saveMatch();

    alert("✅ Changes Saved Successfully");
}
