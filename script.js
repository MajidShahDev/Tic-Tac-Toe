let checkbox = document.querySelectorAll('.checkbox');
let header = document.querySelector('#header');
let reset = document.querySelector('#reset');
let start = document.querySelector('#start');

let moveCount = 0;
let player1wins = 0;
let player2wins = 0;

let p1wins = document.querySelector('#p1wins');
let p2wins = document.querySelector('#p2wins');
p1wins.innerHTML = player1wins;
p2wins.innerHTML = player2wins;

let indicatorX = document.getElementById("img-1");
let indicatorO = document.getElementById("img-2");
// indicatorO.style.visibility = "visible";
// indicatorX.style.visibility = "hidden";

let clickAudio = new Audio('music/click.wav')
let winAudio = new Audio('music/win.wav');
let drawAudio = new Audio('music/draw.wav');
let startAudio = new Audio('music/start.wav');
let resetAudio = new Audio('music/reset.mp3');



const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disabledBtns = () => {
    for (let box of checkbox) {
        box.disabled = true;
    }
}



const enabledBtns = () => {
    for (let box of checkbox) {
        box.disabled = false;
        box.innerHTML = '';
    }
}



const checkWinner = () => {
    for (pattern of patterns) {
        let pos1 = checkbox[pattern[0]].innerText;
        let pos2 = checkbox[pattern[1]].innerText;
        let pos3 = checkbox[pattern[2]].innerText;

        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                winAudio.play();
                header.innerHTML = `${pos1} wins the game`;
                disabledBtns();
                pattern.forEach(ele => {
                    if (pos1 === 'X') {
                        checkbox[ele].style.color = "hsl(120, 100%, 30%)";
                        header.style.backgroundColor = "hsl(120, 100%, 40%)";
                        indicatorX.style.visibility = "visible";
                        indicatorO.style.visibility = "hidden";

                    } else {
                        checkbox[ele].style.color = "hsl(0, 100%, 40%)";
                        header.style.backgroundColor = "hsl(0, 100%, 50%)";
                        indicatorO.style.visibility = "visible";
                        indicatorX.style.visibility = "hidden";
                    }
                });
                if (pos1 === 'X') {
                    p1wins.innerHTML = ++player1wins;
                } else {
                    p2wins.innerHTML = ++player2wins;
                }
                return true; // winner is found`
            }
        }

    }
    if (moveCount === 9) {
        header.innerHTML = `Game Draw`;
        header.style.backgroundColor = "hsl(0, 0%, 35%)";
        disabledBtns();
        drawAudio.play();
        indicatorX.style.visibility = "hidden";
        indicatorO.style.visibility = "hidden";

    }
    return false; // winner is not found
}





let turn_O = true;
checkbox.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === "") {
            if (turn_O) {
                box.innerHTML = 'O';
                turn_O = false;
                resetAudio.pause();
                clickAudio.currentTime = 0;
                clickAudio.play();
                indicatorO.style.visibility = "hidden";
                indicatorX.style.visibility = "visible";
            } else {
                box.innerHTML = 'X';
                turn_O = true;
                resetAudio.pause();
                clickAudio.currentTime = 0;
                clickAudio.play();
                indicatorX.style.visibility = "hidden";
                indicatorO.style.visibility = "visible";
            }
        }
        moveCount++;
        checkWinner();
    });
});



reset.addEventListener("click", () => {
    enabledBtns();
    moveCount = 0;
    turn_0 = true;
    clickAudio.currentTime = 0;
    resetAudio.currentTime = 0;
    resetAudio.play();
    indicatorO.style.visibility = "visible";
    indicatorX.style.visibility = "hidden";
    header.innerHTML = "Tic Tac Toe Game";
    header.style.backgroundColor = "hsl(30, 100%, 50%)";
    for (box of checkbox) {
        box.style.color = 'hsl(0, 0%, 10%)';
    }
});



