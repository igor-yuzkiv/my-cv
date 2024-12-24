export class ExperiencePage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <p>experience.page.js</h1>
        </div>`
    }
}

customElements.define('experience-page', ExperiencePage)
