// Function to implement language support (really don't know how to add language support!)
function languageSwitcher(lang) {
    switch (lang) {
        case "pt-BR":
        case "pt-PT":
        case "pt":
            // let li = document.querySelectorAll("li")
            // li[0].innerHTML = "Estudante do Instituto Federal do Rio de Janeiro com ensino técnico de Informática junto ao Ensino Médio"
            // li[1].innerHTML = "Tecladista iniciante"
            // li[2].innerHTML = "Fâ de Minecrtaft"
            // li[3].innerHTML = "E muito mais!"

            document.querySelector("h2").innerHTML = "Meus Links:"
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

function showHideLinks() {
    if (document.querySelector("a.yt-links").style.display == "none") {
        document.querySelectorAll("a.yt-links").forEach(element => {
            element.style.display = "block"
        })
    } else {
        document.querySelectorAll("a.yt-links").forEach(element => {
            element.style.display = "none"
        })
    }
}