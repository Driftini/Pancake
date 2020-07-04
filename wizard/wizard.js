let fail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEUAAACAAAD/AAAAAAD///9mOKI0AAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhoANR3mi/wdAAAAPElEQVQI12NgwAIYBQUhtJCSkjCIAaSVlAyQGIwgWkkZxHBxcXFCZcCloAyEdiMYgxnIMgbbwWxsjGw1AIe0Cf0FFlmBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjUzOjI5LTA0OjAwza2qWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1MzoyOS0wNDowMLzwEuYAAAAASUVORK5CYII="
let succ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEUAAAAAAAAAgAD///+EsaEWAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoANRyRjMyLAAAAOElEQVQI12NgQADRAAYGxqylDAxsq1Y5AIl9DgxSq/ZNABK/YMTvV0BiP5BgWw9WAiTAOsB6QQAACqEU/HIVF3cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NTM6MjgtMDQ6MDBr2qHuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjUzOjI4LTA0OjAwGocZUgAAAABJRU5ErkJggg=="

let w103s = {
    showLog: () => {
        document.getElementById("w103_logwindow").style.display = "block"
        document.getElementById("w103_dockedlog").style.display = "none"
    },
    hideLog: () => {
        document.getElementById("w103_logwindow").style.display = "none"
        document.getElementById("w103_dockedlog").style.display = "block"
    },
    log: (msg, err) => {
        let newLog = document.createElement("li")
        newLog.innerText = msg
        if (err) {
            newLog.style.color = "#f00"
        }
        document.getElementById("w103_logbox").appendChild(newLog)
    },
    installCheck: () => {
        document.getElementById("w103_installmethod").style.display = "none"
        document.getElementById("w103_progsidebar").children[0].children[0].src = succ
        document.getElementById("w103_installing").style.display = "block"
        document.getElementById("w103_progsidebar").children[0].style = ""

        if (document.getElementById("w103_copy").checked) {
            document.getElementById("w103_progsidebar").children[2].style = "color: #ff0;font-weight: 700;"
            document.getElementById("w103_fetchtext").innerHTML = "Copying Pancake files to WINDOWS93...<br>Please wait..."
            try {
                top.$store.set("boot/pancake-main.css", top.w103_fileMain)
                w103s.log("/a/boot/pancake-main.css copied successfully")
                top.$store.set("boot/pancake.js", top.w103_fileScript)
                w103s.log("/a/boot/pancake.js copied successfully")
                top.$store.set(".pancake/dashboard/dashboard.css", top.w103_fileDashCSS)
                w103s.log("/a/.pancake/dashboard/dashboard.css copied successfully")
                top.$store.set(".pancake/dashboard/dashboard.js", top.w103_fileDashJS)
                w103s.log("/a/.pancake/dashboard/dashboard.js copied successfully")
                top.$store.set(".pancake/dashboard/dashboard.html", top.w103_fileDashHTML)
                w103s.log("/a/.pancake/dashboard/dashboard.html copied successfully")
                top.$store.set(".pancake/wallpapers/darknight.svg", top.w103_fileDarknight)
                w103s.log("/a/.pancake/wallpapers/darknight.svg copied successfully")
                w103s.installDone()
            } catch (e) {
                document.getElementById("w103_progsidebar").children[2].children[0].src = fail
                document.getElementById("w103_fetchtext").innerHTML = "An error has occurred and the installation process has been halted.<br>Please try to restart the Pancake Setup.<br>If the problem persists, <a href='https://github.com/Driftini/Pancake/issues/new' target='_blank'>file an issue on the Pancake GitHub repo</a>.<br><br>The error will be displayed in the logs."
                w103s.log(e, true)
                w103s.showLog()
            }
        }
        else if (document.getElementById("w103_fetch").checked) {
            document.getElementById("w103_progsidebar").children[1].style = "color: #ff0;font-weight: 700;"
            try {
                document.getElementById("w103_progsidebar").children[1].children[0].src = fail
                document.getElementById("w103_fetchtext").innerHTML = "Sorry, this feature is unavailable right now. Use the copy installation method."
                /*
                //fetch script
                w103s.installDone()
                document.getElementById("w103_progsidebar").children[1].children[0].src = succ*/
            } catch (e) {
                document.getElementById("w103_progsidebar").children[1].children[0].src = fail
                document.getElementById("w103_fetchtext").innerHTML = "An error has occurred and the installation process has been halted.<br>Please try to restart the Pancake Setup.<br>If the problem persists, <a href='https://github.com/Driftini/Pancake/issues/new' target='_blank'>file an issue on the Pancake GitHub repo</a>.<br><br>The error will be displayed in the logs."
                w103s.log(e, true)
                w103s.showLog()
            }
        }
    },
    installDone: () => {
        w103s.log("All files copied successfully")
        document.getElementById("w103_progsidebar").children[2].children[0].src = succ
        document.getElementById("w103_progsidebar").children[1].style = ""
        document.getElementById("w103_progsidebar").children[2].style = ""
        document.getElementById("w103_progsidebar").children[3].style = "color: #ff0;font-weight: 700;"
        document.getElementById("w103_installing").style.display = "none"
        document.getElementById("w103_customize").style.display = "block"
    },
    installRestart: () => {
        if (document.getElementById("w103_thdark").checked) {
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
        } else if (document.getElementById("w103_thlight").checked) {
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
        } else {
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
        }

        let pancakeSaveConfig = {}
        let pancakeSaveCSS = ""
        let pancakeSaveJS = ""
        pancakeSaveConfig.bootlogo = document.getElementById("w103_boot").checked
        pancakeSaveConfig.rsstray = document.getElementById("w103_rss").checked
        pancakeSaveConfig.dashtray = document.getElementById("w103_dash").checked
        pancakeSaveConfig.titlegradient = document.getElementById("w103_gradient").checked
        pancakeSaveConfig.wallpaper = document.getElementById("w103_darknight").checked
        if (!document.getElementById("w103_rss").checked) {
            pancakeSaveCSS = pancakeSaveCSS + "" + "#s42_feed > img[alt='rss'] {display: none;}"
        }
        if (document.getElementById("w103_gradient").checked) {
            pancakeSaveCSS = pancakeSaveCSS + "\n" + ".ui_window--active .ui_window__head {background-image: linear-gradient(90deg, var(--windowactivegradient1), var(--windowactivegradient2));} .ui_window__head {background-image: linear-gradient(90deg, var(--windowinactivegradient1), var(--windowinactivegradient2));}"
        }
        if (document.getElementById("w103_darknight").checked) {
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

        document.getElementById("w103_progsidebar").children[3].style = ""
        document.getElementById("w103_progsidebar").children[3].children[0].src = succ
        document.getElementById("w103_progsidebar").children[4].style = "color: #ff0;font-weight: 700;"
        document.getElementById("w103_customize").style.display = "none"
        document.getElementById("w103_installing").style.display = "block"
        document.getElementById("w103_fetchtext").innerHTML = "Restarting..."
        top.$exe("reboot")
    }
}

document.getElementById("w103_progsidebar").children[0].style = "color: #ff0;font-weight: 700;"
document.getElementById("w103_installNext").addEventListener("click", w103s.installCheck)
document.getElementById("w103_installRestart").addEventListener("click", w103s.installRestart)
document.getElementById("w103_logcloser").addEventListener("click", w103s.hideLog)
document.getElementById("w103_logopener").addEventListener("click", w103s.showLog)