import { UpdateDomTmdb } from "./updateDOM.js"

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

    async GetMovieFind(query) {
        await fetch(`${this.BaseURL}/search/movie?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieFind(data))
                .catch(err => console.log(err.message))
    }

    async GetTvBanner(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvBanner(data))
                .catch(err => console.log(err.message))
    }

    async GetMovieRanking() {
        await fetch(`${this.BaseURL}/movie/top_rated?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieRanking(data))
                .catch(err => console.warn(err.message))
    }

    async GetMoviePopular() {
        await fetch(`${this.BaseURL}/movie/popular?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMoviePopular(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieUpComing() {
        await fetch(`${this.BaseURL}/movie/upcoming?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieUpComing(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieByID(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieTrailer(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/videos?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieTrailer(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieCast(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/credits?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieCast(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieSimilar(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/similar?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieSimilar(data))
                .catch(err => console.warn(err.message))
    }

    async GetMovieRecommendatiosByID(ID) {
        await fetch(`${this.BaseURL}/movie/${ID}/recommendations?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetMovieRecommendatiosByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvSearch(query) {
        await fetch(`${this.BaseURL}/search/tv?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvSearch(data))
                .catch(err => console.log(err.message))
    }

    async GetTvFind(query) {
        await fetch(`${this.BaseURL}/search/tv?api_key=${this.API_KEY}&query=${query}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvFind(data))
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
    
    async GetTvOnAir() {
        await fetch(`${this.BaseURL}/tv/on_the_air?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvTop(data))
                .catch(err => console.warn(err.message))
    }
    
    async GetTvByID(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvByID(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvCast(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}/credits?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvCast(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvSimilar(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}/similar?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvSimilar(data))
                .catch(err => console.warn(err.message))
    }

    async GetTvRecommendationsByID(ID) {
        await fetch(`${this.BaseURL}/tv/${ID}/recommendations?api_key=${this.API_KEY}&language=pt-BR`)
                .then(res => res.json())
                .then(data => this.oUpdateDomTmdb.SetTvRecommendationsByID(data))
                .catch(err => console.warn(err.message))
    }
}