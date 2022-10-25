import { objLoginDOM } from "../Collections/loginCollection.js"
import { objRegisterDOM } from "../Collections/registerCollection.js"

export class PasswordEvents {
    
    Login() {
        if (objLoginDOM.IconTimes != null) {
            objLoginDOM.IconEye.addEventListener("click", () => {
                objLoginDOM.DivLineEye.classList.toggle("visible")

                objLoginDOM.DivLineEye.classList[0]
                    ? objLoginDOM.InputPassword.type = "text"
                    : objLoginDOM.InputPassword.type = "password"
            })
        }
    }

    Register() {
        objRegisterDOM.IconEye.addEventListener("click", () => {
            objRegisterDOM.DivLineEye.classList.toggle("visible")

            objRegisterDOM.DivLineEye.classList[0]
                ? objRegisterDOM.InputPassword.type = "text"
                : objRegisterDOM.InputPassword.type = "password"
        })
    }
}