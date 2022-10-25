import { objControlsDOM } from "../Collections/controlsCollection.js"

export class ControlsEvents {

    ControlsError() {
        if (document.querySelector("#message__login") !== null) {
            document.querySelector("#message__login").addEventListener("click", () => {
                document.querySelector(".error#loginMessage").remove(self)
            })
        }

        if (document.querySelector("#message__saved") !== null) {
            document.querySelector("#message__saved").addEventListener("click", () => {
                document.querySelector(".error#savedMessage").remove(self)
            })
        }
    }

    Controls(atualPage) {
        const metaThemeColor   = document.querySelector('meta[name=theme-color]')
        const nightModeStorage = localStorage.getItem('gmtNightMode')
        
        if (!nightModeStorage) {
            document.querySelector("html").classList.add("light")
            metaThemeColor.setAttribute('content', '#005f97')
        }
        else {
            metaThemeColor.setAttribute('content', '#2b2b2b')
        }

        if (atualPage.split(".")[0] === "details") {
            setTimeout(() => {
                this.DisqusReset()
            }, 900)
        }
        
        objControlsDOM.FooterControl.addEventListener("click", () => {
            objControlsDOM.FooterControl.classList.toggle("clicked")

            if (objControlsDOM.FooterControl.classList.contains("clicked")) {
                objControlsDOM.IconBars.classList.remove("fa-bars")
                objControlsDOM.IconBars.classList.add("fa-times")
            }
            else {
                objControlsDOM.IconBars.classList.remove("fa-times")
                objControlsDOM.IconBars.classList.add("fa-bars")
                objControlsDOM.ThemeColors.forEach(element => {
                    element.classList.remove("clicked")
                })
            }
        })

        objControlsDOM.FooterTheme.addEventListener("click", () => {
            objControlsDOM.ThemeColors.forEach(element => {
                element.classList.toggle("clicked")
            })
        })

        objControlsDOM.ThemeDark.addEventListener("click", () => {
            metaThemeColor.setAttribute('content', '#2b2b2b')
            localStorage.setItem('gmtNightMode', true)
            document.querySelector("html").classList.remove("light")

            if (atualPage.split(".")[0] === "details") {
                setTimeout(() => {
                    this.DisqusReset()
                }, 900)
            }
        })

        objControlsDOM.ThemeLight.addEventListener("click", () => {
            metaThemeColor.setAttribute('content', '#005f97')
            localStorage.removeItem('gmtNightMode')
            document.querySelector("html").classList.add("light")
            
            if (atualPage.split(".")[0] === "details") {
                setTimeout(() => {
                    this.DisqusReset()
                }, 900)
            }
        })
    }

    DisqusReset() {
        const pageUrl = document.location.href;

        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = pageUrl;
                this.page.url = pageUrl;
            }
        });
    }
}