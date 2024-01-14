console.log("Welcome to Tic Tac Toe")

let bgmusic = new Audio("music.mp3")
let turnmusic = new Audio("ting.mp3")
let gameovermusic = new Audio("gameover.mp3")

let gameover = false

let turn = "X"

// function to change the turn [X TO 0 & 0 to X]
const changeturn = () => {

    return turn === "X" ? "0" : "X"
}

// fuction to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "16vw"
        }
    })
}


// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeturn();
            turnmusic.play();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " +  turn;
            } 
        }
    })
})