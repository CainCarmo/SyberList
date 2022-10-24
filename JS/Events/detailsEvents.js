import { RequestsTmdb }  from "../TmdbAPI/requests.js"
import { RequestsJikan } from "../JikanAPI/requests.js"

export class DetailsEvents {

    constructor() {
        this.oRequestsTmdb  = new RequestsTmdb()
        this.oRequestsJikan = new RequestsJikan()
    }

    DetailsAnime(itemID, itemType) {
        window.addEventListener("load", async () => {
            switch(itemType) {
                
                case "anime":
                    await this.oRequestsJikan.GetAnimeFullByID(itemID)
                    await this.oRequestsJikan.GetAnimeStreaming(itemID)
                    await this.oRequestsJikan.GetAnimeCharacters(itemID)
                    
                    setTimeout(async () => {
                        await this.oRequestsJikan.GetAnimeStaff(itemID)
                        await this.oRequestsJikan.GetAnimeRecommendations(itemID)
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
        })
    }

    DetailsMovie() {
        window.addEventListener("load", async () => {
            switch(itemType) {

                case "movie":
                    await this.oRequestsTmdb.GetMovieByID(itemID)
                    await this.oRequestsTmdb.GetMovieTrailer(itemID)
                    await this.oRequestsTmdb.GetMovieCast(itemID)

                    setTimeout(async () => {
                        await this.oRequestsTmdb.GetMovieSimilar(itemID)
                        await this.oRequestsTmdb.GetMoviesRecommendatiosByID(itemID)    
                    })

                    break

                case "tv":
                    await this.oRequestsTmdb.GetTvByID(itemID)
                    await this.oRequestsTmdb.GetTvCast(itemID)
                    await this.oRequestsTmdb.GetTvSimilar(itemID)

                    setTimeout(async () => {
                        await this.oRequestsTmdb.GetTvRecommendationsByID(itemID)
                    })

                    break
            }
        })
    }
}