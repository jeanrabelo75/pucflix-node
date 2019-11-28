import videos from "./data.js"

window.addEventListener("load", () => {

    home.loadImages();

});

document.querySelector('#search-div').addEventListener('keypress', function (e) {

    let key = e.which;

    if (key === 13) {

        document.getElementById("error-msg").style.display = 'block';

    }

});

document.getElementById("home").addEventListener("click", function(event) {

    let id = event.target.parentElement.parentElement.id;
    let url = id.slice(-1);

    window.location.href = "/player?id=" + url;

});

let home = {

    loadImages : function () {

        videos.forEach(function (value, index) {

            document.getElementById('home').innerHTML +=
                '<div class="col s12 m4 l4" >\n' +
                '    <div class="card" id="video-tag">\n' +
                '         <div class="card-image" id="video-' + value.tagId + '">\n' +
                '               <div class="card-image-content">\n' +
                '                     <img alt="" id="video-image" src="' + value.cover + '">\n' +
                '                </div>\n' +
                '\n' +
                '                <div class="card-show">\n' +
                '                     <h5 id="video-title">' + value.title + '</h5>\n' +
                '                          <p class="producer" id="producer-name">' + value.producer + '</p>\n' +
                '                 </div>\n' +
                '          </div>\n' +
                '     </div>\n' +
                '</div>';

        });

    },

};