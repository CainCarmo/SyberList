// -> Importaçõs de Coleções e Métodos
import { RequestsJikan }  from "./JikanAPI/requests.js"
import { FactoryDom }     from "./DOM/factoryDom.js"
import { objIntroDom }    from "./Collections/introCollection.js"
import { objHeaderDom }   from "./Collections/headerCollection.js"
import { objHomeDom }     from "./Collections/homeCollection.js"
import { objDetailsDom }  from "./Collections/detailsCollection.js"
import { objLoginDom }    from "./Collections/loginCollection.js"
import { objRegisterDom } from "./Collections/registerCollection.js"
import { objURL }         from "./Collections/urlCollection.js"

/**
 *  -> Instanciando as Classes
 */

 const oRequests   = new RequestsJikan()
 const oFactoryDom = new FactoryDom()

/**
 *  -> Pages Events
 */

 function IntroEvents() {
    objIntroDom.btnAnime.addEventListener("mouseover", () => {
        objIntroDom.boxAnime.classList.add("hover")
        objIntroDom.videoAnime.play()
    })

    objIntroDom.btnAnime.addEventListener("mouseleave", () => {
        objIntroDom.boxAnime.classList.remove("hover")
        objIntroDom.videoAnime.pause()
    })

    objIntroDom.btnFilms.addEventListener("mouseover", () => {
        objIntroDom.boxFilms.classList.add("hover")
        objIntroDom.videoFilms.play()
    })

    objIntroDom.btnFilms.addEventListener("mouseleave", () => {
        objIntroDom.boxFilms.classList.remove("hover")
        objIntroDom.videoFilms.pause()
    })
}

function HomeAnimeEvents() {
    window.addEventListener("load", async () => {
        await oRequests.GetAnimeBanner(38000)
        await oRequests.GetRankingAnime()
        await oRequests.GetSeasonNow()

        setTimeout(async() => {
            await oRequests.GetSeasonUpComming()
            await oRequests.GetRecentAnimeRecommendations()
            await oRequests.GetRankingManga()
        }, 3100)

        setTimeout(async() => {
            await oRequests.GetRecentMangaRecommendations()
        }, 6100)
    })
}

function HomeFilmEvents() { }

function DetailsAnimeEvents(paramURL, itemID) {
    window.addEventListener("load", async () => {
        switch (paramURL) {
            case "anime":

                await oRequests.GetAnimeFullByID(itemID)
                await oRequests.GetAnimeCharacters(itemID)
                await oRequests.GetAnimeRecommendations(itemID)

                break
            
            case "manga":

                break

        }
    })
}

function DetailsFilmEvents() {  }

function RegisterEvents() { 
    objRegisterDom.iconArrowReturn.addEventListener("click", () => history.back())
}

/**
 *  -> Form Login Events
 */

function LoginFormEvents() {
    objHeaderDom.buttonLogin.addEventListener("click", () => {
        objLoginDom.backgroundFormLogin.classList.add("visible")
        objLoginDom.formLogin.classList.add("down")
    })
    
    objHeaderDom.iconTimesSearch.addEventListener("click", () => {
        objLoginDom.backgroundFormLogin.classList.remove("visible")
        objLoginDom.formLogin.classList.remove("down")
    })
}

/**
 *  -> Fields Events
 */

function SearchFieldEvents(pageType) {
    window.addEventListener("load", () => {
        switch(pageType) {
            case "anime":
                objHeaderDom.selectSearch.appendChild(oFactoryDom.CreateSelectOption("anime", "Anime"))
                objHeaderDom.selectSearch.appendChild(oFactoryDom.CreateSelectOption("manga", "Mangá"))
                break
            
            case "film":
                objHeaderDom.selectSearch.appendChild(oFactoryDom.CreateSelectOption("film", "Filme"))
                objHeaderDom.selectSearch.appendChild(oFactoryDom.CreateSelectOption("serie", "Série"))
                break
        }
    })

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
        
        let query = objHeaderDom.inputSearch.value

        pageType === "anime"
            ? await oRequests.GetAnimeSearch(query)
            : await oRequests.GetMangaSearch(query)
        
        objHeaderDom.divSearchResults.classList.add("max")
    })

    objHeaderDom.iconSearch.addEventListener("click", async e => {
        e.preventDefault()
        
        let query = objHeaderDom.inputSearch.value

        pageType === "anime"
            ? await oRequests.GetAnimeSearch(query)
            : await oRequests.GetMangaSearch(query)
        
        objHeaderDom.divSearchResults.classList.add("max")
    })

    objHeaderDom.iconTimesSearch.addEventListener("click", () => {
        objHeaderDom.divSearchResults.classList.toggle("max")
        objHeaderDom.inputSearch.value = ""
    })
}

function PasswordFieldEvents(atualPage) {
    switch (atualPage) {
        case objURL.homePage:
        case objURL.detailsPage:
            
            objLoginDom.iconEyeLogin.addEventListener("click", () => {
                objLoginDom.divLineEyeLogin.classList.toggle("visible")

                objLoginDom.divLineEyeLogin.classList[0]
                    ? objLoginDom.inputPasswordLogin.type = "text"
                    : objLoginDom.inputPasswordLogin.type = "password"
            })

            break
    
        case objURL.registerPage:

            objRegisterDom.iconEyeLogin.addEventListener("click", () => {
                objRegisterDom.divLineEyeLogin.classList.toggle("visible")

                objRegisterDom.divLineEyeLogin.classList[0]
                    ? objRegisterDom.inputPasswordLogin.type = "text"
                    : objRegisterDom.inputPasswordLogin.type = "password"
            })

            break
    }
}

/*
 *  -> Verify page URL and Add Events
 */

function VerifyPage() {
    let paramURL = ""
    let itemID   = ""

    if (objURL.atualPage !== objURL.indexPage && objURL.atualPage !== objURL.registerPage) {
        paramURL = document.location.href.split("/")[3].split("=")[1].split("&")[0]
        itemID   = document.location.href.split("/")[3].split("=")[2]

        objHeaderDom.linkHome.href = "home.php?q=" + paramURL
    }

    switch (objURL.atualPage) {
        case objURL.indexPage:
            IntroEvents()
            break

        case objURL.homePage:
            if (paramURL === "anime")
                HomeAnimeEvents()
            else
                HomeFilmEvents()

            LoginFormEvents()
            SearchFieldEvents(paramURL)
            PasswordFieldEvents(objURL.atualPage)
            
            break

        case objURL.detailsPage:
            if (paramURL === "anime" || paramURL === "manga")
                DetailsAnimeEvents(paramURL, itemID)
            else
                DetailsFilmEvents()

            LoginFormEvents()
            SearchFieldEvents(paramURL)
            PasswordFieldEvents(objURL.atualPage)

            break

        case objURL.registerPage:
            RegisterEvents()
            break
    }
}

VerifyPage()