import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import email from '../utils/email';

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <img
              src="../me2.jpg"
              alt="avatar"
              style={{height: '200px'}}
            />
          </div>

          <h2 style={{paddingTop: '2em'}}>Magali Aromi</h2>
          <h4 style={{color: 'grey'}}>Programmer</h4>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          <p>I worked as a .NET Developer for 5 years in Buenos Aires, Argentina, now i live in San Jose, California
            and i'm looking for my first job here as a software developer and i am a Green Card holder. I have experience working with different
            skills and i am a fast learner, i love to learn new things every day.</p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          <h5>Location</h5>
          <p>San Jose, California</p>
          <h5>Email</h5>
          <p>
            <a href={`mailto:${email()}`} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'rgba(0,0,0, 0.87)'}}>
              {email()}
            </a>
          </p>
          <h5>Web</h5>
          <p>
            <a href="https://www.aromi.com.ar" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'rgba(0,0,0, 0.87)'}}>
              www.aromi.com.ar
            </a>
          </p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>


          <Education
            startYear={2017}
            endYear={2018}
            schoolName="Silicon Valley Adult Education (SVAE)"
            schoolPlace="San Jose, California, USA"
            schoolDescription="English As a Second Language Diploma"
          />

          <Education
            startYear={2011}
            endYear={2013}
            schoolName="IRSO"
            schoolPlace="CABA, Buenos Aires, Argentina"
            schoolDescription="Computer Sciences Diploma"
          />
          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Experience</h2>
          <Experience
            startYear={2012}
            endYear={2017}
            jobName=".NET Software Developer at Dticenter"
            jobPlace="Buenos Aires, Argentina"
            jobDescription="I built a software to maintain the administration of the gas stations in Argentina, this software serves to control fuel sales, stock and analyze the performance of employees.
            I functioned as primary Software developer of the development team."
          />

          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Skills</h2>
          <Skills
            skills="ASP.NET"
            progress={100}
          />
          <Skills
            skills="VB.NET"
            progress={100}
          />
          <Skills
            skills="C#"
            progress={50}
          />
          <Skills
            skills="SQL Server"
            progress={100}
          />
          <Skills
            skills="Javascript"
            progress={60}
          />
          <Skills
            skills="React JS"
            progress={50}
          />
          <Skills
            skills="HTML/CSS"
            progress={100}
          />
          <Skills
            skills="C3"
            progress={80}
          />
          <Skills
            skills="Bootstrap"
            progress={100}
          />
          <Skills
            skills=".NET Framework (4.0, 4.5)"
            progress={100}
          />
          <Skills
            skills="Report Builder"
            progress={70}
          />
          <Skills
            skills="Reporting Services (SSRS)"
            progress={70}
          />
          <Skills
            skills="IIS"
            progress={50}
          />

        </Cell>
      </Grid>
    )
  }
}

export default Resume;
