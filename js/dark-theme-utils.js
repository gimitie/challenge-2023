// evento toggleTheme -> vai chama o apply

import { loadHeader, loadFooter } from "./dark-theme-loader.js";

document.addEventListener('toggleTheme', function() {
    // toggle = true;
    var isCookieDarkTheme = verifyIsDarkTheme();
    // document.body.style.transition = 'all 0.7s'
    if(isCookieDarkTheme == 'true'){
        isCookieDarkTheme = 'false';
        localStorage.setItem('dark-theme', isCookieDarkTheme);
    }
    else
        isCookieDarkTheme = 'true';
        localStorage.setItem('dark-theme', isCookieDarkTheme);
    applyTheme();
});

export function changeMenu(theme){
    switch (theme) {
        case 'dark':
            setMenuColorsProperties('white', 'white', '#0a0a0a');
            changeButtonTheme('--visibility-btn-sun', 'visible');
            changeButtonTheme('--visibility-btn-moon', 'hidden');
            break;
        
        case 'light':
            setMenuColorsProperties('black', 'black', '#f8f9fa');
            changeButtonTheme('--visibility-btn-sun', 'hidden');
            changeButtonTheme('--visibility-btn-moon', 'visible');
            break;
    }
}

export function changeBody(theme){
    switch (theme) {
        case 'dark':
            setBodyColorsProperties('white', 'white', '#292929');
            break;
        
        case 'light':
            setBodyColorsProperties('black', 'black', 'white');
            break;
    }
}

export function setMenuColorsProperties(bgColor, borderColor, backgroundColor) {
    document.body.style.setProperty('--bg-color', bgColor);
    document.body.style.setProperty('--bg-border-color', borderColor);
    document.body.style.setProperty('--bg-background-color', backgroundColor);
}

export function setBodyColorsProperties(colorCody, borderColorBody, backgroundColorBody){
    document.body.style.setProperty('--bg-color-body', colorCody);
    document.body.style.setProperty('--bg-border-color-body', borderColorBody);
    document.body.style.setProperty('--bg-background-color-body', backgroundColorBody);
}

function changeButtonTheme(nameBtn, visibility) {
    document.body.style.setProperty(nameBtn, visibility);
}



export function verifyIsDarkTheme() {
    var isDarkTheme = localStorage.getItem('dark-theme');
    return isDarkTheme ? isDarkTheme: false;
}

export function applyTheme(isDarkTheme = verifyIsDarkTheme()) {
    // toggleTheme
    localStorage.setItem('dark-theme', isDarkTheme);

    if(isDarkTheme.toString() == 'true'){
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
    
    loadHeader();
    loadFooter();
    // loadPage();
}

function loadPage() {
    addEvents();
}

function addEvents() {
   
}

function applyLightTheme() {
    changeMenu('light');
    changeBody('light');
}

function applyDarkTheme() {
    // document.body.style.setProperty('--time-transition', '0.04s');
    // var transition = "";
    // if(toggle){ 
    //     // document.body.style.transition = '';
    //     transition = "all 0.4s";
    // }
    // else{
    //     transition = "none";
    //     document.body.style.setProperty('--transition-btn', "none");
    // }

    // document.body.style.setProperty('--transition', transition);
    changeMenu('dark');
    changeBody('dark');
    // document.body.style.setProperty('--transition-btn', "all 0.4s");
}