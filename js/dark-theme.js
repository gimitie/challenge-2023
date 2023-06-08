window.addEventListener("load",header);
// $( document ).ready(init)
// document.getElementsByTagName("body")[0].addEventListener("load",init);
// window.document.addEventListener("load",init)
// $(window).on("load",init);
// $(document).ready(init);
// todas essas opções executam duas vezes ou da errado. Testando aqui, ele acaba rodando duas vezes esse evento por conta do header (que tá sendo incluído no html)
// pelo o que eu vi é pq no header ele tbm tava chamando esse js aqui

// $.when(
//     $("#header").load("./components/header.html"),
//     $.ready
//   ).done(function( data ) {
//     console.log(data)
//     data.ready()
//   });

function header() {
    var output=document.getElementById("header");
    var input=new XMLHttpRequest();
    input.open("GET","components/header.html")
    input.addEventListener("load",function(){
        console.log("teste1");
        output.innerHTML=input.responseText;
        footer();
        
    })
    input.send();
}

function footer() {
    var output2=document.getElementById("footer");
    var input=new XMLHttpRequest();
    input.open("GET","components/footer.html")
    input.addEventListener("load",function(){
        console.log("teste2");
        output2.innerHTML=input.responseText;
        init();
        
    })
    input.send();
}

function init() {
    // $(function(){
    //     $("#header").load("./components/header.html"); 
    //   });

    //   $(function(){
    //     $("#footer").load("./components/footer.html"); 
    //   });
    // document.getElementById("btn-toggle-theme").addEventListener("click",toggleTheme);
    console.log("Teste");
    // document.getElementById("botao").addEventListener("click",darkTheme);
    verifyDarkTheme(isDarkTheme());
}

function isDarkTheme() {
    var isDarkTheme = Cookies.get('dark-theme');
    return isDarkTheme ? isDarkTheme: false;
}

function verifyDarkTheme(isDarkTheme = false) { // toggleTheme
    Cookies.set('dark-theme', isDarkTheme);
    // ----------------- lógica de alteração do tema
    if(isDarkTheme.toString() == 'true'){
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
    // ----------------- lógica de alteração do tema
}

function applyLightTheme() {
    console.log("light theme applied");
}

function applyDarkTheme() {
    changeMenuToDark();
    changeBodyToDark();
}

function darkTheme(){
    Cookies.set('dark-theme',!isDarkTheme());

    changeBody();
    changeMenu();
    changeButtons();
}

function changeBodyToDark(){
    var elementBody = document.body;
    elementBody.classList.remove("bg-color-light-body");
    elementBody.classList.add("bg-color-dark-body");
}

function changeBodyContentToDark() {

}

function changeMenuToDark(){
    var elementsMenu = document.getElementsByClassName("bg-color-light");
    for(var i = elementsMenu.length - 1; i >= 0; i--) {
        // elementsMenu[i].classList.add("bg-color-dark");
        toggleTheme(elementsMenu[i], "bg-color-dark", "bg-color-light");
    }
    // var elementsAux;
    // for(var i = 0; i < elementsMenu.length; i++) {
    //     // tem que ser primeiro o add e depois o remove pois, ao dar remove, o item sai da lista do getElementByClassName, uma vez que não tem mais a classe removida
    //     console.log(i);
    //     elementsMenu[i].classList.add("bg-color-dark");
    //     // toggleTheme(elementsMenu[i], "bg-color-dark", "bg-color-light");
    // }
    // // pelo mesmo motivo do comentário anterior, tem que separar o add do remove, pois, como estamos usando um for, ele vai adicionando 1 ao numero do índice, 
    // // porém, com o remove, o javascript remove automaticamente esse elemento da lista, fazendo com que o tamanho dela se altere e, consequentemente, os índices
    // for(var i = 0; i < elementsMenu.length; i++) {
    //     elementsMenu[i].classList.remove("bg-color-light");
    // }
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