export class HomePage extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' })
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <h1>home.page.js</h1>
        </div>`
    }
}

customElements.define('home-page', HomePage)
