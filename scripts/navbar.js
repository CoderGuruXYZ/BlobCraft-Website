var nav = document.querySelector(".link");
var navTop = document.querySelector(".navTop");

function loadAll() {
    console.log("func started");
    $("nav").html("");

    var names = ["Home", "Discord", "Client"];
    var links = ["index.html", "discord.html", "client.html"];

    for(i = 0; i < names.length; i++) {
        console.log("Loop started");
        var link = document.createElement("div");
        link.classList.add("link");
        
        var linkA = document.createElement("a");
        linkA.classList.add("linkA");
        linkA.innerHTML = names[i];
        linkA.href = links[i];

        link.appendChild(linkA);

        navTop.appendChild(link);
    }

    // alert(navTop.innerHTML)
}

loadAll();