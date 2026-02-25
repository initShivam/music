console.log("Welcome To Music World");
//variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let gift = document.getElementById('gift');
let mastersongname = document.getElementById("mastersongname");
let songItems = Array.from(document.getElementsByClassName("songItem"));
// let searchEle = document.getElementById("search")


let songs = [
    { songName: "Tumsa Koi Pyaara", filePath: "song/1.mp3", coverPath: "covers/cover-1.jpg" },
    { songName: "Kissi Se Tum Pyaar Kero", filePath: "song/2.mp3", coverPath: "covers/cover-2.jpg" },
    { songName: "Dil Hai Ke Manta Nahin", filePath: "song/3.mp3", coverPath: "covers/cover-3.jpg" },
    { songName: "Teri Chunariya Dil Legayi", filePath: "song/4.mp3", coverPath: "covers/cover-5.jpg" },
    { songName: "Shikwa Nahin Kisi Se", filePath: "song/5.mp3", coverPath: "covers/cover-6.jpg" },
    { songName: "Tere Ishq Mein Naachenge", filePath: "song/6.mp3", coverPath: "covers/cover-7.jpg" },
    { songName: "Ek Rishta-Ek Dil Hai", filePath: "song/7.mp3", coverPath: "covers/cover-8.jpg" },
]

function handleChange(element){
    var searchQuery = searchEle.value
    console.log(songs.filter(item=> item.songName.includes(searchQuery)))
}
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})
console.log("Welcome To Music World");


// audioElement.play;
// handel play/paus click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gift.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gift.style.opacity = 0;
    }
})
//LISTERN EVENTS
audioElement.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    //update seek
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    })
})
const makeALLPlays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gift.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.querySelector(".container").style.backgroundImage = `url(/covers/cover-${songIndex + 1}.jpg)`
    })
})
document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('checkbox').addEventListener('click',()=>{
    style.backgroundcolor = "red"
})


// Function to play next song
const playNextSong = () => {
    if (songIndex >= songs.length - 1) {
        // If it's the last song, reset to the first song
        songIndex = 0;
    } else {
        // Otherwise, move to the next song
        songIndex++;
    }
    playSong();
};

// Function to play the current song
const playSong = () => {
    audioElement.src = songs[songIndex].filePath;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.querySelector(".container").style.backgroundImage = `url(${songs[songIndex].coverPath})`;
};

// Event listener for when the song ends
audioElement.addEventListener('ended', () => {
    playNextSong();
});

// Event listener for the next button
document.getElementById("next").addEventListener('click', () => {
    playNextSong();
});

// Event listener for the previous button
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex--;
    }
    playSong();
});

// Initially play the first song
playSong();



