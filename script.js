function showDiv(){                
    document.getElementById("bubble-container").style.display="block";
}

function play(url) {
    new Audio(url).play();
}

function showAndplay(url){
    play(url);
    showDiv();
}