start.addEventListener("click", () => {
    enabledBtns();
    moveCount = 0;
    startAudio.play();
    // player1wins = 0;
    p1wins.innerHTML = player1wins = 0;
    // player2wins = 0;
    p2wins.innerHTML = player2wins = 0;
    turn_0 = true;
    indicatorO.style.visibility = "visible";
    indicatorX.style.visibility = "hidden";
    header.innerHTML = "Tic Tac Toe Game";
    header.style.backgroundColor = "hsl(30, 100%, 50%)";
    for (box of checkbox) {
        box.style.color = 'hsl(0, 0%, 10%)';
    }
})












// var player1 = "";
// var player2 = "";
// var player1Wins = 0;
// var player2Wins = 0;
// var moveCount = 0;
// var p1wins = document.getElementById("p1wins");
// var p2wins = document.getElementById("p2wins");
// var btn_1 = document.getElementById("checkbox-1");
// var btn_2 = document.getElementById("checkbox-2");
// var btn_3 = document.getElementById("checkbox-3");
// var btn_4 = document.getElementById("checkbox-4");
// var btn_5 = document.getElementById("checkbox-5");
// var btn_6 = document.getElementById("checkbox-6");
// var btn_7 = document.getElementById("checkbox-7");
// var btn_8 = document.getElementById("checkbox-8");
// var btn_9 = document.getElementById("checkbox-9");
// var header = document.getElementById("header");
// // var o_win = document.getElementById("header");
// var indicatorX = document.getElementById("img-1");
// var indicatorO = document.getElementById("img-2");

// // indicatorX.style.visibility = "hidden";
// indicatorO.style.visibility = "hidden";

// function startGame() {
//     player1 = prompt('Enter Player 1 Name ');
//     player2 = prompt('Enter Player 2 Name ');
//     if (player1 != null && player2 != null) {
//         player1Wins = 0;
//         player2Wins = 0;
//         moveCount = 0;
//         document.getElementById('p1').innerHTML = player1;
//         document.getElementById('p2').innerHTML = player2;
//         document.getElementById('p1wins').innerHTML = player1Wins;
//         document.getElementById('p2wins').innerHTML = player2Wins;
//         swtich_game_buttons_state(false);
//         document.getElementById("header").innerHTML = "Tic Tac Toe Game";
//         header.style.backgroundColor = "hsl(30, 100%, 50%)";

//         btn_1.innerHTML = "";
//         btn_2.innerHTML = "";
//         btn_3.innerHTML = "";
//         btn_4.innerHTML = "";
//         btn_5.innerHTML = "";
//         btn_6.innerHTML = "";
//         btn_7.innerHTML = "";
//         btn_8.innerHTML = "";
//         btn_9.innerHTML = "";

//         btn_1.style.color = "hsl(0, 0%, 10%)";
//         btn_2.style.color = "hsl(0, 0%, 10%)";
//         btn_3.style.color = "hsl(0, 0%, 10%)";
//         btn_4.style.color = "hsl(0, 0%, 10%)";
//         btn_5.style.color = "hsl(0, 0%, 10%)";
//         btn_6.style.color = "hsl(0, 0%, 10%)";
//         btn_7.style.color = "hsl(0, 0%, 10%)";
//         btn_8.style.color = "hsl(0, 0%, 10%)";
//         btn_9.style.color = "hsl(0, 0%, 10%)";

//     }
// }

// function resetGame() {
//     moveCount = 0;
//     btn_1.innerHTML = "";
//     btn_2.innerHTML = "";
//     btn_3.innerHTML = "";
//     btn_4.innerHTML = "";
//     btn_5.innerHTML = "";
//     btn_6.innerHTML = "";
//     btn_7.innerHTML = "";
//     btn_8.innerHTML = "";
//     btn_9.innerHTML = "";

