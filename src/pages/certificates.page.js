export class CertificatesPage extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' })
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <h1>certificates.page.js</h1>
        </div>`
    }
}

customElements.define('certificates-page', CertificatesPage)
