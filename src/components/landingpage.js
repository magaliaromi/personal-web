import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src="../me.jpg"
            alt="avatar"
            className="avatar-img"
          />
        </Cell>

        <Cell col={10} offsetDesktop={1} tablet={12} className="banner-text">
          <h1>Full Stack Developer</h1>
          <hr/>
          <p>ASP.NET | VS.NET | C# | SQL Server | Javascript | React JS | HTML | CSS | C3.js | Bootstrap </p>
          <div className="social-links">
            {/* linkedIn */}
            <a href="https://www.linkedin.com/in/magaliaromi/" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/magaliaromi" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github-square" aria-hidden="true" />
            </a>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
