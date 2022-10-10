import { objListsDom } from "../Collections/listsCollection.js"

export class ListEvents {

    ChangeState() {

        objListsDom.buttonsAnime.forEach(e => {
            e.classList.remove("selected")
        })

        objListsDom.divListsAnime.forEach((e, i) => {
            e.classList.remove("expand")
        })
    }

    List() {
        
        window.addEventListener("load", async () => {
            objListsDom.buttonWatch.classList.add("selected")
            objListsDom.divListAnimeWatch.classList.add("expand")

            let glider = new Glider(objListsDom.divListAnimeWatch, {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                arrows: {
                    prev: `#arrow__back`,
                    next: `#arrow__next`
                }
            })
        })
    
        objListsDom.buttonWatch.addEventListener("click", () => {
            this.ChangeState()
    
            objListsDom.buttonWatch.classList.add("selected")
            objListsDom.divListAnimeWatch.classList.add("expand")

            let glider = new Glider(objListsDom.divListAnimeWatch, {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                arrows: {
                    prev: `#arrow__back`,
                    next: `#arrow__next`
                }
            })
        })
    
        objListsDom.buttonWatching.addEventListener("click", () => {
            this.ChangeState()
    
            objListsDom.buttonWatching.classList.add("selected")
            objListsDom.divListAnimeWatching.classList.add("expand")

            let glider = new Glider(objListsDom.divListAnimeWatching, {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                arrows: {
                    prev: `#arrow__back`,
                    next: `#arrow__next`
                }
            })
        })
    
        objListsDom.buttonWatched.addEventListener("click", () => {
            this.ChangeState()
    
            objListsDom.buttonWatched.classList.add("selected")
            objListsDom.divListAnimeWatched.classList.add("expand")

            let glider = new Glider(objListsDom.divListAnimeWatched, {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                arrows: {
                    prev: `#arrow__back`,
                    next: `#arrow__next`
                }
            })

            console.log(glider)
        })
    
        objListsDom.buttonDrop.addEventListener("click", () => {
            this.ChangeState()
    
            objListsDom.buttonDrop.classList.add("selected")
            objListsDom.divListAnimeWatchDrop.classList.add("expand")

            let glider = new Glider(objListsDom.divListAnimeWatchDrop, {
                slidesToShow: 5,
                slidesToScroll: 5,
                draggable: true,
                arrows: {
                    prev: `#arrow__back`,
                    next: `#arrow__next`
                }
            })
        })
    }
}