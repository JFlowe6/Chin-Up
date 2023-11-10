function showDiv(){                
    document.getElementById("bubble-container").style.display="block";
    document.getElementById("clickHere").style.display="none";
}

function play(url) {
    new Audio(url).play();
}

function showAndplay(url){
    play(url);
    showDiv();
}