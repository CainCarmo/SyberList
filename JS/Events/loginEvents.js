import { objLoginDom }  from "../Collections/loginCollection.js"
import { objHeaderDom } from "../Collections/headerCollection.js"

export class LoginEvents {

    Login() {

        if (objLoginDom.formLogin != null) {

            objHeaderDom.buttonLogin.addEventListener("click", () => {
                objLoginDom.backgroundFormLogin.classList.add("visible")
                objLoginDom.formLogin.classList.add("down")
            })
            
            objLoginDom.iconTimesLogin.addEventListener("click", () => {
                objLoginDom.backgroundFormLogin.classList.remove("visible")
                objLoginDom.formLogin.classList.remove("down")
            })
        }
    }
}