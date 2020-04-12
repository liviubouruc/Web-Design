filme = [
    f1 = {
        titlu: "Titanic",
        durata: 120,
        actori: ["Joe", "Leo", "Vlad"],
        seen: false,
        img: "bird.png"
    },
    f2 = {
        titlu: "se7en",
        durata: 180,
        actori: ["Leo", "David"],
        seen: true,
        img: "bird.png"
    }
]

var myBody = document.getElementsByTagName("body");

for(let i = 0; i < filme.length; ++i) {
    let newFilm = document.createElement("p");
    newFilm.innerHTML = filme[i].titlu;
    myBody[0].appendChild(newFilm);

    let myUl = document.createElement("ul");
    let myLi1 = document.createElement("li");
    let myLi2 = document.createElement("li");
    let myLi3 = document.createElement("li");
    let myLi4 = document.createElement("li");
    myBody[0].appendChild(myUl);

    myLi1.innerHTML = "durata: " + filme[i].durata;
    myUl.appendChild(myLi1);
    myLi2.innerHTML = "actori: " + filme[i].actori;
    myUl.appendChild(myLi2);
    myLi3.innerHTML = "seen: " + filme[i].seen;
    if(filme[i].seen == false) myLi3.style.color = "red";
    else myLi3.style.color = "green";
    myUl.appendChild(myLi3);
    let fImg = document.createElement("img");
    fImg.setAttribute("src", filme[i].img);
    myUl.appendChild(myLi4);
    myLi4.appendChild(fImg);
}