import { addScrollHooks } from "../scripts/nav-scroll-hooks.js";

$(document).ready(function() {
    const navIds = ['start', 'abstract', 'intro', 'iterations', 'proposed', 'in-dev', 'final', 'post-launch', 'retro']

    addScrollHooks(navIds);
});