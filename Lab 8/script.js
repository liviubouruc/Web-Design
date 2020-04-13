var main = document.getElementById("main");
 
function getData() {
    fetch('http://localhost:3000/dogs')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
   
          // Examine the text in the response
          response.json().then(function(dogList) {
            console.log(dogList);
            render(dogList);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}
 
function render(dogList) {
    // creare noduri din lista de catei
    // apenduire la main
    var container = document.createElement("ul");
    dogList.forEach(element => {
        var dog = document.createElement("li");
        var name = document.createTextNode(element.name);
        dog.appendChild(name)
 
        var img = document.createElement("img");
        img.setAttribute("src", element.img);
 
        container.appendChild(dog);
        container.appendChild(img);
    });

    main.appendChild(container);
 
}

getData();