export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <span className='container-md'>
        <header>
        <h1>Taylor Rozier</h1>
        <p>Full Stack Web Developer</p>
    </header>

    <section>
        <h2>Contact Information</h2>
        <address>
            <p> Email: <a href="mailto:Roziertaylor@gmail.com">roziertaylor@gmail.com</a></p>
            <p>Phone: (435) 777-3157</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/taylor-rozier-a76247105/" target="_blank">https://www.linkedin.com/in/taylor-rozier</a></p>
            <p>GitHub: <a href="https://github.com/RozierT" target="_blank">https://github.com/RozierT</a></p>
        </address>
    </section>

    <section>
        <h2>Summary</h2>
        <p>
            Experienced Full Stack Web Developer with a passion for creating efficient and scalable web applications.
            Proficient in both front-end and back-end technologies, with a strong foundation in HTML, CSS, JavaScript,
            and a range of server-side languages. Skilled in problem-solving, collaboration, and staying up-to-date
            with the latest web development trends.
        </p>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Front-End Frameworks (e.g., React, Handlebars)</li>
            <li>Back-End Technologies (e.g., Node.js, Express)</li>
            <li>Database Management (e.g., SQL, MongoDB)</li>
            <li>Version Control (e.g., Git)</li>
            <li>Responsive Web Design</li>
            <li>RESTful APIs</li>
            <li>UI/UX Design Principles</li>
            <li>Agile Development</li>
            <li>Problem Solving</li>
        </ul>
    </section>

    <section>
        <h2>Professional Experience</h2>
        <article>
        <h3>Key Account: Technology Consultant | Solera Co.</h3>
            <p><em>Jan 2017 - Current</em></p>
            <ul>
                <li>Develop and maintain client websites, ensuring high performance and responsiveness.</li>
                <li>Collaborate with the design and UX teams to create user-friendly interfaces.</li>
                <li>Implement and optimize back-end solutions, including database design and API development.</li>
                <li>Participate in code reviews and debugging to enhance the quality of the codebase.</li>
                <li>Stay updated with industry trends and best practices to enhance project outcomes.</li>
            </ul>
        </article>

        <article>
            <h3>Junior Web Developer | XYZ Web Solutions</h3>
            <p><em>June 2018 - December 2019</em></p>
            <ul>
                <li>Assisted in the development of web applications using HTML, CSS, and JavaScript.</li>
                <li>Worked on front-end components and integrated them into the existing web applications.</li>
                <li>Collaborated with senior developers to troubleshoot and debug code issues.</li>
                <li>Participated in regular team meetings and contributed to project planning and documentation.</li>
            </ul>
        </article>
    </section>

    <section>
        <h2>Education</h2>
        <article>
            <h4>Full-Stack Web Developement Bootcamp</h4>
            <p>University of California Davis</p>
        </article>
    </section>

    <footer>
        <p>References available upon request.</p>
    </footer>
    </span>
      </div>
    );
  }