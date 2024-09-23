function toggleMusic() {
    var audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
alert("नीचे दिए गए संगीत के चिन्ह को टच करें।")
