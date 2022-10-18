import { UpdateDomTmdb } from "./updateDom.js"

export class RequestsTmdb {

    constructor() {
        this.oUpdateDomTmdb = new UpdateDomTmdb()
        this.BaseURL        = "https://api.themoviedb.org/3"
        this.API_KEY        = "32a48ac8387366ff3d957d772176624f"
    }

    async GetMovieSearch(query) {
        await fetch(`${this.BaseURL}/search/movie?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieSearch(data))
                .catch(err => console.log(err.message))
    }

    async GetMovieBrowse(query) {
        await fetch(`${this.BaseURL}/search/movie?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieBrowse(data))
                .catch(err => console.log(err.message))
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
                .then(data => this.oUpdateDomTmdb.SetMoviesPopular(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesUpComing() {
        await fetch(`${this.BaseURL}/movie/upcoming?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMoviesUpComing(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesByID(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMoviesByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieTrailer(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/videos?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieTrailer(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesSimilar(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/similar?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMoviesSimilar(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviesRecommendatiosByID(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/recommendations?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMoviesRecommendatiosByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvSearch(query) {
        await fetch(`${this.BaseURL}/search/tv?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvSearch(data))
                .catch(err => console.log(err.message))
    }

    async GetTvBrowse(query) {
        await fetch(`${this.BaseURL}/search/tv?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvBrowse(data))
                .catch(err => console.log(err.message))
    }

    async GetTvTop() {
        await fetch(`${this.BaseURL}/tv/top_rated?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvTop(data))
                .catch(err => console.warn(err.message))
    }
    
    async GetTvPopular() {
        await fetch(`${this.BaseURL}/tv/popular?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvPopular(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvByID(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvRecommendationsByID(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}/recommendations?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvRecommendationsByID(data))
                .catch(err => console.warn(err.message))
    }
}