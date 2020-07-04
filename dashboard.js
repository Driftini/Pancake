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
            --titlecol: #fff;
            --windowactivegradient1: #222;
            --windowactivegradient2: #222;
            --windowinactivegradient1: #777;
            --windowinactivegradient2: #777;
            
            --taskbarpress: #aaa;
            --taskbardocked: #999;
        
            --button: #ccc;
            --border: #333;
        
            --hover: #bbb;
            --borderhover: #444;
        
            --press: #aaa;
            --borderpress: #555;
        
            --head: #ccc;
            --headhover: #fff;
            --headpress: #aaa;
        
            --close: #c00;
            --closehover: #f00;
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
            let pancakeSaveJS = ""

            pancakeSaveConfig.bootlogo = document.getElementById("s_bootlogo").checked
            pancakeSaveConfig.rsstray = document.getElementById("s_rsstray").checked
            pancakeSaveConfig.dashtray = document.getElementById("s_dashtray").checked
            pancakeSaveConfig.titlegradient = document.getElementById("s_titlegradient").checked
            pancakeSaveConfig.wallpaper = document.getElementById("s_wallpaper").checked
    
            if (!document.getElementById("s_rsstray").checked) {
                pancakeSaveCSS = pancakeSaveCSS + "" + "#s42_feed > img[alt='rss'] {display: none;}"
            }

            if (document.getElementById("s_titlegradient").checked) {
                pancakeSaveCSS = pancakeSaveCSS + "\n" + ".ui_window--active .ui_window__head {background-image: linear-gradient(90deg, var(--windowactivegradient1), var(--windowactivegradient2));} .ui_window__head {background-image: linear-gradient(90deg, var(--windowinactivegradient1), var(--windowinactivegradient2));}"
            }

            if (document.getElementById("s_wallpaper").checked) {
                pancakeSaveJS = pancakeSaveJS + "" + atob("JGZpbGUuZ2V0VXJsKCIvYS8ucGFuY2FrZS93YWxscGFwZXJzL2RhcmtuaWdodC5zdmciLGZ1bmN0aW9uKGUpewogICAgbGV0IHBhbmNha2VCZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzNDJfYmFja2dyb3VuZCIpLnN0eWxlCiAgICBwYW5jYWtlQmcuYmFja2dyb3VuZEltYWdlID0gInVybCgnIiArIGUgKyAiJykiCiAgICBwYW5jYWtlQmcuYmFja2dyb3VuZFJlcGVhdCA9ICJuby1yZXBlYXQiCiAgICBwYW5jYWtlQmcuYmFja2dyb3VuZFNpemUgPSAiY292ZXIiCn0p")
            }
    
            top.$db.set(".pancake/config.json", JSON.stringify(pancakeSaveConfig))
            if (pancakeSaveCSS.length > 0) {
                top.$db.set("boot/pancake-settable.css", pancakeSaveCSS)
            } else {
                top.$file.delete("/a/boot/pancake-settable.css")
            }
            if (pancakeSaveJS.length > 0) {
                top.$db.set("boot/pancake-settable.js", pancakeSaveJS)
            } else {
                top.$file.delete("/a/boot/pancake-settable.js")
            }
            top.$notif("Pancake", "Settings saved.<br>Reboot to apply changes.")
        })
    },
    uninstall: () => {
        top.$alert(
            {
                msg: "Are you sure you want to uninstall Pancake? Everything in /a/.pancake/ will be deleted permanently and all unsaved data will be lost.",
                title: "Uninstall Pancake",
                btnOk: "Uninstall",
                btnCancel: "Cancel",
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABLElEQVRYheWW6w7DIAiFeXQfzTdjPzZaPQKC1SXLSEjTTT2fcrFECSul8BPPaKnitdYlZ2YBWIMopfATa04gDyDiq7uvte4BWIm5gG8D+CwQ8oMAHPKzAPz3ACdDgAO/CiCTEGBsqQcA2gkyUOuA9/8+SAoAB4uID0B7GpEmLm6JEFF30XiGAMPtKKIoLoNQBHcfvQtwznUi+CN6u9M79vGWrAEPIWljhibHfYuPRxl13GSXEx5AL57Lgda0XGrT0SgpFB/jmf0uSAL04phQ0RzYAmBltLxLSLTSc+MfAbBKyktIr48MDckDsGqaiPh9ObP6TIjbVaA1qGjcDddtAWCv/QRARDzSEdU1ZgBRcSsh5Wmu4QFExa3bNLQBq62uijPnP0jzpTOfN13jBaj0Kzxbgu8JAAAAAElFTkSuQmCC"
            }, function(ok) {
                if(ok) {
                    top.$file.delete("/a/.pancake/")
                    top.$file.delete("/a/boot/pancake.js")
                    top.$file.delete("/a/boot/pancake-settable.js")
                    top.$file.delete("/a/boot/pancake-main.css")
                    top.$file.delete("/a/boot/pancake-settable.css")
                    top.$file.delete("/a/boot/pancake-vars.css")
                    top.$file.delete("/a/./pancakeinstalled")
                    top.$exe("reboot")
                }
            }
        )
    }
}

document.getElementById("bar_themes").addEventListener("click",w103.themes)
document.getElementById("bar_update").addEventListener("click",w103.update)
document.getElementById("bar_settings").addEventListener("click",w103.settings)
document.getElementById("t_dark").addEventListener("click",w103.setDark)
document.getElementById("t_light").addEventListener("click",w103.setLight)
document.getElementById("t_classic").addEventListener("click",w103.setClassic)
document.getElementById("s_save").addEventListener("click",w103.saveSettings)
document.getElementById("s_uninstall").addEventListener("click",w103.uninstall)

top.$file.open("/a/.pancake/config.json","String",function(e){
    let pancakeSaveConfig = JSON.parse(e)

    document.getElementById("s_bootlogo").checked = pancakeSaveConfig.bootlogo
    document.getElementById("s_rsstray").checked = pancakeSaveConfig.rsstray
    document.getElementById("s_dashtray").checked = pancakeSaveConfig.dashtray
    document.getElementById("s_titlegradient").checked = pancakeSaveConfig.titlegradient
    document.getElementById("s_wallpaper").checked = pancakeSaveConfig.wallpaper
})