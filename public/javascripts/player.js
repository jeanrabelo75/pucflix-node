import videos from "./data.js"
import utils from "./utils.js"
import elements from "./playerelements.js"

export default {
    
    videoData: videos,
    currentVideo : { },
    currentPlaying: 0,
    isPlaying: false,

    start() {

        elements.set.call(this);
        this.update();

    },

    play() {

        this.isPlaying = true;
        this.video.play();
        this.playPause.innerText = "pause";

    },

    pause() {

        this.isPlaying = false;
        this.video.pause();
        this.playPause.innerText = "play_arrow";
        this.cover.style.background = `url('${utils.path(this.currentVideo.cover)}') no-repeat center center / cover`;

    },

    next() {

        this.video.remove();
        this.currentPlaying++;
        
        if (this.currentPlaying === this.videoData.length) {

            this.restart();

        }

        this.update();
        this.play();

    },

    togglePlayPause() {

        this.isPlaying ?  this.pause() : this.play();

    },

    toggleMute() {

        this.video.muted = !this.video.muted ;
        this.volume.innerText = this.video.muted ? "volume_down" : "volume_up";

    },

    setVolume(value) {

        this.video.volumeControl = value / 100;

    },

    setSeekBar(value) {

        this.video.currentTime = value;

    },

    timeUpdate() {

        this.currentDuration.innerText =  utils.secondsToMinutes(this.video.currentTime);
        this.seekBar.value = this.video.currentTime;

    },

    update() {

        this.currentVideo = this.videoData[this.currentPlaying];
        this.cover.style.background = `url('${utils.path(this.currentVideo.cover)}') no-repeat center center / cover`;
        this.title.innerText = this.currentVideo.title;
        this.producer.innerText = this.currentVideo.producer;

        elements.createVideoElement.call(this, utils.path(this.currentVideo.file));

        this.video.onloadeddata = () => {

            elements.actions.call(this);

        }

    },

    restart() {

        this.currentPlaying = 0;
        this.video.remove();
        this.update();

    },

}
