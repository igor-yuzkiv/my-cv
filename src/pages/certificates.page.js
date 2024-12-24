export class CertificatesPage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <p>certificates.page.js</p>
        </div>`
    }
}

customElements.define('certificates-page', CertificatesPage)
