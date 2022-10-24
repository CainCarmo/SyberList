import { objLoginDOM } from "../Collections/loginCollection.js"
import { objHeaderDOM } from "../Collections/headerCollection.js"

export class LoginEvents {
    
    Login() {
        if (objLoginDOM.FormLogin != null) {

            objHeaderDOM.ButtonLogin.addEventListener("click", () => {
                objLoginDOM.DivBackgroundForm.classList.add("visible")
                objLoginDOM.FormLogin.classList.add("down")
            })

            objLoginDOM.IconTimes.addEventListener("click", () => {
                objLoginDOM.DivBackgroundForm.classList.remove("visible")
                objLoginDOM.FormLogin.classList.remove("down")
            })
        }
    }
}