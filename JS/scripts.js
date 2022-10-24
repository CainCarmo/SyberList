/**
 * -> Importanto as Collections
 */

import { objURL }       from "./Collections/urlCollection.js"
import { objHeaderDOM } from "./Collections/headerCollection.js"

/**
 * -> Importando as Classes
 */

import { ControlsEvents } from "./Events/controlsEvents.js"
import { DetailsEvents }  from "./Events/detailsEvents.js"
import { FavoriteEvents}  from "./Events/favoriteEvents.js"
import { HomeEvents }     from "./Events/homeEvents.js"
import { IntroEvents }    from "./Events/introEvents.js"
import { ListsEvents }    from "./Events/listsEvents.js"
import { LoginEvents }    from "./Events/loginEvents.js"
import { PasswordEvents } from "./Events/passwordEvents.js"
import { RegisterEvents } from "./Events/registerEvents.js"
import { SearchEvents }   from "./Events/searchEvents.js"

/**
 * -> Instanciando as Classes
 */

const oControlsEvents = new ControlsEvents()
const oDetailsEvents  = new DetailsEvents()
const oFavoriteEvents = new FavoriteEvents()
const oHomeEvents     = new HomeEvents()
const oIntroEvents    = new IntroEvents()
const oListsEvents    = new ListsEvents()
const oLoginEvents    = new LoginEvents()
const oPasswordEvents = new PasswordEvents()
const oRegisterEvents = new RegisterEvents()
const oSearchEvents   = new SearchEvents()

/**
 * -> Verificando as Páginas para chamar os métodos de Eventos
 */

async function VerifyPage() {
    let itemID   = ""
    let itemType = ""

    switch(objURL.atualPage) {
        case "":
        case objURL.indexPage:
        case objURL.registerPage:
            break

        default:

            const stringURL = document.location.href.split("#")[0]

            itemType = stringURL.split("type=")[1].split("&")[0]
            itemID   = stringURL.split("id=")[1] 
                ? stringURL.split("id=")[1].split("&")[0]
                : null
    
            objHeaderDOM.LinkHome.href = `${objURL.homePage}?type=${itemType}`
            // objHeaderDOM.LinkList.href = `${objURL.listPage}?type=${itemType}`
            break
    }

    switch(objURL.atualPage) {
        case "":
        case objURL.indexPage:

            oIntroEvents.Intro()
            break

        case objURL.homePage:

            itemType === "anime" || itemType === "manga"
                ? await oHomeEvents.HomeAnime()
                : await oHomeEvents.HomeMovie()

            oLoginEvents.Login()
            oPasswordEvents.Login()
            oControlsEvents.Controls()
            oSearchEvents.Find(itemType)
            break

        case objURL.detailsPage:

            break

        case objURL.listPage:

            break

        case objURL.searchPage:

            break

        case objURL.registerPage:

            break
    }
}

VerifyPage()