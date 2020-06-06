document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("w103_progsidebar").children[0].style = "color: #ff0;font-weight: 700;"
    document.getElementById("w103_installNext").addEventListener("click", w103.installCheck)
    document.getElementById("w103_installRestart").addEventListener("click", w103.installRestart)
});

let w103 = {
    installCheck: () => {
        document.getElementById("w103_installmethod").style.display = "none"
        document.getElementById("w103_progsidebar").children[0].children[0].src = "succ.png"
        document.getElementById("w103_installing").style.display = "block"
        document.getElementById("w103_progsidebar").children[0].style = ""

        if (document.getElementById("w103_copy").checked) {
            document.getElementById("w103_progsidebar").children[2].style = "color: #ff0;font-weight: 700;"
            document.getElementById("w103_fetchtext").innerHTML = "Copying Win103 files to WINDOWS93...<br>Please wait..."
            try {
                w103.installDone()
            } catch (e) {
                document.getElementById("w103_progsidebar").children[2].children[0].src = "fail.png"
                document.getElementById("w103_fetchtext").innerHTML = "An error has occurred and the installation process has been halted.<br>Please try to restart the Win103 Setup.<br>If the problem persists, <a href='https://gitlab.com/Driftini/win103/-/issues/new' target='_blank'>file an issue on the Win103 GitLab repo</a>.<br><br><br><code>" + e + "</code>"
            }
        }
        else if (document.getElementById("w103_fetch").checked) {
            document.getElementById("w103_progsidebar").children[1].style = "color: #ff0;font-weight: 700;"
            try {
                //fetch script
                w103.installDone()
                document.getElementById("w103_progsidebar").children[1].children[0].src = "succ.png"
            } catch (e) {
                document.getElementById("w103_progsidebar").children[1].children[0].src = "fail.png"
                document.getElementById("w103_fetchtext").innerHTML = "An error has occurred and the installation process has been halted.<br>Please try to restart the Win103 Setup.<br>If the problem persists, <a href='https://gitlab.com/Driftini/win103/-/issues/new' target='_blank'>file an issue on the Win103 GitLab repo</a>.<br><br><br><code>" + e + "</code>"
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