import { addScrollHooks } from "../scripts/nav-scroll-hooks.js";

$(document).ready(function() {
    const navIds = ['start', 'abstract', 'intro', 'research', 'dashboards', 'iterations', 'pro-des', 'in-dev', 'retro']

    addScrollHooks(navIds);
});