import { objListsDOM } from "../Collections/listsCollection.js";

export class ListsEvents {
    
    ChangeStateAnime() {
        objListsDOM.ButtonsAnime.forEach(element => {
            element.classList.remove("selected")
        })

        objListsDOM.DivListsAnime.forEach(element => {
            element.classList.remove("expand")
        })
    }

    ChangeStateMovie() {
        objListsDOM.ButtonsMovie.forEach(element => {
            element.classList.remove("selected")
        })

        objListsDOM.DivListsMovie.forEach(element => {
            element.classList.remove("expand")
        })
    }

    List() {
        objListsDOM.DivListAnime.classList.add("expand")
        objListsDOM.ButtonAnime.classList.add("selected")

        objListsDOM.DivListMovie.classList.add("expand")
        objListsDOM.ButtonMovie.classList.add("selected")

        objListsDOM.ButtonAnime.addEventListener("click", () => {
            this.ChangeStateAnime()

            objListsDOM.ButtonAnime.classList.add("selected")
            objListsDOM.DivListAnime.classList.add("expand")
        })

        objListsDOM.ButtonManga.addEventListener("click", () => {
            this.ChangeStateAnime()

            objListsDOM.ButtonManga.classList.add("selected")
            objListsDOM.DivListManga.classList.add("expand")
        })

        objListsDOM.ButtonMovie.addEventListener("click", () => {
            this.ChangeStateMovie()

            objListsDOM.ButtonMovie.classList.add("selected")
            objListsDOM.DivListMovie.classList.add("expand")
        })

        objListsDOM.ButtonSerie.addEventListener("click", () => {
            this.ChangeStateMovie()

            objListsDOM.ButtonSerie.classList.add("selected")
            objListsDOM.DivListSerie.classList.add("expand")
        })
    }
}