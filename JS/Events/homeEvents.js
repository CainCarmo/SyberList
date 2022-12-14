import { objHomeDOM }    from "../Collections/homeCollection.js"
import { RequestsTmdb }  from "../TmdbAPI/requests.js"
import { RequestsJikan } from "../JikanAPI/requests.js"

export class HomeEvents {

    constructor() {
        this.videoHomeAnime = "./Resources/Video/mylivewallpapers.com-Tanjiro-VS-Rui.mp4"
        this.videoHomeMovie = "./Resources/Video/mylivewallpapers.com-The-Batman-2022.mp4"
        this.oRequestsTmdb  = new RequestsTmdb()
        this.oRequestsJikan = new RequestsJikan()
    }

    HomeAnime() {
        window.addEventListener("load", async () => {
            objHomeDOM.VideoBanner.src = this.videoHomeAnime

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
    
    HomeMovie() {
        window.addEventListener("load", async () => {
            objHomeDOM.VideoBanner.src = this.videoHomeMovie

            await this.oRequestsTmdb.GetTvBanner(414906)
            await this.oRequestsTmdb.GetMovieRanking()
            await this.oRequestsTmdb.GetMoviePopular()

            setTimeout(async () => {
                await this.oRequestsTmdb.GetMovieUpComing()
                await this.oRequestsTmdb.GetTvRanking()
                await this.oRequestsTmdb.GetTvPopular()
            }, 3100)

            setTimeout(async () => {
                await this.oRequestsTmdb.GetTvOnAir()
            }, 6100)
        })
    }
}