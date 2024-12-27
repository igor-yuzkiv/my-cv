export class ExperiencePage extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <style>
                .page {
                    padding: 16px;
                }
                
                .legend {
                    font-size: 16px;
                    margin-bottom: 25px;
                    
                    & .legend-items {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        gap: 10px;
                        
                        & span {
                            padding: 2px 4px; 
                            font-weight: bold;
                        }
                    }
                }
                
                .clt, .clt ul, .clt li {
                    position: relative;
                }
                
                .clt ul {
                    list-style: none;
                    padding-left: 32px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
                
                .clt li::before, .clt li::after {
                    content: "";
                    position: absolute;
                    left: -12px;
                }
                
                .clt li::before {
                    border-top: 2px solid #ffffff;
                    top: 9px;
                    width: 8px;
                    height: 0;
                }
                
                .clt li::after {
                    border-left: 2px solid #ffffff;
                    height: 100%;
                    width: 0;
                    top: 2px;
                }
                
                .clt ul > li:last-child::after {
                    height: 8px;
                }
                
                .page .heading {
                    padding: 2px 4px;
                    font-weight: bold;
                }
                
                .page .title {
                    font-weight: bold;
                }
                
                .page .description {
                    padding: 5px 0 5px 16px ;
                    color: #eaeaea;
                    font-size: 14px;
                }
            </style>
               
            <div class="page">
                <div class="card legend" data-subject="Legend">
                    <div class="legend-items">
                        <span style="background: #09c405;">Work as a Developer</span>
                        <span style="background: #e0bc06;">Education</span>
                        <span style="background: #5c5b50;">Non-Development or Partially Related Work</span>
                    </div>
                </div>
                <div class="clt" data-subject="Experience Tree">
                    <ul>
                        <li>
                            <span class="heading" style="background: #09c405">2021 - Present</span>
                            <ul>
                                <li>
                                       <div class="title">Full Stack Developer at the CRMOZ company</div>
                                       <div class="description">
                                             As a Full Stack Developer, I work on building and maintaining web applications, integrating front-end and back-end solutions, and ensuring seamless functionality across various projects. My responsibilities include developing features, optimizing performance, and collaborating with the team to deliver high-quality software tailored to client needs.
                                       </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span class="heading" style="background: #5c5b50">2017 - 2020</span>
                            <ul>
                                <li>
                                       <div class="title">Computer Systems Engineer at the Agroprodservice company</div>
                                       <div class="description">
                                             I was responsible for network administration, infrastructure setup, and maintaining company computers, primarily running Windows, with some experience in managing Linux servers. Additionally, I contributed to software development by creating a registration website for the company forum and a time and equipment tracking system for the IT department.
                                       </div>
                                </li>
                                <li>
                                       <div class="title">Junior PHP Developer (freelance, part-time)</div>
                                       <div class="description">
                                             I worked on developing small e-commerce and informational websites, primarily focusing on adding minor features to the company's custom-built system, configuring it for new clients, and performing bug fixes.
                                       </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span class="heading" style="background: #e0bc06">2016 - 2019</span>
                            <ul>
                                <li>
                                    <span class="title">West Ukrainian National University</span>
                                    <div class="description">
                                        <div><strong>Specialization:</strong> <span>Software Engineering</span></div>
                                        <div><strong>Title:</strong> <span>Bachelor of Science</span></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span class="heading" style="background: #e0bc06">2012 - 2016</span>
                            <ul>
                                <li>
                                    <span class="title">Vyacheslav Chornovil Halytsky College</span>
                                    <div class="description">
                                        <div><strong>Specialization:</strong> <span>Associate Degree in Software Maintenance</span></div>
                                        <div><strong>Title:</strong> <span>Associate Degree in Software Maintenance</span></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
}

customElements.define('experience-page', ExperiencePage)
