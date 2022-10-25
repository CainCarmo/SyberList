export class FavoriteEvents {

    StarButton() {
        const star = document.querySelector("#save__star")

        star.addEventListener("mouseenter", () => {
            if (star.classList.contains("fa-regular")) {
                star.classList.remove("fa-regular")
                star.classList.add("fa-solid")
            }
        })

        star.addEventListener("mouseleave", () => {
            if (star.classList.contains && !star.classList.contains("fa-checked")) {
                star.classList.remove("fa-solid")
                star.classList.add("fa-regular")
            }
        })
    }
}