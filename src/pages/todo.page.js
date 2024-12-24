export class TodoPage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<div>
            <p>todo.page.js</h1>
        </div>`
    }
}

customElements.define('todo-page', TodoPage)
