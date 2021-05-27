import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiGithub,FiArrowLeft} from 'react-icons/fi';

import './style.css';

const date = new Date();
const year = date.getFullYear();

const Portfolio = () => {
    return(
        <div id="container-home">
            
                <div className="box">
                  <div className="description">
                    <p>This page not found, try again later!</p>
                  </div>
                   <div className="button-back">
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

export default Portfolio;
