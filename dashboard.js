// UPDATE VALUES
// 0: no automation
// 1: check on boot
// 2: check & install on boot

/*
var thmMain
var thmTextCol
var thmSelect
var thmButtonArea
var thmNavPress
var thmWindow
var thmTitleCol
var thmWindowActiveGradient1
var thmWindowActiveGradient2
var thmWindowInactiveGradient1
var thmWindowInactiveGradient2
var thmTaskbarPress
var thmTaskbarDocked
var thmButton
var thmBorder
var thmHover
var thmBorderHover
var thmPress
var thmBorderPress
var thmHead
var thmHeadHover
var thmHeadPress
var thmClose
var thmCloseHover
var thmClosePress
*/

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
    },
    setDark: () => {
        top.$file.save("/a/boot/pancake-vars.css", `:root {
    --main: #000;
    --textcol: #fff;
    --select: #07f;
    --buttonarea: #111;
    --navpress: #bbb;

    --window: #000;
    --titlecol: #fff;
    --windowactivegradient1: #07f;
    --windowactivegradient2: #0077ff70;
    --windowinactivegradient1: #ffffff33;
    --windowinactivegradient2: transparent;
    
    --taskbarpress: #333;
    --taskbardocked: #444;

    --button: #111;
    --border: #333;

    --hover: #222;
    --borderhover: #444;

    --press: #333;
    --borderpress: #555;

    --head: #ffffff5f;
    --headhover: #fff;
    --headpress: #aaa;

    --close: #ffffff5f;
    --closehover: #f00;
    --closepress: #a00;
}`)
    top.$exe("reboot")
    },
    setLight: () => {
        top.$file.save("/a/boot/pancake-vars.css", `:root {
    --main: #eee;
    --textcol: #000;
    --select: #07f;
    --buttonarea: #ddd;
    --navpress: #777;

    --window: #eee;
    --titlecol: #000;
    --windowactivegradient1: #0bf;
    --windowactivegradient2: #00bbff70;
    --windowinactivegradient1: #55555533;
    --windowinactivegradient2: transparent;
    
    --taskbarpress: #aaa;
    --taskbardocked: #999;

    --button: #ccc;
    --border: #888;

    --hover: #bbb;
    --borderhover: #777;

    --press: #aaa;
    --borderpress: #666;

    --head: #0000005f;
    --headhover: #000;
    --headpress: #555;

    --close: #0000005f;
    --closehover: #c00;
    --closepress: #a00;
}

.ui_window__head__title {
    text-shadow: none !important;
}

#s42_start > img {
    filter: invert(100%)
}`)
    top.$exe("reboot")
    },
    setClassic: () => {
        top.$file.save("/a/boot/pancake-vars.css", `:root {
    --main: silver;
    --textcol: #000;
    --select: #07f;
    --buttonarea: silver;
    --navpress: #777;

    --window: silver;
    --titlecol: #fff;
    --windowactivegradient1: #00a;
    --windowactivegradient2: #5af;
    --windowinactivegradient1: #666;
    --windowinactivegradient2: #aaa;
    
    --taskbarpress: #888;
    --taskbardocked: #999;

    --button: #ccc;
    --border: #777;

    --hover: #aaa;
    --borderhover: #666;

    --press: #999;
    --borderpress: #555;

    --head: #0000005f;
    --headhover: #000;
    --headpress: #555;

    --close: #0000005f;
    --closehover: #c00;
    --closepress: #a00;
}

.ui_window__head__title {
    text-shadow: none !important;
}

#s42_start > img {
    filter: invert(100%)
}`)
    top.$exe("reboot")
    },
    saveSettings: () => {
        top.$file.open("/a/.pancake/config.json","String",function(e){
            let pancakeSaveConfig = JSON.parse(e)
            let pancakeSaveCSS = ""

            pancakeSaveConfig.bootlogo = document.getElementById("s_bootlogo").checked
            pancakeSaveConfig.whiteterm = document.getElementById("s_whiteterm").checked
            pancakeSaveConfig.rsstray = document.getElementById("s_rsstray").checked
            pancakeSaveConfig.dashtray = document.getElementById("s_dashtray").checked
            pancakeSaveConfig.titlegradient = document.getElementById("s_titlegradient").checked
    
            if (!document.getElementById("s_rsstray").checked) {
                pancakeSaveCSS = pancakeSaveCSS + " " + "#s42_feed > img[alt='rss'] {display: none;}"
            }

            if (document.getElementById("s_titlegradient").checked) {
                pancakeSaveCSS = pancakeSaveCSS + " " + ".ui_window--active .ui_window__head {background-image: linear-gradient(90deg, var(--windowactivegradient1), var(--windowactivegradient2));} .ui_window__head {background-image: linear-gradient(90deg, var(--windowinactivegradient1), var(--windowinactivegradient2));}"
            }
    
            top.$db.set(".pancake/config.json", JSON.stringify(pancakeSaveConfig))
            if (pancakeSaveCSS.length > 0) {
                top.$db.set("boot/pancake-settable.css", pancakeSaveCSS)
            } else {
                top.$file.delete("/a/boot/pancake-settable.css")
            }
            top.$notif("Pancake", "Settings saved.<br>Reboot to apply changes.")
        })
    }
}

document.getElementById("bar_themes").addEventListener("click",w103.themes)
document.getElementById("bar_update").addEventListener("click",w103.update)
document.getElementById("bar_settings").addEventListener("click",w103.settings)
document.getElementById("t_dark").addEventListener("click",w103.setDark)
document.getElementById("t_light").addEventListener("click",w103.setLight)
document.getElementById("t_classic").addEventListener("click",w103.setClassic)
document.getElementById("s_save").addEventListener("click",w103.saveSettings)

top.$file.open("/a/.pancake/config.json","String",function(e){
    let pancakeSaveConfig = JSON.parse(e)

    document.getElementById("s_bootlogo").checked = pancakeSaveConfig.bootlogo
    document.getElementById("s_whiteterm").checked = pancakeSaveConfig.whiteterm
    document.getElementById("s_rsstray").checked = pancakeSaveConfig.rsstray
    document.getElementById("s_dashtray").checked = pancakeSaveConfig.dashtray
    document.getElementById("s_titlegradient").checked = pancakeSaveConfig.titlegradient
})