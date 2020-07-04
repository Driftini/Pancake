var w103_fileMain = ``
var w103_fileScript = atob("")
var w103_fileDashJS = atob("")
var w103_fileDashHTML = atob("")
var w103_fileDashCSS = atob("")
var w103_fileDarknight = atob("")

var w103_fileWizCSS = atob("")
var w103_fileWizJS = atob("")
var w103_fileWizHTML = atob("")

$alert(
    {
        msg: "Press \"Continue\" to start the Pancake Beta 1 Setup.\nWARNING: all unsaved data will be lost.",
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
)