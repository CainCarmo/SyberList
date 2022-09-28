// -> Importaçõs de Coleções e Métodos
import { RequestsJikan }  from "./JikanAPI/requests.js"
import { FactoryDom }     from "./DOM/factoryDom.js"
import { objIntroDom }    from "./Collections/introCollection.js"
import { objHeaderDom }   from "./Collections/headerCollection.js"
import { objLoginDom }    from "./Collections/loginCollection.js"
import { objRegisterDom } from "./Collections/registerCollection.js"
import { objListsDom }    from "./Collections/listsCollection.js"
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

                await oRequests.GetMangaFullByID(itemID)
                await oRequests.GetMangaCharacters(itemID)
                await oRequests.GetMangaPictures(itemID)

                setTimeout(async () => {
                    await oRequests.GetMangaRecommendations(itemID)
                }, 3100)

                break

        }
        
        ButtonFavorite()
    })
}

function DetailsFilmEvents() {  }

function RegisterEvents() { objRegisterDom.iconArrowReturn.addEventListener("click", () => history.back()) }

function ListsEvents() {
    function ChangeState() {
        objListsDom.buttonsAnime.forEach(e => {
            e.classList.remove("selected")
        })

        objListsDom.divListsAnime.forEach((e, i) => {
            e.classList.remove("expand")
        })
    }

    window.addEventListener("load", () => {
        objListsDom.buttonWatch.classList.add("selected")
        objListsDom.divListAnimeWatch.classList.add("expand")
    })

    objListsDom.buttonWatch.addEventListener("click", () => {
        ChangeState()

        objListsDom.buttonWatch.classList.add("selected")
        objListsDom.divListAnimeWatch.classList.add("expand")
    })

    objListsDom.buttonWatching.addEventListener("click", () => {
        ChangeState()

        objListsDom.buttonWatching.classList.add("selected")
        objListsDom.divListAnimeWatching.classList.add("expand")
    })

    objListsDom.buttonWatched.addEventListener("click", () => {
        ChangeState()

        objListsDom.buttonWatched.classList.add("selected")
        objListsDom.divListAnimeWatched.classList.add("expand")
    })

    objListsDom.buttonDrop.addEventListener("click", () => {
        ChangeState()

        objListsDom.buttonDrop.classList.add("selected")
        objListsDom.divListAnimeWatchDrop.classList.add("expand")
    })
}

/**
 *  -> Form Login Events
 */

function LoginFormEvents() {
    if (objLoginDom.formLogin != null) {

        objHeaderDom.buttonLogin.addEventListener("click", () => {
            objLoginDom.backgroundFormLogin.classList.add("visible")
            objLoginDom.formLogin.classList.add("down")
        })
        
        objLoginDom.iconTimesLogin.addEventListener("click", () => {
            objLoginDom.backgroundFormLogin.classList.remove("visible")
            objLoginDom.formLogin.classList.remove("down")
        })
    }
}

/**
 *  -> Fields Events
 */

function SearchFieldEvents(pageType) {
    window.addEventListener("load", () => {
        switch(pageType) {
            case "anime":
            case "manga":
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

        objHeaderDom.divSearchResults.innerHTML = null
        
        let query = objHeaderDom.inputSearch.value

        objHeaderDom.selectSearch.value === "anime"
            ? await oRequests.GetAnimeSearch(query)
            : await oRequests.GetMangaSearch(query)
        
        objHeaderDom.divSearchResults.classList.add("max")
    })

    objHeaderDom.iconSearch.addEventListener("click", async e => {
        e.preventDefault()
        
        objHeaderDom.divSearchResults.innerHTML = null

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
            
            if (objLoginDom.iconTimesLogin != null) {

                objLoginDom.iconEyeLogin.addEventListener("click", () => {
                    objLoginDom.divLineEyeLogin.classList.toggle("visible")
    
                    objLoginDom.divLineEyeLogin.classList[0]
                        ? objLoginDom.inputPasswordLogin.type = "text"
                        : objLoginDom.inputPasswordLogin.type = "password"
                })

            }

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

function ButtonFavorite() {
    const button = document.querySelector("#form__submit")
    const star   = document.querySelector("#star-details")

    button.addEventListener("click", () => {
        star.classList.remove("fa-regular")
        star.classList.add("fa-solid")
        star.classList.add("fa-checked")
    })

    star.addEventListener("mouseenter", () => {
        if (star.classList.contains("fa-regular")) {
            star.classList.remove("fa-regular")
            star.classList.add("fa-solid")
        }
    })

    star.addEventListener("mouseleave", () => {
        if (star.classList.contains("fa-solid") && !star.classList.contains("fa-checked")) {
            star.classList.remove("fa-solid")
            star.classList.add("fa-regular")
        }
    })
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

        objHeaderDom.linkHome.href = `${objURL.homePage}?type=${paramURL}`
        objHeaderDom.linkList.href = `${objURL.listsPage}?type=${paramURL}`
    }

    switch (objURL.atualPage) {
        case objURL.indexPage:
            IntroEvents()
            break

        case objURL.homePage:
            if (paramURL === "anime" || paramURL === "manga")
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
            PasswordFieldEvents(objURL.atualPage)
            break

        case objURL.listsPage:

            ListsEvents()
            LoginFormEvents()
            SearchFieldEvents(paramURL)
            PasswordFieldEvents(objURL.atualPage)

            break
    }
}

VerifyPage()