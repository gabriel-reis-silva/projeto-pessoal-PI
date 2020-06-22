function fechamenu() {
    document.getElementById("menuhamburguer").style.width = "0";
    document.getElementById("principal").style.marginLeft = "0";
    setTimeout(() => {
        document.getElementById("btnabrir").style.visibility = "visible";
    }, 400);
    document.getElementById("rightbox").style.marginTop = "2%";
}

function abremenu() {
    document.getElementById("menuhamburguer").style.width = "20%";
    document.getElementById("btnabrir").style.visibility = "hidden";
    document.getElementById("principal").style.marginLeft = "250px";
    document.getElementById("rightbox").style.marginTop = "-150%";
}
