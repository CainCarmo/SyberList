export class FactoryDom {

    constructor() {
        this.defaultID        = []
        this.defaultRole      = []
        this.defaultClass     = []
        this.defaultValue     = ""
        this.defaultInnerHTML = ""
    }

    CreateBlockElement(Element, Class = this.defaultClass, ID = this.defaultID, Role = this.defaultRole) {
        
        const element = document.createElement(Element)

        if (Class !== this.defaultClass)
            Class.map(Class => element.classList.add(Class))
        if (ID !== this.defaultID)
            ID.map(ID => element.id += `${ID}`)
        if (Role !== this.defaultRole)
            Role.map(Role => element.role += Role)
        
        return element
    }
    
    CreateSelectOption(Value = this.defaultValue, InnerHTML = this.defaultInnerHTML) {
        
        const option = document.createElement("option")

        if (Value !== this.defaultValue)
            option.value = Value
        if(InnerHTML !== this.defaultInnerHTML)
            option.innerHTML = InnerHTML

        return option
    }

    CreateFilterOption() {
        
    }
}