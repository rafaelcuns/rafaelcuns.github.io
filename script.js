// Function to implement language support (really don't know how to add language support!)
function languageSwitcher(lang) {
    switch (lang) {
        case "pt-BR":
        case "pt-PT":
        case "pt":
            let li = document.querySelectorAll("li")
            
            li[0].innerHTML = "Estudante do Instituto Federal do Rio de Janeiro com ensino técnico de Informática junto ao Ensino Médio"
            li[1].innerHTML = "Tecladista iniciante"
            li[2].innerHTML = "Fâ de Minecrtaft"
            li[3].innerHTML = "E muito mais!"

            document.querySelectorAll("h1")[1].innerHTML = "Meus Links:"
            break;
    }
}

languageSwitcher(navigator.language)