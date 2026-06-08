var games = [
    {name: "Flappy Bird", path: "games/flappybird/index.html"},
    {name: "2048", path: "games/2048/index.html"},
    {name: "Snake", path: "games/snake/index.html"},
    {name: "Pac-Man", path: "games/pacman/index.html"},
    {name: "Tetris", path: "games/tetris/index.html"},
    {name: "Pong", path: "games/pong/index.html"},
    {name: "Space Invaders", path: "games/spaceinvaders/index.html"},
    {name: "Breakout", path: "games/breakout/index.html"},
    {name: "Dino Runner", path: "games/dino/index.html"},
    {name: "Tic Tac Toe", path: "games/tictactoe/index.html"},
    {name: "Memory Game", path: "games/memorygame/index.html"}
];

var glist = document.getElementById("gameslist");


for (let item of games) {
    let a = document.createElement("a");
    a.className = "gamebutton";
    var title = document.createElement("gamebutton");
    title.className = "gamebutton";
    title.textContent = item.name;
    a.appendChild(title);
    a.href = "#";
    a.onclick = function(e) {
        if (e.target == a || e.target.tagName != "A") {
            e.preventDefault();
            loadGame(item.path)
        }
    }

    glist.appendChild(a);
}

function loadGame(path) {
    var button = document.getElementById('button');
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button_closegame = document.getElementById('button_closegame');
    var button_fullscreengame = document.getElementById('button_fullscreengame');
    var gameWindow = document.getElementById('gamewindow');
    button.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button_closegame.style.display = 'initial';
    button_fullscreengame.style.display = 'initial';
    gameWindow.setAttribute('src', path);
    gameWindow.style.display = 'initial';
}

function closeGame() {
    var button_closegame = document.getElementById('button_closegame');
    var button_fullscreengame = document.getElementById('button_fullscreengame');
    var button = document.getElementById('button');
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var gameWindow = document.getElementById('gamewindow');
    button_closegame.style.display = 'none';
    button_fullscreengame.style.display = 'none';
    button.style.display = 'initial';
    button1.style.display = 'initial';
    button2.style.display = 'initial';
    button3.style.display = 'initial';
    gameWindow.style.display = 'none';
    gameWindow.removeAttribute('src');
}

function fullscreenGame() {
    var gameWindow = document.getElementById('gamewindow');
    gameWindow.requestFullscreen();
}