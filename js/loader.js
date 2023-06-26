window.addEventListener("load", function() {
    init();
});

function init() {
    loadHeader();
    loadFooter();
}


function loadHeader() {
    var output=document.getElementById("teste-header");
    var input=new XMLHttpRequest();
    input.open("GET","components/teste-header.html");

    input.addEventListener("load",function(){
        output.innerHTML=input.responseText;
        });
    
    input.send();
}

function loadFooter() {
    var output2=document.getElementById("teste-footer");
    var input=new XMLHttpRequest();
    input.open("GET","components/teste-footer.html")

    input.addEventListener("load",function(){
        output2.innerHTML=input.responseText;
    })

    input.send();
}

