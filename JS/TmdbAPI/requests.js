import { UpdateDomTmdb } from "./updateDom.js"

export class RequestsTmdb {

    constructor() {
        this.oUpdateDomTmdb = new UpdateDomTmdb()
        this.BaseURL        = "https://api.themoviedb.org/3"
        this.API_KEY        = "32a48ac8387366ff3d957d772176624f"
    }

    async GetTvBanner(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvBanner(data))
                .catch(err => console.log(err.message))
    }

    async GetMoviesTop() {
        await fetch(`${this.BaseURL}/movie/top_rated?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMoviesTop(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesPopular() {
        await fetch(`${this.BaseURL}/movie/popular?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data.results))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesLatest() {
        await fetch(`${this.BaseURL}/movie/latest?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesUpComing() {
        await fetch(`${this.BaseURL}/movie/upcoming?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesByID(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesRecommendatiosByID(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/recommendations?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesSimilar(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/similar?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvTop() {
        await fetch(`${this.BaseURL}/tv/top_rated?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data.results))
                .catch(err => console.warn(err.message))
    }

    async GetTvLatest() {
        await fetch(`${this.BaseURL}/tv/latest?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data.results))
                .catch(err => console.warn(err.message))
    }

    
    async GetTvPopular() {
        await fetch(`${this.BaseURL}/tv/popular?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data.results))
                .catch(err => console.warn(err.message))
    }

    async GetTvByID(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data.results))
                .catch(err => console.warn(err.message))
    }

    async GetTvRecommendationsByID(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}/recommendations?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => console.log(data.results))
                .catch(err => console.warn(err.message))
    }
}