// ======================================
// Saidul Gaming Vai Live Score Studio
// Version 3.0
// ======================================

const CONFIG = {

    appName: "Saidul Gaming Vai",

    tournament: "FIFA World Cup 2026",

    homeTeam: {
        name: "Argentina",
        logo: "assets/teams/argentina.png",
        score: 0
    },

    awayTeam: {
        name: "Brazil",
        logo: "assets/teams/brazil.png",
        score: 0
    },

    timer: {
        minute: 0,
        second: 0,
        running: false
    },

    commentary: "Welcome to Saidul Gaming Vai Live Score.",

    goalScorers: [],
timeline:[]
    stats:{
    possession:"50% - 50%",
    shots:"0 - 0",
    shotsTarget:"0 - 0",
    corners:"0 - 0",
    fouls:"0 - 0"
},

    background: "assets/video/bg.mp4",

    sounds: {
        goal: "assets/audio/goal.mp3",
        whistle: "assets/audio/whistle.mp3"
    }

};