import { RequestsJikan } from "../JikanAPI/requests.js"
import { RequestsTmdb }  from "../TmdbAPI/requests.js"

export class HomeEvents {

    constructor() {
        this.oRequestsTmdb  = new RequestsTmdb()
        this.oRequestsJikan = new RequestsJikan()
    }

    HomeAnime() {
        window.addEventListener("load", async () => {
            await this.oRequestsJikan.GetAnimeBanner(38000)
            await this.oRequestsJikan.GetRankingAnime()
            await this.oRequestsJikan.GetSeasonNow()
    
            setTimeout(async() => {
                await this.oRequestsJikan.GetSeasonUpComming()
                await this.oRequestsJikan.GetRecentAnimeRecommendations()
                await this.oRequestsJikan.GetRankingManga()
            }, 3100)
    
            setTimeout(async() => {
                await this.oRequestsJikan.GetRecentMangaRecommendations()
            }, 6100)
        })
    }

    HomeFilm() {
        window.addEventListener("load", async () => {
            await this.oRequestsTmdb.GetTvBanner(414906)
            await this.oRequestsTmdb.GetMoviesTop()
            await this.oRequestsTmdb.GetMoviesPopular()

            setTimeout(async () => {
                await this.oRequestsTmdb.GetMoviesUpComing()
                await this.oRequestsTmdb.GetTvTop()
                await this.oRequestsTmdb.GetTvPopular()
            })
        })
    }
}