import { objRegisterDom } from "../Collections/registerCollection.js"

export class RegisterEvents {

    Register() {
        objRegisterDom.iconArrowReturn.addEventListener("click", () => history.back())
    }
}