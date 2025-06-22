const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const progressBar = document.getElementById('progress-bar');
const timeDisplay = document.getElementById('time-display');
const volumeBar = document.getElementById('volume-bar');
const fullscreenBtn = document.getElementById('fullscreen-btn');

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}
function updatePlayPauseIcon() {
    if (video.paused || video.ended) {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    }
}
function updateProgress() {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    progressBar.value = progressPercentage;
    const totalSeconds = Math.floor(video.duration);
    const currentSeconds = Math.floor(video.currentTime);
    timeDisplay.textContent = $;{formatTime(currentSeconds)}  $;{formatTime(totalSeconds)};
}
function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00'; 
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return $;{String(minutes).padStart(2, '0')}$;{String(remainingSeconds).padStart(2, '0')};
}
function scrub(e) {
    const scrubTime = (e.target.value / 100) * video.duration;
    video.currentTime = scrubTime;
}
function changeVolume() {
   
    video.volume = volumeBar.value / 100;
}
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch(err => {
            alert(Error ,enabling, full-screen ,mode ,{errmessage} ($,{errname}));
        });
    } else {
        document.exitFullscreen();
    }
}
playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);
video.addEventListener('play', updatePlayPauseIcon);
video.addEventListener('pause', updatePlayPauseIcon);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('loadedmetadata', updateProgress);
progressBar.addEventListener('input', scrub);
volumeBar.addEventListener('input', changeVolume);
fullscreenBtn.addEventListener('click', toggleFullscreen);