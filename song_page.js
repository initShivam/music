console.log("hello world")
let songIndex = 1;
let audioElement = new Audio('song_song_page/1.mp3');
let newSong = document.getElementById("new");
let masterPlay = document.getElementById("masterPlay");
let songItems = Array.from(document.getElementsByClassName("song-card"));
let mastersongname= document.getElementById("mastersongname");
let gift = document.getElementById('gift');
let myProgressBar = document.getElementById("myprogressbar");


let Gana = [
    { song: "Ankhon Ki Gustakhiya", filePath: "song_song_page/1.mp3", coverPath: "song_covers/1.jpg" },
    { song: "Der Na Hojaye", filePath: "song_song_page/2.mp3", coverPath: "song_covers/2.jpg" },
    { song: "Dil Ne Ye Kaha Hai Dil Se", filePath: "song_song_page/3.mp3", coverPath: "song_covers/3.jpg" },
    { song: "Hum Yaar Hai Tumahare", filePath: "song_song_page/4.mp3", coverPath: "song_covers/4.jpg" },
    { song: "Jawan Umar Hai Haseen", filePath: "song_song_page/5.mp3", coverPath: "song_covers/5.jpg" },
    { song: "Khal Nayak", filePath: "song_song_page/6.mp3", coverPath: "song_covers/6.jpg" },
    { song: "Najar Ke Samne", filePath: "song_song_page/7.mp3", coverPath: "song_covers/7.jpg" },
    { song: "Nele Nele Aambar Par", filePath: "song_song_page/8.mp3", coverPath: "song_covers/8.jpg" },
    { song: "Pehla Nasha", filePath: "song_song_page/9.mp3", coverPath: "song_covers/9.jpg" },
    { song: "Tu Meri Jindagi", filePath: "song_song_page/10.mp3", coverPath: "song_covers/10.jpg" },
    { song: "Oo Sathi Re", filePath: "song_song_page/11.mp3", coverPath: "song_covers/11.jpg" },
    { song: "Tuje Yaad Na Meri Aaye", filePath: "song_song_page/12.mp3", coverPath: "song_covers/12.jpg" },
    { song: "Pehla Nasha", filePath: "song_song_page/13.mp3", coverPath: "song_covers/13.jpg" },
    { song: "Sathiya", filePath: "song_song_page/14.mp3", coverPath: "song_covers/14.jpg" },
    { song: "Main Jahaan rahoon", filePath: "song_song_page/15.mp3", coverPath: "song_covers/15.jpg" },
    { song: "Likhe Jo Khat Tujhe", filePath: "song_song_page/16.mp3", coverPath: "song_covers/16.jpg" },
    { song: "Ye Rog Purana", filePath: "song_song_page/17.mp3", coverPath: "song_covers/17.jpg" },
    { song: "Jeevan ke Din Chhote", filePath: "song_song_page/18.mp3", coverPath: "song_covers/18.jpg" },
    { song: "Zandagi Pyar Ka Geet Hai", filePath: "song_song_page/19.mp3", coverPath: "song_covers/19.jpg" },
    { song: "Pyar Hamara Amar Rahe", filePath: "song_song_page/20.mp3", coverPath: "song_covers/20.jpg" },
    { song: "Ajeeb Dastan Hai Yeh", filePath: "song_song_page/21.mp3", coverPath: "song_covers/21.jpg" },
    { song: "Ek Mulaqat Zaruri Hai Sanam", filePath: "song_song_page/22.mp3", coverPath: "song_covers/22.jpg" },
    { song: "Jab Hum Jawa Honge", filePath: "song_song_page/23.mp3", coverPath: "song_covers/23.jpg" },
    { song: "Ye Parda Hata Do", filePath: "song_song_page/24.mp3", coverPath: "song_covers/24.jpg" },
    { song: "Kash Mera Dil Bhi ", filePath: "song_song_page/25.mp3", coverPath: "song_covers/25.jpg" },
    { song: "Bhul Gaya Sab Kuch", filePath: "song_song_page/26.mp3", coverPath: "song_covers/26.jpg" },
    { song: "January Febuary", filePath: "song_song_page/27.mp3", coverPath: "song_covers/27.jpg" },
    { song: "Jiska Muje Tha Intezar", filePath: "song_song_page/28.mp3", coverPath: "song_covers/28.jpg" },
    { song: "Kya Khoob Lagti Ho", filePath: "song_song_page/29.mp3", coverPath: "song_covers/29.jpg" },
    { song: "Akele-Hain-Chale-Aao", filePath: "song_song_page/30.mp3", coverPath: "song_covers/30.jpg" },
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = Gana[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = Gana[i].song;

})

//play and pause event
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
//time change event
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



const playSong =(id)=>{
    // audioElement.src = `song_song_page/${songIndex+1}.mp3`;
    audioElement.src = `song_song_page/${id}.mp3`;
    mastersongname.innerText = Gana[id-1].song;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gift.style.opacity = 1;
    }
    else {
        audioElement.pause()
        gift.style.opacity = 0;

    }
    
}

const makeALLPlays = () => {

    Array.from(document.getElementsByClassName("song-card")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        console.log("chal raha hai")
         })

    Array.from(document.getElementsByClassName("song-card")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src = `song_song_page/${songIndex + 1}.mp3`;
        audioElement.src = `song_song_page/${id + 1}.mp3`;
        mastersongname.innerText = Gana[songIndex].song;
        audioElement.currentTime = 0;
        audioElement.play();
        gift.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log("chal raha hai")
    })
})
  

}
//for going on next song
document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 30) {
        songIndex = 1
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song_song_page/${songIndex+1}.mp3`;
    // audioElement.src = `song_song_page/${id + 1}.mp3`;
    mastersongname.innerText = Gana[songIndex].song;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
//for going on previous song
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 1
    }
    else {
        songIndex = 0;
    }
    audioElement.src = `song_song_page/${songIndex+1}.mp3`;
    // audioElement.src = `song_song_page/${id + 1}.mp3`;
    mastersongname.innerText = Gana[songIndex].song;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
console.log("Work Done")