import React from 'react'
import './Home.css'

function Home() {
  return (
	<div id='homePage'>
    {/* Hero Section */}
    <div className="hero">
      <div className="left-card">
        <div className="title">
          Hi, I am a  <br />
          <span>Sofware Engineer</span>
        </div>
        <p>
        I am highly motivated, inqusitive and excited to contribute my skills and knowledge to engineering projects and grow in my field. I am eager to learn from experienced professionals, collaborate on challenging projects, and continue developing my expertise. I am open to new opportunities and challenges that allow me to make meaningful contributions to the engineering world.
        </p>

        <div className='cvDownload'><a href="src/assets/Samuel_Okoduwa.pdf" download={'./Samuel_Okoduwa.pdf'}>Download Cv</a></div>
      </div>

      <div className="right-card">
        <img src="src/assets/img/My_Photo.jpg" alt="Profile Image" />
      </div>
    </div>

    {/* Skills */}
    <section id="skills">
      <div className="skills">Skills</div>
      <p>I have experience in the following web technologies</p>
      <div className="skill-cards">
        <div className="skill-card">
          <img src="src/assets/img/Technical-skills/html5.png" alt="HTML" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\css3.png" alt="CSS" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\bootstrap.jpeg" alt="Bootstap" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\draw.io.png" alt="Drawio" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\git.png" alt="Git" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\github.png" alt="Github" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\javascript.png" alt="JavaScript" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\typescript.png" alt="Typsecript" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\react.png" alt="React" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\python.png" alt="Python" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\nodeJs.png" alt="Node" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\mongodB-no_bg.png" alt="MongoDb" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\mysql.png" alt="MySQL" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\docker-no_bg.png" alt="Docker" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\kubernetes.png" alt="Kubernetes" />
        </div>
        <div className="skill-card">
          <img src="src\assets\img\Technical-skills\Ansible.png" alt="Ansible" />
        </div>  
      </div>
    </section>

    {/* Projects */}
    <section id='projects'>
      <div className='project-header'>
        <span className='project'>Projects</span>
        <span className='more-project'><a href="https://github.com/SamuelOkoduwa">View All</a></span>
      </div>
      <div id="card-project">
      <div className="card-project">
        <img src="src\assets\img\Project-Image\Quote_Generator_remove_bg.png" alt="Random Quote Generator" />
        <span>User-friendly interface, 'Generate Quote' button, seamless quote fetching for an enjoyable user journey</span>
        <span className="learn-more"><a href="https://samuelokoduwa.github.io/Random-Quote-Generator/">Learn More</a></span>
      </div>

      <div className="card-project">
        <img src="src\assets\img\Project-Image\Hublog-1.png" alt="Hublog" />
        <span>Simplify shipping with real-time price comparison, transparency, convenience, and cost-effective options for businesses.</span>
        <span className="learn-more"><a href="https://samuelokoduwa.github.io/HUBLOG/">Learn More</a></span>
      </div>

      <div className="card-project">
        <img src="src\assets\img\Project-Image\Hublog_Logistics-1.png" alt="Logistics" />
        <span>HubLog Logistics: Efficient, reliable, offering warehousing, transportation, and supply chain solutions for seamless goods movement.</span>
        <span className="learn-more"><a href="https://samuelokoduwa.github.io/HUBLOG-LOGISTICS/">Learn More</a></span>
      </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <h2>Contact Me</h2>
      <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/samuel-okoduwa-475b3084/">
            <img src="src\assets\img\icons\linkedin-background-free.png" alt="LinkedIn" />
          </a>

          <a href="https://twitter.com/samuel_okoduwa">
            <img src="src\assets\img\icons\twitter-background-free.png" alt="Twitter" />
          </a>

          <a href="https://github.com/SamuelOkoduwa/">
            <img src="src\assets\img\icons\github-background-free.png" alt="Github" />
          </a>

          <a href="https://www.facebook.com/okoduwa.osose/">
            <img src="src\assets\img\icons\facebook-background-free.png" alt="Facebook" />
          </a>
        </div>
      </footer>
  </div>
  )
}

export default Home