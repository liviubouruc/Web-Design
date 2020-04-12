var myBody = document.getElementsByTagName("body");
myBody[0].style.fontFamily = "Arial, sans-serif";

var spans = document.getElementsByTagName("span");
spans[0].innerHTML = "Liviu";
spans[1].innerHTML = "pizza";
spans[2].innerHTML = "Vaslui";

var lis = document.getElementsByTagName("li");
for(let i = 0; i < lis.length; i++) {
    lis[i].classList.add("list-item");
}

var newImg = document.createElement("img");
newImg.setAttribute("src", "bird.png");
myBody[0].appendChild(newImg);