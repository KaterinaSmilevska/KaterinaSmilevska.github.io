$(document).on('click', '.main #interests .type .nav ul li', function (){
    $(this).addClass('active').siblings().removeClass('active')
})
function NewDivhere(){
    document.getElementById("books").style.display = "flex";
    document.getElementById("music").style.display = "none";
    document.getElementById("other").style.display = "none";
}

function NewDivhere2(){
    document.getElementById("books").style.display = "none";
    document.getElementById("other").style.display = "none";
    document.getElementById("music").style.display = "flex";
}

function NewDivhere3(){
    document.getElementById("other").style.display = "flex";
    document.getElementById("music").style.display = "none";
    document.getElementById("books").style.display = "none";
}
