fetch("https://www.hamburgercheeseburgerbigmacwhopper.tk/gamedirs.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var div = document.createElement("div")
            div.setAttribute("id", obj.file)
            div.textContent = obj.file
            div.setAttribute("class","button")
            div.onclick = function () {
                loadGame(this);
            };
            document.getElementById("wrapper").appendChild(div)
            // console.log(obj.file);
        }
    });
