import { objListsDom } from "../Collections/listsCollection.js"

export class ListEvents {

    ChangeState() {
        objListsDom.buttonsAnime.forEach(element => {
            element.classList.remove("selected")
        })

        objListsDom.divListsAnime.forEach(element => {
            element.classList.remove("expand")
        })
    }

    List() {
        objListsDom.divListAnime.classList.add("expand")
        objListsDom.buttonAnime.classList.add("selected")

        objListsDom.divListMovie.classList.add("expand")
        objListsDom.buttonMovie.classList.add("selected")

        objListsDom.buttonAnime.addEventListener("click", () => {
            this.ChangeState()

            objListsDom.buttonAnime.classList.add("selected")
            objListsDom.divListAnime.classList.add("expand")
        })

        objListsDom.buttonManga.addEventListener("click", () => {
            this.ChangeState()

            objListsDom.buttonManga.classList.add("selected")
            objListsDom.divListManga.classList.add("expand")
        })
    }
}