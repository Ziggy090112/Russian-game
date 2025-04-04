document.addEventListener("DOMContentLoaded", () => {
    let bulletPosition = Math.floor(Math.random() * 6);
    let currentTurn = 1;
    let p1Score = 0;
    let p2Score = 0;

    const gameText = document.getElementById("game-text");
    const outcome = document.getElementById("outcome");
    const p1ScoreText = document.getElementById("p1-score");
    const p2ScoreText = document.getElementById("p2-score");

    document.getElementById("shootSelf").addEventListener("click", () => {
        if (bulletPosition === 0) {
            outcome.innerHTML = `💀 Player ${currentTurn} pulled the trigger... BOOM! RIP! ☠️`;
            resetGame();
        } else {
            outcome.innerHTML = `😅 Player ${currentTurn} got lucky! Just a *click*...`;
            bulletPosition--;
            switchTurn();
        }
    });

    document.getElementById("shootOther").addEventListener("click", () => {
        if (bulletPosition === 0) {
            outcome.innerHTML = `💀 Player ${currentTurn} shot the other player! Savage! ☠️`;
            currentTurn === 1 ? p1Score++ : p2Score++;
            updateScore();
            resetGame();
        } else {
            outcome.innerHTML = `🤡 Player ${currentTurn} fired at the other player... but nothing happened! Embarrassing...`;
            bulletPosition--;
            switchTurn();
        }
    });

    document.getElementById("spinChamber").addEventListener("click", () => {
        bulletPosition = Math.floor(Math.random() * 6);
        outcome.innerHTML = `🔄 Player ${currentTurn} spins the chamber... Feeling lucky?`;
        switchTurn();
    });

    function switchTurn() {
        currentTurn = currentTurn === 1 ? 2 : 1;
        gameText.innerHTML = `Player ${currentTurn}'s turn! Will you survive? 😨`;
    }

    function updateScore() {
        p1ScoreText.innerHTML = p1Score;
        p2ScoreText.innerHTML = p2Score;
    }

    function resetGame() {
        bulletPosition = Math.floor(Math.random() * 6);
        outcome.innerHTML += `<br>🔁 Game resets! New round starts...`;
        currentTurn = 1;
        gameText.innerHTML = `Player 1's turn! Spin the chamber and take your chances...`;
    }
});
