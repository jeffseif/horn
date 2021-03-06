
// Constants

var SOUNDS = {
    "astley": "give_you_up",
    "cooking": "cooking",
    "chaching": "chaching",
    "dj": "dj_airhorn",
    "epic": "epic",
    "flute": "zelda_recorder",
    "get": "zelda_get",
    "howard": "dean_scream",
    "riverside": "riverside",
    "scratch": "scratch",
    "secret": "zelda_secret",
    "whip": "whip",
    "wilhelm": "wilhelm_scream"
};
var LOOP = false;

// Functions

function playSound(name) {
    var audio = document.getElementById('audio');
    audio.src = './static/mp3/' + SOUNDS[name] + '.mp3';
    audio.play();
}

function htmlControlForName(name) {
    return `<div onclick='playSound("${name}");'>${name}</div>\n`;
}

function insertHTML() {
    var controls = document.getElementById('controls');

    var html = '';
    for(var name in SOUNDS) {
        html += htmlControlForName(name);
    }

    controls.innerHTML = html;
}

function toggleLoop() {
    var audio = document.getElementById('audio');
    audio.loop = LOOP = !LOOP;
}

// Main

window.onload = insertHTML;
