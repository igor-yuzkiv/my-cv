export class SkillsPage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <p>In progress...</h1>
        </div>`
    }
}

customElements.define('skills-page', SkillsPage)
