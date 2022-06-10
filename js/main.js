// create a module for our project
(() => {
    // create a reference to the main headline (the first h2 element)
    let mainHeadline = document.querySelector('#main-headline'),
        theAudio = document.querySelector('audio'),
        theThumbs = document.querySelectorAll('img');

    // functions go in the middle -> the brains / logic of your app
    function loadAudioTrack() {
        // change the audio element's source attribute
        theAudio.src = `audio/${this.dataset.trackref}.mp3`;

        // run the load and play media methods
        theAudio.load();
        theAudio.play();
    }

    // event handling goes here
    // listen for a click on the thumbnail images, load the right audio when the click happens
    theThumbs.forEach(thumb => thumb.addEventListener('click', loadAudioTrack));
})()
