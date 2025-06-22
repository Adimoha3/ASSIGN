document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('audio-element');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const rewindBtn = document.getElementById('rewind-btn');
    const forwardBtn = document.getElementById('forward-btn');
    const seekBar = document.getElementById('seek-bar');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');
    const trackTitle = document.getElementById('track-title');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-image');

   
    if (!audioElement || !playPauseBtn || !rewindBtn || !forwardBtn || !seekBar || !currentTimeSpan || !durationSpan || !trackTitle || !artistName || !artistImage) {
        console.error("Error: One or more essential HTML elements for the audio player are missing. Check your HTML file for correct IDs.");
        return; 
    }

    const playPauseIcon = playPauseBtn.querySelector('i');
    if (!playPauseIcon) {
        console.error("Error: The play/pause icon (<i> tag) is missing inside the play/pause button.");
        return;
    }

    const track = {
        title: "Gang_Baby",
        artist: "NLE_Choppa",
        imagePath: "mukul-kumar-oWfo8H7wvWo-unsplash.jpg", 
        audioPath: "NLE_Choppa_-_Gang_Baby.mp3" 
    };

    let isPlaying = false;

    function loadTrack(track) {
        trackTitle.textContent = track.title;
        artistName.textContent = track.artist;
        artistImage.src = track.imagePath;
        audioElement.src = track.audioPath;
    }

    function playAudio() {
        audioElement.play().then(() => {
            isPlaying = true;
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        }).catch(error => {
            console.error("Audio play failed:", error);
        });
    }

    function pauseAudio() {
        isPlaying = false;
        audioElement.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) {
            return '0:00';
        }
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return $;{minutes}$;{secs < 10 ? '0' : ''}$;{secs};
    }

    function updateProgress() {
        if (audioElement.duration) {
            seekBar.value = audioElement.currentTime;
            currentTimeSpan.textContent = formatTime(audioElement.currentTime);
        }
    }

    function setDuration() {
        durationSpan.textContent = formatTime(audioElement.duration);
        seekBar.max = audioElement.duration;
    }

    function seek() {
        audioElement.currentTime = seekBar.value;
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    rewindBtn.addEventListener('click', () => { audioElement.currentTime -= 10; });
    forwardBtn.addEventListener('click', () => { audioElement.currentTime += 10; });
    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('loadedmetadata', setDuration);
    seekBar.addEventListener('input', seek);
    audioElement.addEventListener('ended', () => {
        pauseAudio();
        audioElement.currentTime = 0;
    });
    loadTrack(track);
});