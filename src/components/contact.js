import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import email from '../utils/email';

class Contact extends Component {

  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} tablet={12}>
            <h2>Magali Aromi</h2>
            <img
              src="../me3.jpg"
              alt="avatar"
              style={{height: '250px'}}
            />
            {/* TODO
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
              </p>
            */}
          </Cell>
          <Cell col={6} tablet={12}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fab fa-telegram" aria-hidden="true"/>
                    <a href="https://t.me/magaliaromi" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'black'}}>
                      @magaliaromi
                    </a>
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fas fa-envelope" aria-hidden="true"/>
                    <a href={`mailto:${email()}`} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'black'}}>
                      {email()}
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fab fa-facebook-messenger" aria-hidden="true"/>
                    <a href="https://m.me/magaliaromi" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'black'}}>
                      @magaliaromi
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fab fa-linkedin" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/magaliaromi/" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'black'}}>
                      @magaliaromi
                    </a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
