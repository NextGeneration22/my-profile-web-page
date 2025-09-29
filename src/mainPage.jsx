import { useState} from 'react';
import './mainPage.css';
import NavBar from './navigation-bar';
import Web from './animated-web'; 
import Laptop from './animated-script';
import Certificate from './Certificate';
import Footer from './footer';

function MainPage() {

//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showCertificate, setShowCertificate] = useState(false);

    function toggleCertificate() {
      setShowCertificate(!showCertificate);
    }
  return (
    <>
    <NavBar className="navigation"></NavBar>
    <div className='landing-section' id="home" >
        <h1 className='motto'>You dream it, we build it—no tech headaches, just a beautiful site that fits your brand and delights your customers</h1>
        <Web></Web>
        <Laptop></Laptop>
    </div>
    <div className='about'>
        <h2 className='about-title'>we will use all the skilss we have and learn more if it requir to deliver the best product</h2>
        <div className='tools-container'>
          <div className='tool React'><h3>React</h3>
              <img src="icons/react.png" alt="React Logo" className='react logo'/>
              <p>React is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and render dynamic content seamlessly. React's virtual DOM enhances performance, making it a preferred choice for modern web development.</p>
          </div>
          <div className='tool Node'><h3>Node.js</h3>
              <img src="icons/nodejs.png" alt="Node.js Logo" className='node logo'/>
              <p>Node.js is a powerful JavaScript runtime built on Chrome's V8 engine that enables server-side scripting. It allows developers to use JavaScript for backend development, creating scalable and high-performance applications. Node.js is known for its event-driven architecture and non-blocking I/O, making it ideal for real-time applications.</p>
          </div>
          <div className='tool mongoDB'><h3>MongoDB</h3>
              <img src="icons/mongodb.png" alt="MongoDB Logo" className='mongo logo'/>
              <p>MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and performance, making it ideal for handling large volumes of unstructured data. MongoDB's schema-less design allows for easy iteration and evolution of data models, making it a preferred choice for modern web applications.</p>
          </div>
          <div className='tool kubernetes'><h3>Kubernetes</h3>
              <img src="icons/kubernetes.png" alt="Kubernetes Logo" className='kube logo'/>
              <p>Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a robust framework for running distributed systems, ensuring high availability and efficient resource utilization. Kubernetes simplifies complex operations, making it easier to manage applications in production environments.</p>
          </div>
          <div className='tool docker'><h3>Docker</h3>
              <img src="icons/docker.png" alt="Docker Logo" className='docker logo'/>
              <p>Docker is a platform that enables developers to automate the deployment of applications inside lightweight, portable containers. Containers package an application and its dependencies, ensuring consistency across different environments. Docker simplifies the development and deployment process, making it easier to build, ship, and run applications at scale.</p>
          </div>
          <div className='tool microservices'><h3>Microservices</h3>
              <img src="icons/microservices.png" alt="Microservices Logo" className='micro logo'/>
              <p>Microservices is an architectural style that structures an application as a collection of small, independent services that communicate over well-defined APIs. Each service focuses on a specific business capability, allowing for greater flexibility, scalability, and maintainability. Microservices enable teams to develop, deploy, and scale components independently, promoting agility in software development.</p>
          </div>
          <div className='tool Git'><h3>Git</h3>
              <img src="icons/github.png" alt="Git Logo" className='git logo'/>
              <p>Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and manage different versions of their projects. It provides powerful branching and merging capabilities, enabling teams to work on features independently and integrate them seamlessly. Git is an essential tool for modern software development, promoting collaboration and code integrity.</p>
          </div>
          <div className='tool HTML'><h3>HTML5</h3>
              <img src="icons/html.png" alt="HTML5 Logo" className='html logo'/>
              <p>HTML5 is the latest version of the Hypertext Markup Language, the standard language for creating web pages. It introduces new elements and attributes that enhance the structure and functionality of web content. HTML5 supports multimedia, graphics, and interactive features, making it a powerful tool for modern web development.</p>
          </div>
          <div className='tool CSS'><h3>CSS3</h3>
              <img src="icons/css3.png" alt="CSS3 Logo" className='css logo'/>
              <p>CSS3 is the latest evolution of Cascading Style Sheets, a stylesheet language used to describe the presentation of a document written in HTML or XML. It introduces new features such as animations, transitions, and responsive design capabilities. CSS3 allows developers to create visually appealing and adaptive web pages that enhance user experience across different devices.</p>  
          </div>
          <div className='tool JavaScript'>
              <h3>JavaScript</h3>
              <img src="icons/javascript.png" alt="JavaScript Logo" className='js logo'/>
              <p>JavaScript is a versatile programming language that enables interactive web pages. It allows developers to create dynamic content, control multimedia, animate images, and much more. JavaScript is essential for modern web development, enhancing user experience and functionality.</p>
          </div>
        </div>
        <div className='about-the-creator' id='about-creator'>
          <h2 className='about-creator-title'>About the creator:</h2>
          <p className='about-creator-description'>
            &nbsp;&nbsp;As a self-learner who grew up in the countryside of Morocco, where access to formal education and the internet is limited, I took charge of my education. I began by teaching myself languages, starting with English and French, then math, including Calculus, Probability, and Statistics, and the principles of Physics through textbooks.
            Two years ago, when I got my first laptop, I discovered the fascinating field of programming. My love for critical thinking and problem-solving drove me to delve deeper into this field. Learning about the components of computers alongside Python gave me a deeper understanding of my code. I then decided to specialize in web development.<br></br>
            &nbsp;&nbsp;To begin, I learned the building blocks of websites with HTML and CSS using the Beginning HTML5 and CSS3 For Dummies book. I then advanced to creating more interactive and engaging websites with JavaScript through JavaScript All-in-One For Dummies. This journey equipped me with skills in React, Node.js, and MongoDB.
            My self-learning journey has provided me with the ability to adapt quickly and master any new skills required by job roles. To formalize my skills and gain more hands-on experience, I completed the <span className='certificat-link' id='certificat-link' onClick={toggleCertificate}>IBM Full-Stack JavaScript Developer Professional</span> Program via Coursera. 
          </p>
        </div>
        {showCertificate ? <Certificate toggleCertificate={toggleCertificate}></Certificate> : null}
    </div>
    <Footer id='contact'></Footer>
    </>
  )
}
export default MainPage;

