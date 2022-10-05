export class FavoriteEvents {

    ButtonFavorite() {

        const button = document.querySelector("#form__submit")
        const star   = document.querySelector("#star-details")

        button.addEventListener("click", e => {
            e.preventDefault()

            star.classList.remove("fa-regular")
            star.classList.add("fa-solid")
            star.classList.add("fa-checked")
        })

        star.addEventListener("mouseenter", () => {
            if (star.classList.contains("fa-regular")) {
                star.classList.remove("fa-regular")
                star.classList.add("fa-solid")
            }
        })

        star.addEventListener("mouseleave", () => {
            if (star.classList.contains("fa-solid") && !star.classList.contains("fa-checked")) {
                star.classList.remove("fa-solid")
                star.classList.add("fa-regular")
            }
        })
    }
}