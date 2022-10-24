import { FactoryDOM }    from "../DOM/factoryDom.js"
import { RequestsJikan } from "../JikanAPI/requests.js" 
import { RequestsTmdb }  from "../TmdbAPI/requests.js"
import { objHeaderDOM }  from "../Collections/headerCollection.js"

export class SearchEvents {

    constructor() {
        this.oFactoryDOM    = new FactoryDOM()
        this.oRequestsJikan = new RequestsJikan()
        this.oRequestsTmdb  = new RequestsTmdb()
    }

    Find(pageType) { 
        
        switch(pageType) {
            case "anime":
            case "manga":
                
                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("anime", "Anime"))
                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("manga", "Mangá"))
                break

            case "tv":
            case "movie":

                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("tv", "Série"))
                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("movie", "Filme"))
                break
        }

        objHeaderDOM.IconSearchHeader.addEventListener("click", () => {
            objHeaderDOM.DivSearchBox.classList.toggle("max")
        })

        objHeaderDOM.InputSearch.addEventListener("input", () => {
            if (objHeaderDOM.InputSearch.value.length > 0) {
                objHeaderDOM.DivTimesWrapper.classList.add("visible")
            }
            else {
                objHeaderDOM.DivTimesWrapper.classList.remove("visible")
                objHeaderDOM.DivSearchResults.classList.remove("max")
            }
        })

        objHeaderDOM.FormSearch.addEventListener("submit", event => {
            event.preventDefault()

            let query = objHeaderDOM.InputSearch.value
            objHeaderDOM.DivSearchResults.innerHTML = null

            switch(pageType)  {
                case "anime":
                case "manga":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsJikan.GetAnimeSearch(query)
                        : this.oRequestsJikan.GetMangaSearch(query)
                    break

                case "tv":
                case "movie":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsTmdb.GetTvSearch(query)
                        : this.oRequestsTmdb.GetMovieSearch(query)
                    break
            }

            objHeaderDOM.DivSearchResults.classList.add("max")
        })

        objHeaderDOM.IconSearchForm.addEventListener("click", event => {
            event.preventDefault()

            let query = objHeaderDOM.InputSearch.value
            objHeaderDOM.DivSearchResults.innerHTML = null

            switch(pageType)  {
                case "anime":
                case "manga":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsJikan.GetAnimeSearch(query)
                        : this.oRequestsJikan.GetMangaSearch(query)
                    break

                case "tv":
                case "movie":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsTmdb.GetTvSearch(query)
                        : this.oRequestsTmdb.GetMovieSearch(query)
                    break
            }

            objHeaderDOM.DivSearchResults.classList.add("max")
        })

        objHeaderDOM.IconTimesSearch.addEventListener("click", () => {
            objHeaderDOM.DivSearchResults.classList.remove("max")
            objHeaderDOM.DivTimesWrapper.classList.remove("visible")
            objHeaderDOM.InputSearch.value = ""
        })
    }

    Search(pageType) {
        switch(pageType) {
            case "anime":
            case "manga":

                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("anime", "Anime"))
                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("manga", "Mangá"))
                break

            case "tv":
            case "movie":

                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("tv", "Série"))
                objHeaderDOM.SelectSearch.appendChild(this.oFactoryDOM.CreateSelectOption("movie", "Filme"))
                break
        }

        objHeaderDOM.IconSearchHeader.addEventListener("click", () => {
            objHeaderDOM.DivSearchBox.classList.toggle("max")
        })

        objHeaderDOM.InputSearch.addEventListener("input", () => {
            objHeaderDOM.InputSearch.value.length > 0
                ? objHeaderDOM.DivTimesWrapper.classList.add("visible")
                : objHeaderDOM.DivTimesWrapper.classList.remove("visible")
        })

        objHeaderDOM.FormSearch.addEventListener("submit", event => {
            event.preventDefault()

            let query = objHeaderDOM.InputSearch.value

            switch(pageType)  {
                case "anime":
                case "manga":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsJikan.GetAnimeFind(query)
                        : this.oRequestsJikan.GetMangaFind(query)
                    break

                case "tv":
                case "movie":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsTmdb.GetTvFind(query)
                        : this.oRequestsTmdb.GetMovieFind(query)
                    break
            }
        })

        objHeaderDOM.IconSearchForm.addEventListener("click", event => {
            event.preventDefault()

            let query = objHeaderDOM.InputSearch.value

            switch(pageType)  {
                case "anime":
                case "manga":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsJikan.GetAnimeSearch(query)
                        : this.oRequestsJikan.GetMangaSearch(query)
                    break

                case "tv":
                case "movie":

                    objHeaderDOM.SelectSearch.value === "anime"
                        ? this.oRequestsTmdb.GetTvSearch(query)
                        : this.oRequestsTmdb.GetMovieSearch(query)
                    break
            }
        })

        objHeaderDOM.IconTimesSearch.addEventListener("click", () => {
            objHeaderDOM.DivTimesWrapper.classList.remove("visible")
            objHeaderDOM.InputSearch.value = ""
        })
    }
}