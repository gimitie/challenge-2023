function darkTheme(){
    changeBody();
    changeMenu();
    changeButtons()
}

function changeBody(){
    var elementBody = document.body;
    elementBody.classList.toggle("bg-color-dark-body");
}

function changeMenu(){
    var elementsMenu = document.getElementsByClassName("bg-color-light");
    for(var i = 0; i < elementsMenu.length; i++) {
        elementsMenu[i].classList.toggle("bg-color-light");
        elementsMenu[i].classList.toggle("bg-color-dark");
    }
}

function changeButtons(){
    var elementsMenu = document.getElementsByClassName("mbtn-light");
    for(var i = 0; i < elementsMenu.length; i++) {
        elementsMenu[i].classList.toggle("mbtn-light");
        elementsMenu[i].classList.toggle("mbtn-dark");
    }
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