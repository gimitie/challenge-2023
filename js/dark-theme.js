import { applyTheme } from "./dark-theme-utils.js";

window.addEventListener("load", function() {
    toggle = false;
    init();
});
var toggle = false;

function init() {
    applyTheme();
}