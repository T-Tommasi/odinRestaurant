export default class CreateNewDiv{
    constructor() {
        this.generatedDiv = document.createElement('div')
    }

    set addClass(className)  {
        this.generatedDiv.classList.add(`${className}`)
    }
    set content(HTML) {
        this.generatedDiv.innerHTML = HTML
    }
    set appendDiv(parent) {
        parent.appendChild(this.generatedDiv)
    }

    get div() {
        return this.generatedDiv
    }
}