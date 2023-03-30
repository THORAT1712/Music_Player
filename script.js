const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const preBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Songs titles
const songs = ['AgaNaga','HappyTogether','GOT'];

// Keep Track of Songs
let songIndex = 0

// Initially load song info DOm
loadSong(songs[songIndex])

// Update the song details
function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mpeg`
    cover.src = `images/${song}.jpeg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}


// Event Listeners
playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    }
    else {
        playSong()
    }
})
