document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("w103_progsidebar").children[0].style = "color: #ff0;font-weight: 700;"
    document.getElementById("w103_installNext").addEventListener("click", w103s.installCheck)
    document.getElementById("w103_installRestart").addEventListener("click", w103s.installRestart)
    document.getElementById("w103_logcloser").addEventListener("click", w103s.hideLog)
    document.getElementById("w103_logopener").addEventListener("click", w103s.showLog)
});

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
        document.getElementById("w103_progsidebar").children[0].children[0].src = "succ.png"
        document.getElementById("w103_installing").style.display = "block"
        document.getElementById("w103_progsidebar").children[0].style = ""

        if (document.getElementById("w103_copy").checked) {
            document.getElementById("w103_progsidebar").children[2].style = "color: #ff0;font-weight: 700;"
            document.getElementById("w103_fetchtext").innerHTML = "Copying Pancake files to WINDOWS93...<br>Please wait..."
            try {
                eg
                w103s.installDone()
            } catch (e) {
                document.getElementById("w103_progsidebar").children[2].children[0].src = "fail.png"
                document.getElementById("w103_fetchtext").innerHTML = "An error has occurred and the installation process has been halted.<br>Please try to restart the Pancake Setup.<br>If the problem persists, <a href='https://github.com/Driftini/Pancake/issues/new' target='_blank'>file an issue on the Pancake GitHub repo</a>.<br><br>The error will be displayed in the logs."
                w103s.log(e, true)
                w103s.showLog()
            }
        }
        else if (document.getElementById("w103_fetch").checked) {
            document.getElementById("w103_progsidebar").children[1].style = "color: #ff0;font-weight: 700;"
            try {
                //fetch script
                w103s.installDone()
                document.getElementById("w103_progsidebar").children[1].children[0].src = "succ.png"
            } catch (e) {
                document.getElementById("w103_progsidebar").children[1].children[0].src = "fail.png"
                document.getElementById("w103_fetchtext").innerHTML = "An error has occurred and the installation process has been halted.<br>Please try to restart the Pancake Setup.<br>If the problem persists, <a href='https://github.com/Driftini/Pancake/issues/new' target='_blank'>file an issue on the Pancake GitHub repo</a>.<br><br>The error will be displayed in the logs."
                w103s.log(e, true)
                w103s.showLog()
            }
        }
    },
    installDone: () => {
        document.getElementById("w103_progsidebar").children[2].children[0].src = "succ.png"
        document.getElementById("w103_progsidebar").children[1].style = ""
        document.getElementById("w103_progsidebar").children[2].style = ""
        document.getElementById("w103_progsidebar").children[3].style = "color: #ff0;font-weight: 700;"
        document.getElementById("w103_installing").style.display = "none"
        document.getElementById("w103_customize").style.display = "block"
    },
    installRestart: () => {
        document.getElementById("w103_progsidebar").children[3].style = ""
        document.getElementById("w103_progsidebar").children[3].children[0].src = "succ.png"
        document.getElementById("w103_progsidebar").children[4].style = "color: #ff0;font-weight: 700;"
        document.getElementById("w103_customize").style.display = "none"
        document.getElementById("w103_installing").style.display = "block"
        document.getElementById("w103_fetchtext").innerHTML = "Restarting..."
    }
}