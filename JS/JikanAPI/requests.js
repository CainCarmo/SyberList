import { UpdateDomJikan } from "./updateDOM.js";

export class RequestsJikan {

    constructor() {
        this.oUpdateDomJikan = new UpdateDomJikan()
        this.BaseURL         = "https://api.jikan.moe/v4";
    }

    async GetAnimeSearch(query) {
        await fetch(`${this.BaseURL}/anime?q=${query}`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeSearch(data))
                .catch(err => console.warn(err.message))
    }
    
    async GetAnimeFind(query) {
        await fetch(`${this.BaseURL}/anime?q=${query}`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeFind(data))
                .catch(err => console.warn(err.message))
    }
    
    async GetAnimeBanner(ID) {
        await fetch(`${this.BaseURL}/anime/${ID}/full`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeBanner(data))
                .catch(err => console.warn(err.message))
    }

    async GetRankingAnime() {
        await fetch(`${this.BaseURL}/top/anime`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetRankingAnime(data))
                .catch(err => console.warn(err.message))
    }

    async GetSeasonNow() {
        await fetch(`${this.BaseURL}/seasons/now`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetSeasonNow(data))
                .catch(err => console.warn(err.message))
    }

    async GetSeasonUpComming() {
        await fetch(`${this.BaseURL}/seasons/upcoming`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetSeasonUpComming(data))
                .catch(err => console.warn(err.message))
    }
    
    async GetRecentAnimeRecommendations() {
        await fetch(`${this.BaseURL}/recommendations/anime`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetRecentAnimeRecommendations(data))
                .catch(err => console.warn(err.message))
    }

    async GetAnimeFullByID(ID) {
        await fetch(`${this.BaseURL}/anime/${ID}/full`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeFullByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetAnimeCharacters(ID) {
        await fetch(`${this.BaseURL}/anime/${ID}/characters`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeCharacters(data))
                .catch(err => console.warn(err.message))
    }

    async GetAnimeStaff(ID) {
        await fetch(`${this.BaseURL}/anime/${ID}/staff`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeStaff(data))
                .catch(err => console.warn(err.message))
    }

    async GetAnimeRecommendations(ID) {
        await fetch(`${this.BaseURL}/anime/${ID}/recommendations`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetAnimeRecommendations(data))
                .catch(err => console.warn(err.message))
    }

    async GetMangaSearch(query) {
        await fetch(`${this.BaseURL}/manga?q=${query}`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetMangaSearch(data))
                .catch(err => console.warn(err.message))
    }

    async GetMangaFind(query) {
        await fetch(`${this.BaseURL}/manga?q=${query}`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetMangaFind(data))
                .catch(err => console.warn(err.message))
    }

    async GetRankingManga() {
        await fetch(`${this.BaseURL}/top/manga`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetRankingManga(data))
                .catch(err => console.warn(err.message))
    }

    async GetRecentMangaRecommendations() {
        await fetch(`${this.BaseURL}/recommendations/manga`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetRecentMangaRecommendations(data))
                .catch(err => console.warn(err.message))
    }

    async GetMangaFullByID(ID) {
        await fetch(`${this.BaseURL}/manga/${ID}/full`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetMangaFullByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetMangaCharacters(ID) {
        await fetch(`${this.BaseURL}/manga/${ID}/characters`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetMangaCharacters(data))
                .catch(err => console.warn(err.message))
    }

    async GetMangaPictures(ID) {
        await fetch(`${this.BaseURL}/manga/${ID}/pictures`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetMangaPictures(data))
                .catch(err => console.warn(err.message))
    }

    async GetMangaRecommendations(ID) {
        await fetch(`${this.BaseURL}/manga/${ID}/recommendations`)
                .then(res => res.json())
                .then(data => this.oUpdateDomJikan.SetMangaRecommendations(data))
                .catch(err => console.warn(err.message))
    }
}