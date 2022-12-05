var nav = document.querySelector("nav");
var navTop = document.querySelector(".navTop");

function loadAll() {
    $("nav").html("");

    var names = ["Home", "Discord", "Client"];
    var links = ["index.html", "discord.html", "client.html"];

    for(i = 0; i < names.length; i++) {
        var link = document.createElement("div");
        link.classList.add("link");
        
        var linkA = document.createElement("a");
        linkA.classList.add("linkA");
        linkA.innerHTML = names[i];
        linkA.href = links[i];

        link.appendChild(linkA);

        navTop.appendChild(link);
    }
}

loadAll();
