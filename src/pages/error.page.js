export class ErrorPage extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div style="text-align: center;">
            <p>Page not found</p>
        </div>
    `
    }
}

customElements.define('error-page', ErrorPage)
