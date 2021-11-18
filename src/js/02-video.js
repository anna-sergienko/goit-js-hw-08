import throttle from "lodash/throttle";

// const throttle = require('lodash.throttle')
const iframe = document.querySelector("iframe");
const iframePlayer = new Vimeo.Player(iframe);

const updateStorage = data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

const timePoint = localStorage.getItem("videoplayer-current-time");
if (timePoint) {
    iframePlayer.setCurrentTime(timePoint);
 }

iframePlayer.on("timeupdate", throttle(updateStorage, 1000));
