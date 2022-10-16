import { objListsDom } from "../Collections/listsCollection.js"

export class ListEvents {

    ChangeStateAnime() {

        objListsDom.buttonsAnime.forEach(element => {
            element.classList.remove("selected")
        })

        objListsDom.divListsAnime.forEach(element => {
            element.classList.remove("expand")
        })
    }

    ChangeStateMovie() {

        objListsDom.buttonsMovie.forEach(element => {
            element.classList.remove("selected")
        })

        objListsDom.divListsMovie.forEach(element => {
            element.classList.remove("expand")
        })
    }

    List() {
        objListsDom.divListAnime.classList.add("expand")
        objListsDom.buttonAnime.classList.add("selected")

        objListsDom.divListMovie.classList.add("expand")
        objListsDom.buttonMovie.classList.add("selected")

        objListsDom.buttonAnime.addEventListener("click", () => {
            this.ChangeStateAnime()

            objListsDom.buttonAnime.classList.add("selected")
            objListsDom.divListAnime.classList.add("expand")
        })

        objListsDom.buttonManga.addEventListener("click", () => {
            this.ChangeStateAnime()

            objListsDom.buttonManga.classList.add("selected")
            objListsDom.divListManga.classList.add("expand")
        })

        objListsDom.buttonMovie.addEventListener("click", () => {
            this.ChangeStateMovie()

            objListsDom.buttonMovie.classList.add("selected")
            objListsDom.divListMovie.classList.add("expand")
        })

        objListsDom.buttonSerie.addEventListener("click", () => {
            this.ChangeStateMovie()

            objListsDom.buttonSerie.classList.add("selected")
            objListsDom.divListSerie.classList.add("expand")
        })
    }
}