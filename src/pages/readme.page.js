export class ReadmePage extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
        }
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .content {
                padding: 0 20px;
            }
        </style>
        <div class="content">
            <h2>My CV Project</h2>
            <p>This is a learning project where I aimed to explore the capabilities of pure JavaScript and Web Components. The project represents a simple and creative implementation of a CV that simulates a retro-style file browser.</p>
            
            <h4>Project Goals</h4>
            <ul>
                <li>Learn and apply Web Components. A new way to build reusable and encapsulated UI elements.</li>
                <li>Work with Vanilla JavaScript. Avoiding any frameworks or libraries to gain deeper understanding of core JavaScript concepts.</li>
                <li>Practice building a SPA. Implementing basic routing and dynamic navigation using JavaScript.</li>
                <li>Experiment with design. Combining functionality with a unique retro-inspired look.</li>
            </ul>
        </div>`
    }
}

customElements.define('readme-page', ReadmePage)
