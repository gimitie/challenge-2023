import {colorModes} from "./color-modes.js";

window.addEventListener("load", function() {
    init();
});

function init() {
    loadHeader();
    loadFooter();
    setTimeout(colorModes, 50);
}

function loadHeader() {
    var output=document.getElementById("header");
    var input=new XMLHttpRequest();
    input.open("GET","components/header.html");

    input.addEventListener("load",function(){
        output.innerHTML=input.responseText;
    });
    
    input.send();
}

function loadFooter() {
    var output2=document.getElementById("footer");
    var input=new XMLHttpRequest();
    input.open("GET","components/footer.html")

    input.addEventListener("load",function(){
        output2.innerHTML=input.responseText;
    })

    input.send();
}
