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
                .page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
            </style>
            
            <div class="page">
                <img width="90%" src="https://api.certificates.dev/certificates/thumbnail/9ca58b90-febc-4c50-911f-a84fa06b6496.jpg" alt="Vue.js Certificate" />
            </div>
        `
    }
}

customElements.define('english-certificate-page', EnglishCertificatePage)
