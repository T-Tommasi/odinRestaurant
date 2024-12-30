export default class CreateNewDiv{
    constructor() {
                /** @type {HTMLDivElement} */
        this.generatedDiv = document.createElement('div')
    }

        /**
     * Add a class to the div.
     * @param {string} className - The class name to add.
     */

    addClass(className)  {
        this.generatedDiv.classList.add(`${className}`)
        return this
    }

    /**
     * Add inner HTML content to the div.
     * @param {string} HTML - The HTML string to set as content.
     */

    addContent(HTML) {
        this.generatedDiv.innerHTML = HTML
        return this
    }

    /**
     * Append the div to a parent element.
     * @param {HTMLElement} parent - The parent element to append to.
     */

    appendDiv(parent) {
        parent.appendChild(this.generatedDiv)
        return this
    }

        /**
     * Get the created div element.
     * @returns {HTMLDivElement} - The created div.
     */

    get getDiv() {
        return this.generatedDiv
    }
}