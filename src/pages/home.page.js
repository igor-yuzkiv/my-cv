export class HomePage extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <style>
                .page {
                    padding: 20px;
                }
                .page-content {
                    text-align: justify;
                }
                .page .my-photo {
                    margin: 20px auto;
                    text-align: center;
                    border-radius: 50%;
                    overflow: hidden;
                    width: 200px;
                    height: 200px;
                }
            </style>

            <div class="page">
                <div class="card" data-subject="Disclaimer">
                    If you're not familiar with the concept or style of this project, please check the README.md file. It explains the inspiration, goals, and purpose behind this retro-themed design.
                </div>
                <div class="my-photo">
                    <img src="https://lh3.googleusercontent.com/d/1mDVjcY1fe4br57fAFtwPq8h8QtBYlNWJ" alt="Ihor Yuzkiv" width="200" height="200">
                </div>
                <div class="page-content">
                    <h3>Hello, and welcome to my CV!</h3>
                    <p>My name is Ihor Yuzkiv, and I am a Full Stack Developer from Ukraine. With a passion for creating efficient and user-friendly solutions, I specialize in building robust applications that bridge the gap between innovative ideas and seamless user experiences.</p>
                    <p>I have experience working with various modern technologies and frameworks, focusing on both frontend and backend development. My work reflects my commitment to continuous learning and staying up-to-date with the latest trends in software development.</p>
                    <p>Beyond coding, I value collaboration, problem-solving, and delivering meaningful results. Whether it's developing a dynamic web application, designing scalable backend systems, or improving existing processes, I thrive on challenges and enjoy contributing to impactful projects.</p>
                    <p>Thank you for visiting my CV. Please explore further to learn more about my skills, experience, and achievements!</p>
                    <p>Best regards, Ihor Yuzkiv</p>
                </div>
            </div>
        `
    }
}

customElements.define('home-page', HomePage)
