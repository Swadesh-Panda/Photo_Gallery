document.getElementById("bars").onclick = function(){
    document.getElementById("bars").style.display = "none";
    document.getElementById("times").style.display = "block";

    document.getElementsByTagName("nav")[0].style.visibility = "visible";
    document.body.style.overflow = "hidden";

}

document.getElementById("times").onclick = function(){
    document.getElementById("times").style.display = "none";
    document.getElementById("bars").style.display = "block";

    document.getElementsByTagName("nav")[0].style.visibility = "hidden";
    document.body.style.overflow = "auto";
}
