function generateconfetti() {
    var animateConfetti = document.getElementById('confetti')
    for (let i = 0; i < 100; i++) {
        var conffetiPiece = document.createElement('div')
        conffetiPiece.classList.add('confetti');
        conffetiPiece.style.left = `${Math.random() * 100}%`
        conffetiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`
        animateConfetti.appendChild(conffetiPiece)
    }
}

function showMessage() {
    generateconfetti();
    setTimeout(() => {
        playAudio()
    }, 3500)
}


function playAudio() {
    var audio = document.getElementById("celebrationAudio");
    audio.play();
}