import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiGithub, FiArrowLeft} from 'react-icons/fi';

import './style.css';

const date = new Date();
const year = date.getFullYear();

const WhoIAm = () => {
    return(
        <div id="container-home">
              
                <div className="box-text">
                    <h1>Who is Arthur?</h1>
                    <div className="description">
                      <p>I am a computer science student at Unifavip, 
                      currently looking to improve my knowledge in Javascript and Typescript. 
                      I have experience in C #, Java and slightly Python, always looking to 
                      improve my skills, I am proactive and I also like to receive constructive 
                      criticism about my projects and work. I have intermediate English, I can hear 
                      and speak reasonably well and write without any problem.</p>
                    </div>

                    <div id="button-back">
                    <Link to="/"><FiArrowLeft size="25" color="rgba(255, 255, 255, 0.753)"/></Link> 
                    </div>
                    
                </div>
              <div className="socialmedia-footer">
                <a href="https://www.instagram.com/arthurvenicio"><FiInstagram color="rgba(255, 255, 255, 0.753)" size="20"/></a>
                <a href="https://www.linkedin.com/in/arthurvenicio"><FiLinkedin color="rgba(255, 255, 255, 0.753)" size="20"/></a>
                <a href="https://github.com/arthurvenicio"><FiGithub color="rgba(255, 255, 255, 0.753)" size="20"/></a>
              </div> 
              <div className="footer">
                  <p>All right reserved &copy; - {year}</p>
                </div> 
            

        </div>
    );
}

export default WhoIAm;
