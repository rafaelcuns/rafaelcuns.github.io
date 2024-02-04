// Function to implement language support (really don't know how to add language support!)
function languageSwitcher(lang) {
    switch (lang) {
        case "pt-BR":
        case "pt-PT":
        case "pt":
            document.querySelector("h2").innerHTML = "Meus Links:"
            document.querySelectorAll('.random-links')[0].innerHTML = "Meu primeiro jogo Scratch"
            document.querySelector("#random").innerHTML = "Links aleatórios 👇"
            break;
        case "it":
        case "it-IT":
        case "it-CH":
            document.querySelector("h2").innerHTML = "I miei link:"
            break;
    }
}

languageSwitcher(navigator.language)

// Show/Hide YouTube dropdown menu workaround
document.querySelector("a.yt-links").style.display = "none"
document.querySelector("a.random-links").style.display = "none"

function showHideLinks(linkType) {
    if (document.querySelector("a." + linkType).style.display == "none") {
        document.querySelectorAll("a." + linkType).forEach(element => {
            element.style.display = "block"
        })
    } else {
        document.querySelectorAll("a." + linkType).forEach(element => {
            element.style.display = "none"
        })
    }
}
