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
            
            <img width="90%" src="https://api.certificates.dev/certificates/thumbnail/9ca58b90-febc-4c50-911f-a84fa06b6496.jpg" alt="Vue.js Certificate" />
        `
    }
}

customElements.define('english-certificate-page', EnglishCertificatePage)
