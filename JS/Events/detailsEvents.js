import { RequestsTmdb }  from "../TmdbAPI/requests.js"
import { RequestsJikan } from "../JikanAPI/requests.js"

export class DetailsEvents {

    constructor() {
        this.oRequestsTmdb  = new RequestsTmdb()
        this.oRequestsJikan = new RequestsJikan()
    }

    async DetailsAnime(itemType, itemID) {

        switch (itemType) {
            case "anime":

                await this.oRequestsJikan.GetAnimeFullByID(itemID)
                await this.oRequestsJikan.GetAnimeCharacters(itemID)
                await this.oRequestsJikan.GetAnimeStaff(itemID)
                

                setTimeout(async () => {
                    await this.oRequestsJikan.GetAnimeRecommendations(itemID)    
                    await this.oRequestsJikan.GetAnimeThemes(itemID)
                }, 3100)
                
                break
            
            case "manga":

                await this.oRequestsJikan.GetMangaFullByID(itemID)
                await this.oRequestsJikan.GetMangaCharacters(itemID)
                await this.oRequestsJikan.GetMangaPictures(itemID)

                setTimeout(async () => {
                    await this.oRequestsJikan.GetMangaRecommendations(itemID)
                }, 3100)

                break

        }
    }

    async DetailsFilm(itemType, itemID) {

        switch (itemType) {
            case "movie":

                await this.oRequestsTmdb
                break

            case "tv":

                break
        }
    }
}