import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi';

import './style.css';

const date = new Date();
const year = date.getFullYear();

const Home = () => {
    return(
        <div className="container">
            
                <div className="box">
                    <p><Link to="/whoiam"><a href>Who is Arthur?</a></Link></p>
                </div>
                <div className="box">
                    <p><Link to="/portfolio"><a href>Portfolio</a></Link></p>
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

export default Home;
