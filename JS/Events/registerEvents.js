import { FactoryDOM }     from "../DOM/factoryDOM.js"
import { objRegisterDOM } from "../Collections/registerCollection.js"

export class RegisterEvents {

    constructor() {
        this.oFactoryDom = new FactoryDOM()
    }

    Register() {
        const inputFile        = objRegisterDOM.InputFile
        const pictureImage     = objRegisterDOM.SpanPhoto
        const pictureImageText = "Escolha a imagem"
        
        pictureImage.innerHTML = pictureImageText;

        inputFile.addEventListener("change", e => {
            const inputTarget = e.target
            const file        = inputTarget.files[0]

            if (file) {
                const reader = new FileReader()

                reader.addEventListener("load", e => {
                    const readerTarget = e.target
                    const image        = this.oFactoryDom.CreateBlockElement("img", [], ["photo__image"])

                    image.src                = readerTarget.result
                    pictureImage.innerHTML = null
                    
                    pictureImage.appendChild(image)
                })

                reader.readAsDataURL(file)
            }
            else {
                pictureImage.innerHTML = pictureImageText
            }
        })

        objRegisterDOM.IconArrowReturn.addEventListener("click", () => history.back())
    }
}