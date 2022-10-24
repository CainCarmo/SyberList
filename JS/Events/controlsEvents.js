import { objControlsDOM } from "../Collections/controlsCollection.js"

export class ControlsEvents {

    Controls() {
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
            document.querySelector("html").classList.remove("light")
        })

        objControlsDOM.ThemeLight.addEventListener("click", () => {
            document.querySelector("html").classList.add("light")
        })
    }
}