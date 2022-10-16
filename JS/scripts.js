/**
 * -> Importanto as Collections
 */

import { objURL }       from "./Collections/urlCollection.js"
import { objHeaderDom } from "./Collections/headerCollection.js"

/**
 * -> Importando as Classes
 */

import { IntroEvents }    from "./Events/introEvents.js"
import { HomeEvents }     from "./Events/homeEvents.js"
import { DetailsEvents }  from "./Events/detailsEvents.js"
import { BrowseEvents }   from "./Events/browseEvents.js"
import { RegisterEvents } from "./Events/registerEvents.js"
import { ListEvents }     from "./Events/listEvents.js"
import { LoginEvents }    from "./Events/loginEvents.js"
import { PasswordEvents } from "./Events/passwordEvents.js"
import { FavoriteEvents}  from "./Events/favoriteEvents.js"
import { SearchEvents }   from "./Events/searchEvents.js"
import { objHomeDom } from "./Collections/homeCollection.js"

/**
 * -> Instanciando as Classes
 */

const oIntroEvents    = new IntroEvents()
const oHomeEvents     = new HomeEvents()
const oDetailsEvents  = new DetailsEvents()
const oBrowseEvents   = new BrowseEvents()
const oRegisterEvents = new RegisterEvents()
const oListEvents     = new ListEvents()
const oLoginEvents    = new LoginEvents()
const oPasswordEvents = new PasswordEvents()
const oFavoriteEvents = new FavoriteEvents()
const oSearchEvents   = new SearchEvents()

/**
 * -> Links de vídeos usados
 */

const videoHomeAnime    = "./Resources/Video/mylivewallpapers.com-Nier-Automata-Team.mp4"
const videoDetailsAnime = "./Resources/Video/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4"
const videoHomeMovie    = "./Resources/Video/mylivewallpapers.com-The-Batman-2022.mp4"
const videoDetailsMovie = "./Resources/Video/mylivewallpapers-com-Moon-Knight.mp4"

/**
 * -> Evento de click do Times da Mensagem
 */

function TimesClick() {

    objHeaderDom.iconTimesMessage.addEventListener("click", () => {
        objHeaderDom.divMessageError.remove("error")
    })
}

/**
 * -> Verificando as Páginas para chamar os métodos de Eventos
 */

async function VerifyPage() {

    let itemID   = ""
    let itemType = ""

    if (objURL.atualPage !== objURL.indexPage && objURL.atualPage !== objURL.registerPage) {
        itemType = document.location.href.split("type=")[1].split("&")[0]
        itemID   = document.location.href.split("id=")[1] 
            ? document.location.href.split("id=")[1].split("&")[0]
            : null

        objHeaderDom.linkHome.href = `${objURL.homePage}?type=${itemType}`
        objHeaderDom.linkList.href = `${objURL.listPage}?type=${itemType}`
    }

    switch (objURL.atualPage) {

        case "":
        case objURL.indexPage:
            
            oIntroEvents.Intro()
            break

        case objURL.homePage:
            
            if (itemType === "anime" || itemType === "manga") {
                objHomeDom.videoBanner.src = videoHomeAnime
                oHomeEvents.HomeAnime()
            }
            else {
                objHomeDom.videoBanner.src = videoHomeMovie
                oHomeEvents.HomeFilm()
            }

            oLoginEvents.Login()
            oSearchEvents.Search(itemType)
            oPasswordEvents.PasswordLogin()

            objHeaderDom.divMessageError != null
                ? TimesClick()
                : null

            break

        case objURL.detailsPage:

            if (itemType === "anime" || itemType === "manga") {
                objHomeDom.videoBanner.src = videoDetailsAnime
                await oDetailsEvents.DetailsAnime(itemType, itemID)
            }
            else {
                objHomeDom.videoBanner.src = videoDetailsMovie
                await oDetailsEvents.DetailsFilm(itemType, itemID)
            }

            oLoginEvents.Login()
            oSearchEvents.Search(itemType)
            oPasswordEvents.PasswordLogin()
            oFavoriteEvents.ButtonFavorite()

            objHeaderDom.divMessageError != null
                ? TimesClick()
                : null
            
            break

        case objURL.searchPage:

            objHeaderDom.title.innerHTML = "Procurar | SyberList"

            oLoginEvents.Login()
            oBrowseEvents.Browse(itemType)
            oPasswordEvents.PasswordLogin()

            objHeaderDom.divMessageError != null
                ? TimesClick()
                : null
            
            break;

        case objURL.registerPage:
            
            oRegisterEvents.Register()
            oPasswordEvents.PasswordRegister()
            break

        case objURL.listPage:

            objHeaderDom.title.innerHTML = "Minha Lista | SyberList"

            oListEvents.List()
            oLoginEvents.Login()
            oSearchEvents.Search(itemType)
            oPasswordEvents.PasswordLogin()
            break
    }
}

VerifyPage()