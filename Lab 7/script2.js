function square() {
    let x = document.getElementById("square-input").value;
    document.getElementById("solution").innerHTML = x*x;
}

function half() {
    let x = document.getElementById("half-input").value;
    document.getElementById("solution").innerHTML = x/2;
}

function percent() {
    let p = document.getElementById("percent1-input").value;
    let x = document.getElementById("percent2-input").value;
    document.getElementById("solution").innerHTML = p*x / 100;
}

function area() {
    let x = document.getElementById("area-input").value;
    document.getElementById("solution").innerHTML = 3.14*x*x;
}