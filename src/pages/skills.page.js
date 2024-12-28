export class SkillsPage extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <style>
                .page {
                    padding: 16px;
                }
                .category {
                    background: #09c405;
                }
            </style>
            <div class="page">
                <div class="tree">
                    <ul>
                        <li>
                            <span class="title category">Backend</span>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>MySQL</li>
                                <li>Postgress</li>
                                <li>Redis</li>
                                <li>Mongo DB</li>
                                <li>Docker</li>
                                <li>Linux CLI</li>
                                <li>Nginx</li>
                            </ul>
                        </li>
                        <li>
                            <span class="title category">Frontend</span>
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Vue 2/3</li>
                                <li>React</li>
                                <li>React Native CLI/Expo</li>
                                <li>Eslint</li>
                                <li>Prettier</li>
                                <li>npm, yarn</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
}

customElements.define('skills-page', SkillsPage)
