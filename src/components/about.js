import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div id="about" className="text-justify">
                <h1>A litte about Me</h1>
                <div className="mt-5">
                    <p>I'm a <a href="https://www.linkedin.com/in/mencarnacao/">Software Developer <i className="fab fa-linkedin"></i></a>, born, raised and living in Portugal, writing professional software since 2007. Passionate about programing, a <a href="https://github.com/MarioEME">problem solver <i className="fab fa-github"></i></a> by nature, love to automating everything making life easier.</p>
                    <p><a href="https://www.strava.com/athletes/24372260">Fitness enthusiast <i className="fab fa-strava"></i></a>, you can find me running, hiking or in the gym... trying to live a healthy life.</p>
                    <br />
                    <p>This site is my attempt to start a blog about software, sports and other random stuffs.</p>
                    <br />
                    <p>If you have anything to say get in touch:</p>
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/mario.encarnacao.1"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a target="_blank" href="mailto:marioeme@gmail.com"><i className="fas fa-envelope"></i> Email</a></li>
                        <li><a target="_blank" href="https://github.com/MarioEME"><i className="fab fa-github"></i> GitHub</a></li>
                    </ul>
                </div>
                <hr />
            </div>
        );
    }
}

export default About;