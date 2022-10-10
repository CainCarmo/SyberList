import { RequestsJikan } from "../JikanAPI/requests.js"
import { RequestsTmdb }  from "../TmdbAPI/requests.js" 
import { FactoryDom }    from "../DOM/factoryDom.js"
import { objBrowse }     from "../Collections/browseCollection.js"
import { objHeaderDom }  from "../Collections/headerCollection.js"

export class BrowseEvents {

    constructor() {
        this.oFactoryDom    = new FactoryDom()
        this.oRequestsJikan = new RequestsJikan()
        this.oRequestsTmdb  = new RequestsTmdb()
    }

    Browse(pageType) {
        
        //#region Set de Eventos e Métodos da Caixa de Pesquisa

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
        })

        objHeaderDom.iconSearchHeader.addEventListener("click", () => objHeaderDom.divSearchBox.classList.toggle("max"))

        objHeaderDom.inputSearch.addEventListener("input", () => {
            objHeaderDom.inputSearch.value.length > 0
                ? objHeaderDom.divTimesWrapper.classList.add("visible")
                : objHeaderDom.divTimesWrapper.classList.remove("visible")
        })

        objHeaderDom.formSearch.addEventListener("submit", async e => {
            e.preventDefault()
            
            let query = objHeaderDom.inputSearch.value

            switch(pageType) {
                case "anime":
                case "manga":

                    objHeaderDom.selectSearch.value === "anime"
                    ? await this.oRequestsJikan.GetAnimeBrowse(query)
                    : await this.oRequestsJikan.GetMangaBrowse(query)
                    break
                
                case "tv":
                case "movie":
                    
                    objHeaderDom.selectSearch.value === "tv"
                    ? await this.oRequestsTmdb.GetTvBrowse(query)
                    : await this.oRequestsTmdb.GetMovieBrowse(query)
                    break
            }
        })

        objHeaderDom.iconSearch.addEventListener("click", async e => {
            e.preventDefault()

            let query = objHeaderDom.inputSearch.value

            switch(pageType) {
                case "anime":
                case "manga":

                    objHeaderDom.selectSearch.value === "anime"
                    ? await this.oRequestsJikan.GetAnimeBrowse(query)
                    : await this.oRequestsJikan.GetMangaBrowse(query)
                    break
                
                case "tv":
                case "movie":
                    
                    objHeaderDom.selectSearch.value === "tv"
                    ? await this.oRequestsTmdb.GetTvBrowse(query)
                    : await this.oRequestsTmdb.GetMovieBrowse(query)
                    break
            }
        })

        objHeaderDom.iconTimesSearch.addEventListener("click", () => {
            objHeaderDom.divTimesWrapper.classList.remove("visible")
            objHeaderDom.inputSearch.value = ""
        })

        //#endregion

        objBrowse.buttonsOption.forEach((elemtent, index) => {
            elemtent.addEventListener("click", () => {
                objBrowse.iconChevron[index].classList.toggle("turn")
                objBrowse.divsOption[index].classList.toggle("expand")
            })
        })
    }
}