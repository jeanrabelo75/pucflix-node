import utils from "./utils.js"
import { Video } from "./video.js"

export default {

    set() {
        
        this.coverContent    = document.querySelector(".card-image-content");

        this.cover           = document.querySelector(".card-image");
        this.title           = document.querySelector(".card-content h5");
        this.producer          = document.querySelector(".producer");

        this.playPause       = document.querySelector("#play-pause");
        this.volume          = document.querySelector("#volume");
        this.volumeControl   = document.querySelector("#volume-control");

        this.seekBar         = document.querySelector("#seek-bar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration   = document.querySelector("#total-duration");

        this.fullScreen      = document.querySelector("#fullscreen");
    },

    createVideoElement(video) {

        this.video = new Video(video, this.coverContent);

    },

    actions() {

        this.video.onended = () => this.next();

        this.video.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick  = () => this.togglePlayPause();

        this.volume.onclick        = () => this.toggleMute();
        this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
        this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
        
        this.seekBar.oninput = () => this.setSeekBar(this.seekBar.value);
        this.seekBar.oninput = () => this.setSeekBar(this.seekBar.value);

        this.seekBar.max = this.video.duration;
        this.totalDuration.innerText = utils.secondsToMinutes(this.video.duration);

        this.fullScreen.onclick = () => utils.fullScreen(this.video);

    }

}