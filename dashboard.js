window.onload = () => {
    document.getElementById("bar_themes").addEventListener("click",w103.themes)
    document.getElementById("bar_update").addEventListener("click",w103.update)
    document.getElementById("bar_settings").addEventListener("click",w103.settings)
}

let w103 = {
    themes: () => {
        document.getElementById("update").style.display = "none"
        document.getElementById("settings").style.display = "none"
        document.getElementById("themes").style.display = "block"
    },
    update: () => {
        document.getElementById("update").style.display = "block"
        document.getElementById("settings").style.display = "none"
        document.getElementById("themes").style.display = "none"
    },
    settings: () => {
        document.getElementById("update").style.display = "none"
        document.getElementById("settings").style.display = "block"
        document.getElementById("themes").style.display = "none"
    }
}