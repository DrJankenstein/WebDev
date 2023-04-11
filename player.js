const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
const rewindButton = document.getElementById("rewindButton");
const ffButton = document.getElementById("ffButton");
var currentTitle = document.getElementById("currentTitle");
var currentArtist = document.getElementById("currentArtist");


let currentSong = 0;

const song1 = 
{
  songTitle: "Urban Trap",
  songArtist: "PlaySound- ",
  songFile: "UrbanTrap.mp3" ,
};

const song2 = 
{
  songTitle: " Retro Funk",
  songArtist: "Soul Prod Music- ",
  songFile: "RetroFunk.mp3",
};

const song3 =
{
  songTitle: "I Will Be Here",
  songArtist: "FASS Sound - ",
  songFile: "IWillBeHere.mp3",
};

const songArray = [song1, song2, song3];

var songFile = songArray[currentSong];
var songSrc = document.getElementById("songFile");

function updateSong() {
  songSrc.src = songFile.songFile;
  currentTitle.textContent = songFile.songTitle;
  currentArtist.textContent = songFile.songArtist;
  updateTimer();
}

function nextSong() 
{
  if (currentSong <= songArray.length - 2) {
    currentSong += 1;
    songFile = songArray[currentSong];
    updateSong();
    playSong()
  }
}

function prevSong() 
{
  if (currentSong > 0) {
    currentSong -= 1;
    songFile = songArray[currentSong];
    updateSong();
    playSong();
  }
}

function playSong()
{
  songSrc.play();
  updateTimer();
  console.log("Now Playing: Infurtiating Hums vol 1");
}

function stopSong() 
{  
  songSrc.pause();
  console.log("stop this shit right now");
}

function updateTimer() 
{
  var timerText = document.getElementById("timer");
  var currentTime = Math.floor(songSrc.currentTime);
  var minutes = Math.floor(currentTime / 60);
  var seconds = currentTime % 60;
  var formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  timerText.textContent = formattedTime;
}


songSrc.addEventListener("timeupdate", updateTimer);


ffButton.addEventListener("click", nextSong);
rewindButton.addEventListener("click", prevSong);
playButton.addEventListener("click", playSong);
stopButton.addEventListener("click", stopSong);

document.getElementById('volumeSlider').addEventListener('input', function(){sliderChange(this.value)});

function sliderChange(val) 
{
  var slider = document.getElementById('volumeSlider');
  var gradient = 'linear-gradient(90deg, rgb(97, 200, 117) 0%, rgb(200, 200, 0) 0%, rgb(200, 0, 0) ' + val + '%, rgb(255, 255, 0) ' + val + '%, rgb(255, 255, 0) ' + val + '%, rgb(102, 100, 100) ' + val + '%, rgb(100, 100, 100) 100%)';
  slider.style.background = gradient;
  var vol = val/100;
  songSrc.volume = vol;
}



updateSong();
