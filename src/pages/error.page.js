export class ErrorPage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <p>error.page.js</p>
        </div>`
    }
}

customElements.define('error-page', ErrorPage)
