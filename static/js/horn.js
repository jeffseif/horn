var SOUNDS = {
    'dj': 'dj_airhorn',
    'flute': 'zelda_recorder',
    'get': 'zelda_get',
    'secret': 'zelda_secret',
}

function playSound(name) {
    var audio = document.getElementById('audio');
    audio.src = './static/mp3/' + SOUNDS[name] + '.mp3';
    audio.play();
}

function htmlControlForName(name) {
    return `<button onclick='playSound("${name}");'>${name}</button>\n`;
}

function insertHTML() {
    var controls = document.getElementById('controls');

    var html = '';
    for(var name in SOUNDS) {
        html += htmlControlForName(name);
    }

    controls.innerHTML = html;
}

window.onload = insertHTML;
