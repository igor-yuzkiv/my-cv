export class ErrorPage extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' })
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <h1>error.page.js</h1>
        </div>`
    }
}

customElements.define('error-page', ErrorPage)