//     btn_1.style.color = "hsl(0, 0%, 10%)";
//     btn_2.style.color = "hsl(0, 0%, 10%)";
//     btn_3.style.color = "hsl(0, 0%, 10%)";
//     btn_4.style.color = "hsl(0, 0%, 10%)";
//     btn_5.style.color = "hsl(0, 0%, 10%)";
//     btn_6.style.color = "hsl(0, 0%, 10%)";
//     btn_7.style.color = "hsl(0, 0%, 10%)";
//     btn_8.style.color = "hsl(0, 0%, 10%)";
//     btn_9.style.color = "hsl(0, 0%, 10%)";

//     swtich_game_buttons_state(false);
//     document.getElementById("header").innerHTML = "Tic Tac Toe Game";
//     header.style.backgroundColor = "hsl(30, 100%, 50%)";

// }

// function swtich_game_buttons_state(switch_type) {
//     for (var i = 1; i <= 9; i++) {
//         document.getElementById('checkbox-' + i).disabled = switch_type;
//     }
// }

// function gameInput(btnId) {
//     moveCount++;
//     if (moveCount % 2 == 0) {
//         document.getElementById("checkbox-" + btnId).innerHTML = "O";
//         indicatorX.style.visibility = "visible";
//         indicatorO.style.visibility = "hidden";
//         document.getElementById("checkbox-" + btnId).disabled = true;
//     } else {
//         document.getElementById("checkbox-" + btnId).innerHTML = "X";
//         indicatorO.style.visibility = "visible";
//         indicatorX.style.visibility = "hidden";
//         document.getElementById("checkbox-" + btnId).disabled = true;
//     }
//     if (moveCount >= 5) {
//         winCheck();
//     }



//     if (moveCount >= 9 && !winCheck()) {
//         header.innerHTML = "Game Draw!";
//         header.style.backgroundColor = "hsl(0, 0%, 35%)";
//     }

// }

// // function win_x() {
// //     p1wins.innerHTML = ++player1Wins;
// //     swtich_game_buttons_state(true);
// //     header.innerHTML = "X wins the game";
// //     header.style.backgroundColor = "hsl(120, 100%, 40%)";
// //     indicatorO.style.visibility = "hidden";
// //     indicatorX.style.visibility = "hidden";
// // }

// // function win_o() {
// //     p2wins.innerHTML = ++player2Wins;
// //     swtich_game_buttons_state(true);
// //     header.innerHTML = "0 wins the game"
// //     header.style.backgroundColor = "hsl(0, 100%, 50%)";
// //     indicatorO.style.visibility = "hidden";
// //     indicatorX.style.visibility = "hidden";
// // }






// function winCheck() {
//     //x-win check start here
//     if (btn_1.innerHTML == "X" && btn_2.innerHTML == "X" && btn_3.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_1.style.color = "hsl(120, 100%, 30%)";
//         btn_2.style.color = "hsl(120, 100%, 30%)";
//         btn_3.style.color = "hsl(120, 100%, 30%)";


//     }

//     if (btn_4.innerHTML == "X" && btn_5.innerHTML == "X" && btn_6.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_4.style.color = "hsl(120, 100%, 30%)";
//         btn_5.style.color = "hsl(120, 100%, 30%)";
//         btn_6.style.color = "hsl(120, 100%, 30%)";
//     }

//     if (btn_7.innerHTML == "X" && btn_8.innerHTML == "X" && btn_9.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_7.style.color = "hsl(120, 100%, 30%)";
//         btn_8.style.color = "hsl(120, 100%, 30%)";
//         btn_9.style.color = "hsl(120, 100%, 30%)";
//     }

//     if (btn_1.innerHTML == "X" && btn_4.innerHTML == "X" && btn_7.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_1.style.color = "hsl(120, 100%, 30%)";
//         btn_4.style.color = "hsl(120, 100%, 30%)";
//         btn_7.style.color = "hsl(120, 100%, 30%)";
//     }

//     if (btn_2.innerHTML == "X" && btn_5.innerHTML == "X" && btn_8.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_2.style.color = "hsl(120, 100%, 30%)";
//         btn_5.style.color = "hsl(120, 100%, 30%)";
//         btn_8.style.color = "hsl(120, 100%, 30%)";
//     }

