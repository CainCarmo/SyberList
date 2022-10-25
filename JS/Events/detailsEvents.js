import { RequestsTmdb }  from "../TmdbAPI/requests.js"
import { RequestsJikan } from "../JikanAPI/requests.js"
import { objDetailsDOM } from "../Collections/detailsCollection.js"

export class DetailsEvents {

    constructor() {
        this.videoDetailsAnime = "./Resources/Video/mylivewallpapers.com-Raindrops-Shanghai.mp4"
        this.videoDetailsMovie = "./Resources/Video/mylivewallpapers.com-Underground-Pass-4K.mp4"
        this.oRequestsTmdb  = new RequestsTmdb()
        this.oRequestsJikan = new RequestsJikan()
    }

    DetailsAnime(itemID, itemType) {
        window.addEventListener("load", async () => {
            objDetailsDOM.VideoBanner.src = this.videoDetailsAnime
            
            switch(itemType) {
                
                case "anime":
                    await this.oRequestsJikan.GetAnimeFullByID(itemID)
                    await this.oRequestsJikan.GetAnimeCharacters(itemID)
                    await this.oRequestsJikan.GetAnimeStaff(itemID)

                    setTimeout(async () => {
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

    DetailsMovie(itemID, itemType) {
        window.addEventListener("load", async () => {
            objDetailsDOM.VideoBanner.src = this.videoDetailsMovie
            
            switch(itemType) {

                case "movie":
                    await this.oRequestsTmdb.GetMovieByID(itemID)
                    await this.oRequestsTmdb.GetMovieTrailer(itemID)
                    await this.oRequestsTmdb.GetMovieCast(itemID)

                    setTimeout(async () => {
                        await this.oRequestsTmdb.GetMovieSimilar(itemID)
                        await this.oRequestsTmdb.GetMovieRecommendatiosByID(itemID)    
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