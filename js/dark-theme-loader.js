
import { dispatchToggleTheme } from "./dark-theme-event.js";

export function loadHeader() {
    var output=document.getElementById("header");
    var input=new XMLHttpRequest();
    input.open("GET","components/header.html");

    input.addEventListener("load",function(){
        output.innerHTML=input.responseText;

        var btns = document.getElementsByClassName('btn-theme');
        for (let btn of btns) {
            btn.addEventListener("click", function() {
                dispatchToggleTheme();
            });
        }

        });
    
    input.send();
}

export function loadFooter() {
    var output2=document.getElementById("footer");
    var input=new XMLHttpRequest();
    input.open("GET","components/footer.html")

    input.addEventListener("load",function(){
        output2.innerHTML=input.responseText;
    })

    input.send();
}