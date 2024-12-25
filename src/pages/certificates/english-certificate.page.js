export class EnglishCertificatePage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
            </style>
            <img height="90%" src="https://lh3.googleusercontent.com/d/1lCH6Modz2rsGHUAKELMZ-c8B27eUXvLe" alt="English Certificate" />
        `
    }
}

customElements.define('english-certificate-page', EnglishCertificatePage)
