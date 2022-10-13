import { objIntroDom } from "../Collections/introCollection.js"

export class IntroEvents {

    Intro() {
        objIntroDom.btnAnime.addEventListener("mouseover", () => {
            objIntroDom.boxAnime.classList.add("hover")
            objIntroDom.videoAnime.play()
        })
    
        objIntroDom.btnAnime.addEventListener("mouseleave", () => {
            objIntroDom.boxAnime.classList.remove("hover")
            objIntroDom.videoAnime.pause()
        })
    
        objIntroDom.btnFilms.addEventListener("mouseover", () => {
            objIntroDom.boxFilms.classList.add("hover")
            objIntroDom.videoFilms.play()
        })
    
        objIntroDom.btnFilms.addEventListener("mouseleave", () => {
            objIntroDom.boxFilms.classList.remove("hover")
            objIntroDom.videoFilms.pause()
        })
    }
}