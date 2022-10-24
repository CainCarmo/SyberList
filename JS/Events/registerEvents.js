import { objRegisterDOM } from "../Collections/registerCollection.js"

export class RegisterEvents {

    Register() {
        objRegisterDOM.IconArrowReturn.addEventListener("click", () => history.back())
    }
}