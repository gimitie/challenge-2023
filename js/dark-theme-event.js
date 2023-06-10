// const toggleThemeEvent = new Event('toggleTheme');
const toggleThemeEvent = new Event('toggleTheme', [,{ bubbles: false, cancelable: false}]);

export function dispatchToggleTheme() {
    // EventTarget.prototype.dispatchEvent.call(event.target, toggleThemeEvent);
    document.dispatchEvent(toggleThemeEvent);
}