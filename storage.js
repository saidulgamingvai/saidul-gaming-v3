// ==============================
// Storage Manager
// Saidul Gaming Vai v4
// ==============================

const STORAGE_KEY = "saidul-live-score";

function loadMatch() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
        return JSON.parse(data);
    }

    return JSON.parse(JSON.stringify(CONFIG));
}

function saveMatch(match) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(match));
}

function resetMatch() {
    localStorage.removeItem(STORAGE_KEY);
}