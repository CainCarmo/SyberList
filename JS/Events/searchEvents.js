import { FactoryDom }    from "../DOM/factoryDom.js"
import { RequestsJikan } from "../JikanAPI/requests.js" 
import { RequestsTmdb }  from "../TmdbAPI/requests.js"
import { objHeaderDom }  from "../Collections/headerCollection.js"

export class SearchEvents {

    constructor() {
        this.oFactoryDom    = new FactoryDom()
        this.oRequestsJikan = new RequestsJikan()
        this.oRequestsTmdb  = new RequestsTmdb()
    }

    Search(pageType) {
        window.addEventListener("load", () => {
            
            switch(pageType) {
                case "anime":
                case "manga":

                    objHeaderDom.selectSearch.appendChild(this.oFactoryDom.CreateSelectOption("anime", "Anime"))
                    objHeaderDom.selectSearch.appendChild(this.oFactoryDom.CreateSelectOption("manga", "Mangá"))
                    break
                
                case "tv":
                case "movie":
                    
                    objHeaderDom.selectSearch.appendChild(this.oFactoryDom.CreateSelectOption("tv", "Série"))
                    objHeaderDom.selectSearch.appendChild(this.oFactoryDom.CreateSelectOption("movie", "Filme"))
                    break
            }

            objHeaderDom.iconSearchHeader.addEventListener("click", () => objHeaderDom.divSearchBox.classList.toggle("max"))

            objHeaderDom.inputSearch.addEventListener("input", () => {
                objHeaderDom.inputSearch.value.length > 0
                    ? objHeaderDom.divTimesWrapper.classList.add("visible")
                    : objHeaderDom.divTimesWrapper.classList.remove("visible")
                
                objHeaderDom.inputSearch.value.length === 0
                    ? objHeaderDom.divSearchResults.classList.remove("max")
                    : ""
            })

            objHeaderDom.formSearch.addEventListener("submit", async e => {
                e.preventDefault()

                objHeaderDom.divSearchResults.innerHTML = null
                
                let query = objHeaderDom.inputSearch.value

                switch(pageType) {
                    case "anime":
                    case "manga":
    
                        objHeaderDom.selectSearch.value === "anime"
                        ? await this.oRequestsJikan.GetAnimeSearch(query)
                        : await this.oRequestsJikan.GetMangaSearch(query)
                        break
                    
                    case "tv":
                    case "movie":
                        
                        objHeaderDom.selectSearch.value === "tv"
                        ? await this.oRequestsTmdb.GetTvSearch(query)
                        : await this.oRequestsTmdb.GetMovieSearch(query)
                        break
                }
                
                objHeaderDom.divSearchResults.classList.add("max")
            })

            objHeaderDom.iconSearch.addEventListener("click", async e => {
                e.preventDefault()
                
                objHeaderDom.divSearchResults.innerHTML = null

                let query = objHeaderDom.inputSearch.value

                switch(pageType) {
                    case "anime":
                    case "manga":
    
                        objHeaderDom.selectSearch.value === "anime"
                        ? await this.oRequestsJikan.GetAnimeSearch(query)
                        : await this.oRequestsJikan.GetMangaSearch(query)
                        break
                    
                    case "tv":
                    case "movie":
                        
                        objHeaderDom.selectSearch.value === "tv"
                        ? await this.oRequestsTmdb.GetTvSearch(query)
                        : await this.oRequestsTmdb.GetMovieSearch(query)
                        break
                }
                
                objHeaderDom.divSearchResults.classList.add("max")
            })

            objHeaderDom.iconTimesSearch.addEventListener("click", () => {
                objHeaderDom.divSearchResults.classList.toggle("max")
                objHeaderDom.divTimesWrapper.classList.remove("visible")
                objHeaderDom.inputSearch.value = ""
            })
        })
    }
}