//     if (btn_3.innerHTML == "X" && btn_6.innerHTML == "X" && btn_9.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_3.style.color = "hsl(120, 100%, 30%)";
//         btn_6.style.color = "hsl(120, 100%, 30%)";
//         btn_9.style.color = "hsl(120, 100%, 30%)";
//     }

//     if (btn_1.innerHTML == "X" && btn_5.innerHTML == "X" && btn_9.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_1.style.color = "hsl(120, 100%, 30%)";
//         btn_5.style.color = "hsl(120, 100%, 30%)";
//         btn_9.style.color = "hsl(120, 100%, 30%)";
//     }

//     if (btn_3.innerHTML == "X" && btn_5.innerHTML == "X" && btn_7.innerHTML == "X") {
//         p1wins.innerHTML = ++player1Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "X wins the game";
//         header.style.backgroundColor = "hsl(120, 100%, 40%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_3.style.color = "hsl(120, 100%, 30%)";
//         btn_5.style.color = "hsl(120, 100%, 30%)";
//         btn_7.style.color = "hsl(120, 100%, 30%)";
//     }

//     // 0-win check start here

//     if (btn_1.innerHTML == "O" && btn_2.innerHTML == "O" && btn_3.innerHTML == "O") {
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "0 wins the game"
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_1.style.color = "hsl(0, 100%, 40%)";
//         btn_2.style.color = "hsl(0, 100%, 40%)";
//         btn_3.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_4.innerHTML == "O" && btn_5.innerHTML == "O" && btn_6.innerHTML == "O") {
//         header.innerHTML = "0 wins the game"
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_4.style.color = "hsl(0, 100%, 40%)";
//         btn_5.style.color = "hsl(0, 100%, 40%)";
//         btn_6.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_7.innerHTML == "O" && btn_8.innerHTML == "O" && btn_9.innerHTML == "O") {
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "0 wins the game"
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_7.style.color = "hsl(0, 100%, 40%)";
//         btn_8.style.color = "hsl(0, 100%, 40%)";
//         btn_9.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_1.innerHTML == "O" && btn_4.innerHTML == "O" && btn_7.innerHTML == "O") {
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "0 wins the game"
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_1.style.color = "hsl(0, 100%, 40%)";
//         btn_4.style.color = "hsl(0, 100%, 40%)";
//         btn_7.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_2.innerHTML == "O" && btn_5.innerHTML == "O" && btn_8.innerHTML == "O") {
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "0 wins the game"
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_2.style.color = "hsl(0, 100%, 40%)";
//         btn_5.style.color = "hsl(0, 100%, 40%)";
//         btn_8.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_3.innerHTML == "O" && btn_6.innerHTML == "O" && btn_9.innerHTML == "O") {
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "0 wins the game"
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_3.style.color = "hsl(0, 100%, 40%)";
//         btn_6.style.color = "hsl(0, 100%, 40%)";
//         btn_9.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_1.innerHTML == "O" && btn_5.innerHTML == "O" && btn_9.innerHTML == "O") {
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.innerHTML = "0 wins the game"
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_1.style.color = "hsl(0, 100%, 40%)";
//         btn_5.style.color = "hsl(0, 100%, 40%)";
//         btn_9.style.color = "hsl(0, 100%, 40%)";
//     }

//     if (btn_3.innerHTML == "O" && btn_5.innerHTML == "O" && btn_7.innerHTML == "O") {
//         header.innerHTML = "0 wins the game"
//         p2wins.innerHTML = ++player2Wins;
//         swtich_game_buttons_state(true);
//         header.style.backgroundColor = "hsl(0, 100%, 50%)";
//         indicatorO.style.visibility = "hidden";
//         indicatorX.style.visibility = "hidden";
//         btn_3.style.color = "hsl(0, 100%, 40%)";
//         btn_5.style.color = "hsl(0, 100%, 40%)";
//         btn_7.style.color = "hsl(0, 100%, 40%)";


//     }
// }

