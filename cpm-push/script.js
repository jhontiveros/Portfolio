import { disableVideoControls } from "../scripts/disable-video-controls.js";
import { addScrollHooks } from "../scripts/nav-scroll-hooks.js";

$(document).ready(function() {
    const videoIds = ['push-notifs-video', 'permissions-video']

    const navIds = ['start', 'abstract', 'intro', 'content-m', 'push-exp', 'launch-1', 'updates', 'launch-2', 'retro']

    disableVideoControls(videoIds);

    addScrollHooks(navIds);
});