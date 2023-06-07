document.addEventListener("onLoad",init);

function init() {
    // document.getElementById("btn-toggle-theme").addEventListener("click",toggleTheme);
    verifyDarkTheme(isDarkTheme());
}

function isDarkTheme() {
    var isDarkTheme = Cookies.get('dark-theme');
    return isDarkTheme ? isDarkTheme: false;
}

function verifyDarkTheme(isDarkTheme = false) { // toggleTheme
    Cookies.set('dark-theme', isDarkTheme);
    // ----------------- lógica de alteração do tema
    if(isDarkTheme){
        applyDarkTheme();
    } else {

    }
    // ----------------- lógica de alteração do tema
}

function applyDarkTheme() {
    changeMenuToDark();
    changeBodyToDark();
}

function darkTheme(){
    changeBody();
    changeMenu();
    changeButtons()
}

function changeBodyToDark(){
    var elementBody = document.body;
    elementBody.classList.toggle("bg-color-dark-body");
}

function changeMenuToDark(){
    var elementsMenu = document.getElementsByClassName("bg-color-light");
    for(var i = 0; i < elementsMenu.length; i++) {
        toggleTheme(elementsMenu[i], "bg-color-dark", "bg-color-light"));
    }
}

function changeButtons(){
    var elementsMenu = document.getElementsByClassName("mbtn-light");
    for(var i = 0; i < elementsMenu.length; i++) {
        toggleTheme(elementsMenu[i], "mbtn-light", "mbtn-dark");
    }
}

function toggleTheme(element, classNameDark, classNameLight) {
    element.classList.toggle(classNameDark);
    element.classList.toggle(classNameLight);
}






function a(){
    const removeBtn = document.getElementById('botao');
    removeBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.classList.remove('bg-color-light');
            element.classList.add('bg-color-dark');
        });
    });
}