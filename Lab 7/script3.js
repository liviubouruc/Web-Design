var sessionExpired = setTimeout(function(){
    alert("Sesiune expirata");
}, 30*1000);

var dog = {
    movePixels: 10, // number of pixels
    delayMs: 50, // number of miliseconds
    dogTimer: null,

    dogWalk: function() {
        var img = document.getElementsByTagName("img")[0];
        var currentLeft = parseInt(img.style.left);
        img.style.left = currentLeft + dog.movePixels + "px";
        // reset image position to start
        if (currentLeft > window.innerWidth - img.width) {
            img.style.left = "0px";
        }
        document.getElementById("info").innerText = "Viteza: "+ ((1000 * dog.movePixels) / dog.delayMs) + "px/secunda";
    },

    start: function() {
        clearTimeout(sessionExpired);
        sessionExpired = setTimeout(function(){
            alert("Sesiune expirata");
        }, 30*1000);

        dog.movePixels = 10;
        this.dogTimer = window.setInterval(this.dogWalk, this.delayMs);
        document.getElementById("start-button").disabled = true;
    },

    stop: function() {
        clearTimeout(sessionExpired);
        sessionExpired = setTimeout(function(){
            alert("Sesiune expirata");
        }, 30*1000);

        clearInterval(this.dogTimer);
        dog.movePixels = 0;
        document.getElementById("start-button").disabled = false;
        document.getElementById("info").innerText = "Viteza: "+ ((1000 * dog.movePixels) / dog.delayMs) + "px/secunda";
    },

    faster: function() {
        clearTimeout(sessionExpired);
        sessionExpired = setTimeout(function(){
            alert("Sesiune expirata");
        }, 30*1000);
    
        dog.movePixels += 10;
    },
    
    reset: function() {
        clearTimeout(sessionExpired);
        sessionExpired = setTimeout(function(){
            alert("Sesiune expirata");
        }, 30*1000);
    
        dog.movePixels = 10;
    }
};

var reset_b = document.createElement("button");
reset_b.innerHTML = "Reset button";
reset_b.id = "reset-button";
reset_b.onclick = dog.reset;
document.getElementById("buttons").appendChild(reset_b);