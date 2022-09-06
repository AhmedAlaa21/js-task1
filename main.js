let sumofDummyNumbers = 10 + 13 + 25 + 33 + 45 + 13 + 33 + 51 + 88 + 94 + 85;

//task js - part 1.
function showResult(){
let averageResult = sumofDummyNumbers / 11;
 document.getElementById("result-num").innerHTML = averageResult.toFixed(2); 
}


//task js - part 2.

let displayDecision = document.getElementById("purple-rec").style;
function showMe(){
    displayDecision.width = "446px"
}
function hideMe(){
        displayDecision.width = "0px";
}


//task js - part 3.

function openNav(){
    document.getElementById("left-nav").style.width = "350px";
    document.getElementById("left-nav").style.display= "block";
    document.body.style.backgroundColor = "gray";
    document.body.style.marginRight = "350px";
}

function closeNav(){
    document.getElementById("left-nav").style.width= "0%";
    document.getElementById("left-nav").style.display= "none";
    document.getElementById("left-nav").style.overflow= "hidden";
    document.body.style.backgroundColor = "white";
}

// clock.
function displayTime(){
    var date = new Date();

    var hrs = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();

    if(hrs === 0 ){
        hrs = 12;
    }

    if(hrs > 12){
        hrs -= 12;
    }

    if(hrs <10 ){
        hrs = "0" + hrs.toString();
    }

    if(mins < 10) {
        mins = "0" + mins.toString();
    }

    if(seconds < 10) {
        seconds = "0" + seconds.toString();
    }
    
    var fullTime = hrs + ":" +  mins + ":" + seconds;
    document.getElementById('clock').innerHTML = fullTime;

    setTimeout(displayTime, 1000)
}

displayTime();
