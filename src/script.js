function buttonEscape() {
    const button = document.getElementById('btn');

    const windowWidth = window.innerWidth;  
    const windowHeight = window.innerHeight;

    const maxX = windowWidth - button.offsetWidth;
    const maxY = windowHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function giftShows() {
    setTimeout(() => {
        document.getElementById('gift').style.visibility = 'visible';
        document.getElementById('gift-icon').style.visibility = 'visible';
        document.getElementById('btn').style.visibility = 'hidden';
    }, 15000)
}

function videoGifShows() {
    document.getElementById('video-gif').style.display = 'flex';
    document.getElementById('gift').style.visibility = 'hidden';


    setTimeout(() => {
        document.getElementById('back-button').style.display = 'flex';
    }, 8000)
}

function refreshPage() {
    window.location.reload();
}