import { objIntroDOM } from "../Collections/introCollection.js"

export class IntroEvents {

    constructor() {
        this.VideoAnimeMotion = "./Resources/Video/anime-introduction.mp4"
        this.VideoFireForce   = "./Resources/Video/mylivewallpapers.com-Fire-Force.mp4"
        this.VideoGodzilaKing = "./Resources/Video/mylivewallpapers-com-Kong-vs-Godzilla.mp4"
        this.VideoMovieMotion = "./Resources/Video/movie-introduction.mp4"
    }

    Intro() {
        window.addEventListener("load", () => {
            let randomNumberAnime = Math.floor(Math.random() * 20)
            let randomNumberMovie = Math.floor(Math.random() * 20)

            randomNumberAnime % 2 === 0
                ? objIntroDOM.VideoAnime.src = this.VideoFireForce
                : objIntroDOM.VideoAnime.src = this.VideoAnimeMotion

            randomNumberMovie % 2 === 0
                ? objIntroDOM.VideoFilms.src = this.VideoMovieMotion
                : objIntroDOM.VideoFilms.src = this.VideoGodzilaKing
        })

        objIntroDOM.BtnAnime.addEventListener("mouseover", () => {
            objIntroDOM.BoxAnime.classList.add("hover")
            objIntroDOM.VideoAnime.play()
        })
    
        objIntroDOM.BtnAnime.addEventListener("mouseleave", () => {
            objIntroDOM.BoxAnime.classList.remove("hover")
            objIntroDOM.VideoAnime.pause()
        })
    
        objIntroDOM.BtnFilms.addEventListener("mouseover", () => {
            objIntroDOM.BoxFilms.classList.add("hover")
            objIntroDOM.VideoFilms.play()
        })
    
        objIntroDOM.BtnFilms.addEventListener("mouseleave", () => {
            objIntroDOM.BoxFilms.classList.remove("hover")
            objIntroDOM.VideoFilms.pause()
        })
    }
}