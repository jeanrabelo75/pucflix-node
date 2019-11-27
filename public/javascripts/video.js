export class Video {

    constructor (src, cover) {

        const video = document.createElement("video");

        if (src !== "") {

          video.src = src;
        
        }
        
        cover.appendChild(video);
        return video;
        
    }

    remove = () => {

      this.remove()

    };
        
}