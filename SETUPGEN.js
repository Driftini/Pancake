var fs = require("fs")

console.log("Pancake Setup generator (BETA 1)")
console.log("Please report any eventual issues in https://github.com/Driftini/Pancake/issues/new")

var main = ""
var script = ""
var dashJS = ""
var dashHTML = ""
var dashCSS = ""
var darknight = ""

var wizCSS = ""
var wizJS = ""
var wizHTML = ""

function setupgen() {
    if(main.length != 0 && script.length != 0 && dashJS.length != 0 && dashHTML.length != 0 && dashCSS.length != 0 && darknight.length != 0 && wizCSS.length != 0 && wizJS.length != 0 && wizCSS.length != 0 && wizHTML.length != 0) {
        fs.writeFile("./PancakeSetup.js", `var w103_fileMain = \`${main}\`
        var w103_fileScript = atob("${script}")
        var w103_fileDashJS = atob("${dashJS}")
        var w103_fileDashHTML = atob("${dashHTML}")
        var w103_fileDashCSS = atob("${dashCSS}")
        var w103_fileDarknight = atob("${darknight}")
        
        var w103_fileWizCSS = atob("${wizCSS}")
        var w103_fileWizJS = atob("${wizJS}")
        var w103_fileWizHTML = atob("${wizHTML}")
        
        $alert(
            {
                msg: "Press \\"Continue\\" to start the Pancake Beta 1 Setup.\\nWARNING: all unsaved data will be lost.",
                title: "Pancake Setup",
                btnOk: "Continue",
                btnCancel: "Cancel",
                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABLElEQVRYheWW6w7DIAiFeXQfzTdjPzZaPQKC1SXLSEjTTT2fcrFECSul8BPPaKnitdYlZ2YBWIMopfATa04gDyDiq7uvte4BWIm5gG8D+CwQ8oMAHPKzAPz3ACdDgAO/CiCTEGBsqQcA2gkyUOuA9/8+SAoAB4uID0B7GpEmLm6JEFF30XiGAMPtKKIoLoNQBHcfvQtwznUi+CN6u9M79vGWrAEPIWljhibHfYuPRxl13GSXEx5AL57Lgda0XGrT0SgpFB/jmf0uSAL04phQ0RzYAmBltLxLSLTSc+MfAbBKyktIr48MDckDsGqaiPh9ObP6TIjbVaA1qGjcDddtAWCv/QRARDzSEdU1ZgBRcSsh5Wmu4QFExa3bNLQBq62uijPnP0jzpTOfN13jBaj0Kzxbgu8JAAAAAElFTkSuQmCC"
            }, function(ok) {
                if(ok) {
                    $exe("killall")
                    document.body.style.background = "black"
                    document.body.removeChild(document.getElementById("s42_screen"))
                    $file.save("/a/.pancake/temp/wizard.css",w103_fileWizCSS,function(){
                        $file.save("/a/.pancake/temp/wizard.js",w103_fileWizJS,function(){
                            $file.save("/a/.pancake/temp/wizard.html",w103_fileWizHTML,function(){
                                $file.getUrl("/a/.pancake/temp/wizard.html",function(url){
                                    var w103iframe = document.createElement("iframe")
                                    w103iframe.style.width = "100%"
                                    w103iframe.style.height = "100%"
                                    w103iframe.style.position = "absolute"
                                    w103iframe.style.top = 0
                                    w103iframe.style.left = 0
                                    w103iframe.style.background = "black"
                                    w103iframe.src = url
                                    document.body.appendChild(w103iframe)
                                })
                            })
                        })
                    })
                }
            }
        )`, "utf8", function(err) {
            if (err) {
                throw "[ERROR] " + err
            }
            console.log("[INFO] Setup script generated successfully!")
            console.log("You can either execute PancakeSetup.js in WINDOWS93's terminal to start the Setup or create a shortcut in WINDOWS93 with its command set to \"js [PancakeSetup.js's content]\".")
        })
    }
}

fs.readFile("./pancake-main.css", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    main = data
    console.log("[INFO] ./pancake-main.css found.")
    setupgen()
})

fs.readFile("./pancake.js", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    script = Buffer.from(data).toString('base64')
    console.log("[INFO] ./pancake.js found.")
    setupgen()
})

fs.readFile("./dashboard.js", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    dashJS = Buffer.from(data).toString('base64')
    console.log("[INFO] ./dashboard.js found.")
    setupgen()
})

fs.readFile("./dashboard.css", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    dashCSS = Buffer.from(data).toString('base64')
    console.log("[INFO] ./dashboard.css found.")
    setupgen()
})

fs.readFile("./dashboard.html", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    dashHTML = Buffer.from(data).toString('base64')
    console.log("[INFO] ./dashboard.html found.")
    setupgen()
})

fs.readFile("./res/darknight.svg", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    darknight = Buffer.from(data).toString('base64')
    console.log("[INFO] ./res/darknight.svg found.")
    setupgen()
})

fs.readFile("./wizard/wizard.html", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    wizHTML = Buffer.from(data).toString('base64')
    console.log("[INFO] ./wizard/wizard.html found.")
    setupgen()
})

fs.readFile("./wizard/wizard.js", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    wizJS = Buffer.from(data).toString('base64')
    console.log("[INFO] ./wizard/wizard.js found.")
    setupgen()
})

fs.readFile("./wizard/wizard.css", "utf8", function(err,data) {
    if (err) {
        throw "[ERROR] " + err
    }
    wizCSS = Buffer.from(data).toString('base64')
    console.log("[INFO] ./wizard/wizard.js found.")
    setupgen()
})
