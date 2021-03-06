import videos from "./data.js"
import utils from "./utils.js"
import elements from "./playerelements.js"

export default {
    
    videoData: videos,
    currentVideo : { },
    currentPlaying: 0,
    isPlaying: false,

    start() {

        this.currentPlaying = this.getParameterByName('id') - 1;
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

            window.location.href = '/';

        } else {

            this.update();
            this.play();

        }

    },

    togglePlayPause() {

        this.isPlaying ?  this.pause() : this.play();

    },

    toggleMute() {

        this.video.muted = !this.video.muted ;
        this.volume.innerText = this.video.muted ? "volume_down" : "volume_up";

    },

    setVolume(value) {

        this.video.volume = value / 100;

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
        this.cover.style.background = `url('${this.currentVideo.cover}') no-repeat center center / cover`;
        this.title.innerText = this.currentVideo.title;
        this.producer.innerText = this.currentVideo.producer;

        elements.createVideoElement.call(this, this.currentVideo.src);

        this.video.onloadeddata = () => {

            elements.actions.call(this);

        }

    },

    restart() {

        this.currentPlaying = 0;
        this.video.remove();
        this.update();

    },

    getParameterByName(name, url) {

        if (!url) url = window.location.href;

        name = name.replace(/[\[\]]/g, '\\$&');

        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);

        if (!results) return null;
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, ' '));

    },

}
