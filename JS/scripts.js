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
import { RegisterEvents } from "./Events/registerEvents.js"
import { ListEvents }     from "./Events/listEvents.js"
import { LoginEvents }    from "./Events/loginEvents.js"
import { PasswordEvents } from "./Events/passwordEvents.js"
import { FavoriteEvents}  from "./Events/favoriteEvents.js"
import { SearchEvents }   from "./Events/searchEvents.js"

/**
 * -> Instanciando as Classes
 */

const oIntroEvents    = new IntroEvents()
const oHomeEvents     = new HomeEvents()
const oDetailsEvents  = new DetailsEvents()
const oRegisterEvents = new RegisterEvents()
const oListEvents     = new ListEvents()
const oLoginEvents    = new LoginEvents()
const oPasswordEvents = new PasswordEvents()
const oFavoriteEvents = new FavoriteEvents()
const oSearchEvents   = new SearchEvents()

/**
 * -> Verificando as Páginas para chamar os métodos de Eventos
 */

async function  VerifyPage() {

    let itemID   = ""
    let itemType = ""

    if (objURL.atualPage !== objURL.indexPage && objURL.atualPage !== objURL.registerPage) {
        itemType = document.location.href.split("/")[3].split("=")[1].split("&")[0]
        itemID   = document.location.href.split("/")[3].split("=")[2]

        objHeaderDom.linkHome.href = `${objURL.homePage}?type=${itemType}`
        objHeaderDom.linkList.href = `${objURL.listPage}?type=${itemType}`
    }

    switch (objURL.atualPage) {
    
        case objURL.indexPage:
            
            oIntroEvents.Intro()
            break

        case objURL.homePage:
            
            if (itemType === "anime" || itemType === "manga")
                oHomeEvents.HomeAnime()
            else
                oHomeEvents.HomeFilm()

            oLoginEvents.Login()
            oSearchEvents.Search(itemType)
            oPasswordEvents.PasswordLogin()
            break

        case objURL.detailsPage:

            if (itemType === "anime" || itemType === "manga")
                await oDetailsEvents.DetailsAnime(itemType, itemID)
            else
                await oDetailsEvents.DetailsFilm(itemType, itemID)

            oLoginEvents.Login()
            oSearchEvents.Search(itemType)
            oPasswordEvents.PasswordLogin()
            oFavoriteEvents.ButtonFavorite()
            break

        case objURL.registerPage:
            
            oRegisterEvents.Register()
            oPasswordEvents.PasswordRegister()
            break

        case objURL.listPage:

            oListEvents.List()
            oLoginEvents.Login()
            oSearchEvents.Search(itemType)
            oPasswordEvents.PasswordLogin()
            break
    }
}

VerifyPage()