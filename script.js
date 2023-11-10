function showDiv(){                
    document.getElementById("bubble-container").style.display="block";
    document.getElementById("clickHere").style.display="none";
    document.getElementById("quotes").innerHTML = pickQuote();
}

function pickQuote(){
    let x = Math.floor(Math.random() * 7)+1;

    if (x == 1){
        return "You got this!"
    }
    else if (x==2){
        return "You can do it!"
    }
    else if (x==3){
        return "I believe in you!"
    }
    else if (x==4){
        return "👏👏👏 Keep it up!"
    }
    else if (x==5){
        return "👉😄 you Smart"
    }

    else if (x==6){
        return "Chin Up!"
    }

    else{
        return "You are quackers tho"
    }
}

function play(url) {
    new Audio(url).play();
}

function showAndplay(url){
    play(url);
    showDiv();
}