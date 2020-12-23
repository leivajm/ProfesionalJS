import MediaPlayer from './MediaPlayer.js'
import AutoPlay from "./plugins/Autoplay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video")
const button = document.querySelector("button")
const mutebutton = document.getElementById("mute")

const player = new MediaPlayer({ el : video, plugins : [
    new AutoPlay(), new AutoPlay()
] });
button.onclick = _ => player.togglePlay();
mutebutton.onclick = _ => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}