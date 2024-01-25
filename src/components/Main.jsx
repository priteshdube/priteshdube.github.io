import React from "react";
import resume from "../assets/Resume.pdf";
import pic from "../assets/pp.jpeg";
import sjc from "../assets/sjc.jpeg";
import xavier from "../assets/xavier.jpeg";



// import {Carousel} from "react-responsive-carousel";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <>

      <div className="home" id="home">
        <div>
          <p>
            Hi, I am <span className="name">Pritesh Dube</span>
            <br />
            A Computer Sceince Enthusiast who is highly interested in <br />
            Web Development and Machine Learning.
          </p>
          <button>
            <a href={resume} target="blank">
              Resume
            </a>
          </button>
        </div>

        <div>
          <img src={pic} alt="Pritesh Dube" />

          <div>
            <div style={{ animationDelay: "0.2s" }}>
              <a
                href={"https://www.facebook.com/pritesh.dube.7"}
                target="blank"
              >
                <AiFillFacebook />
                <p>Facebook</p>
              </a>
            </div>

            <div style={{ animationDelay: "0.4s" }}>
              <a href="https://www.instagram.com/pritesh_dube/" target="blank">
                <AiFillInstagram />
                <p>Instagram</p>
              </a>
            </div>

            <div style={{ animationDelay: "0.6s" }}>
              <a
                href="https://www.linkedin.com/in/pritesh-dubey/"
                target="blank"
              >
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </a>
            </div>

            <div style={{ animationDelay: "0.8s" }}>
              <a href="https://github.com/priteshdube" target="blank">
                <AiFillGithub />
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="home2" id="Education">
        <h1>Education</h1>
        <div>
          <div className="college">
            <img src={sjc} alt="St. Joseph University" />
            <div>
              <h1>St. Joseph's University [Sept.2022- May 2026]</h1>
              <h2>BS in Mathematics and Computer Science</h2>

              <p>
                <strong>GPA:</strong> 3.93
              </p>
              <p> Honor's Student, Dean's list, Dean's Scholarship</p>
            </div>
          </div>

          <div className="school">
            <img src={xavier} alt="Xavier" />
            <div>
              <h1>
                Xavier International Secondary School [May 2018- Feb. 2021]
              </h1>
              <p>
                <strong>GPA:</strong> 3.73
              </p>
              <p>
                Student of the Year award, Presidential Scholarship, Winner of
                National Level Mathematical Competition
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home3" id="Experiences">
        <h1>Experiences</h1>
        <div class="exp1">
          <h1>
            <strong>
              Peer Tutor - Mathematics and Computer Science [March 2023 -
              Present]
            </strong>
          </h1>
          <h3>
            <i>St. Jospeh's University</i>
          </h3>
          <p>
            - Provide one to one tutoring session to students in courses like
            Discrete Mathematics, Calculus I and Calculus II, Java Programming,
            etc. <br />
            - Assist Students with homework assignments and test preparation
            fostering a deeper comprehension of the course materials. <br />-
            Develop study plan and roadmap for the student on the basis of their
            requirements and understanding of the course materials.
          </p>
        </div>

        <div class="exp2">
          <h1>
            <strong>
              Treasurer - South Asian Students Association(SASA) [May 2023-
              Present]
            </strong>
          </h1>
          <h3>
            {" "}
            <i>St. Joseph's University</i>
          </h3>

          <p>
            - Manage the budget and financial operations of the club, ensuring
            transparency, accuracy, and compliance with the university's
            guidelines. <br />
            - Collaborate with the club members and executive board to plan and
            orgaize events like General Meeting, Cultural Programme, etc. <br />
            - Facilitate smooth functioning of club events by managing club's
            budget and vendor payments.
          </p>
        </div>

        <div class="exp3">
          <h1>
            <strong>
              Founder and Content Manager - Learners [March 2021 - Dec 2022]
            </strong>
          </h1>
          <h3>
            <i>
              <a href="https://learnerglobe.blogspot.com/" target="_blank">
                learnerglobe.blogspot.com
              </a>
            </i>
          </h3>

          <p>
            -Established and launched Learners' website as an online platform
            dedicated to providing information about free online courses,
            internship opportunities, and jobs. <br />- Effficiently managed the
            facebook page of Learners that reached to the poeple of more than 5
            countires and gained 600+ followers. <br />- Actively engaged with
            the online community by responding to their queries, participating
            in the discussions, and fostering a supporitve online environment.
          </p>
        </div>

        <div class="exp4">
          <h1>
            <strong>Blogger [May 2021 - Present]</strong>
          </h1>
          <h3>
            <i>
              <a href="https://priteshdube.blogspot.com" target="_blank">
                priteshdube.blogspot.com
              </a>
            </i>
          </h3>

          <p>
            - Launched my perosnal blog website covering diverse topics like
            games, nutrition, festivals, special days, etc. <br />
            - Write blogs on some of the experiences of my life and share to the
            online community. <br />- Actively engage with the online community
            responding to their commenting and sharing additional information to
            their inquiries.
          </p>
        </div>
      </div>

      <div className="home4" id="Projects">
        <h1>Projects</h1>

        <div>
          <div>
            <h1>Robo Assistant</h1>
            <h2>Python</h2>
            <p>
              A voice assistant project made using python programming language
              and its libraries that can perform some general tasks like telling
              time, wishing, telling jokes, sending email, etc. by listening the
              voice commands.
            </p>
            <a href="https://github.com/priteshdube/voiceassistant" target='blank'>View Source</a>
          </div>

        

          <div>
            <h1>Balldrop game</h1>
            <h2>Java</h2>
            <p>
              A game developed by Java programming language using the concept of
              object oriented programming.
            </p>
            <a href="https://github.com/priteshdube/balldrop_game" target='blank'>View Source</a>
          </div>

          <div>
            <h1>Portfolio website</h1>
            <h2>Reactjs</h2>

            <p>
              A digital portfolio just like a resume created using Reactjs library.
            </p>
            <a href=""> View Source</a>
          </div>

          <div>
            <h1>WeatherApp</h1>
            <h2>HTML/CSS/JavaScript</h2>
            <p>Designed an user-friendly Weather application that provides real time weather data for a city. I used openweather API to fetch data for this project.</p>
            <a href="https://github.com/priteshdube/weatherapp" target='blank'>View Source</a>
          </div>

          <div>
            <h1>TicTacToe </h1>
            <h2>JavaScript</h2>
            <p>Created an user friendly TicTacToe game.</p>
            <a href="https://github.com/priteshdube/TicTacToe" target='blank'>View Source</a>

          </div>

          <div>
            <h1>A tech Website</h1>
            <h2>Reactjs</h2>
            <p>Developed a demo-tech website for a company and deployed using vercel</p>
            <a href="https://github.com/priteshdube/techservice">View Source</a>
          </div>
        </div>
      </div>

      <div className="home5" id="Contact">
        <h1>Contact Me</h1>
        <div>
          <form action="">

            <div><label htmlFor="">Name:</label><input type="text" placeholder="xyz" required/></div>
           <div><label htmlFor="">Email:</label> <input type="email" placeholder="xyz@gmail.com" required /></div>
            <div><label htmlFor="">Subject:</label><input type="text" placeholder="Subject" required /> </div>
            <div><label htmlFor="">Message:</label><input type="text" placeholder="Message" /></div>
            <button type="submit">Submit</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
