import { objLoginDom }    from "../Collections/loginCollection.js"
import { objRegisterDom } from "../Collections/registerCollection.js"

export class PasswordEvents {

    PasswordLogin() {
        if (objLoginDom.iconTimesLogin != null) {

            objLoginDom.iconEyeLogin.addEventListener("click", () => {
                objLoginDom.divLineEyeLogin.classList.toggle("visible")

                objLoginDom.divLineEyeLogin.classList[0]
                    ? objLoginDom.inputPasswordLogin.type = "text"
                    : objLoginDom.inputPasswordLogin.type = "password"
            })

        }
    }

    PasswordRegister() {
        objRegisterDom.iconEyeLogin.addEventListener("click", () => {
            objRegisterDom.divLineEyeLogin.classList.toggle("visible")

            objRegisterDom.divLineEyeLogin.classList[0]
                ? objRegisterDom.inputPasswordLogin.type = "text"
                : objRegisterDom.inputPasswordLogin.type = "password"
        })
    }
}