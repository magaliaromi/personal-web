import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  reactSection() {
    return(
      <Grid>
        <Cell col={5} tablet={12}>
          <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.cygnismedia.com/images/post-images/reasons-why-react-js-is-popular/react-js-logo.jpg) center / cover'}}>Personal Web Project</CardTitle>
            <CardText>
                This project is my personal web, where you can find information about my professional background.
            </CardText>
            <CardActions border>
                <a
                  className="mdl-button mdl-js-button mdl-button--colored"
                  href="https://github.com/magaliaromi/personal-web"
                  target="_blank"
                >GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>

        <Cell offsetDesktop={2} col={5} tablet={12}>
          <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.cygnismedia.com/images/post-images/reasons-why-react-js-is-popular/react-js-logo.jpg) center / cover'}}>Todos Project</CardTitle>
            <CardText>
                This is a project that i made to learn ReactJS, it is a Todos page,
                where you can add, or delete a card for a user.
            </CardText>
            <CardActions border>
              <a
                className="mdl-button mdl-js-button mdl-button--colored"
                href="https://github.com/magaliaromi/todos"
                target="_blank"
              >GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
      </Grid>
    );
  }

  dotNetSection() {
    return (
      <Grid>
        <Cell col={5} tablet={12}>
          <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://media.rehansaeed.com/rehansaeed/2014/02/NET-1024x576.png) center / cover'}}>.NET Project #1</CardTitle>
            <CardText>
                This is a big project that i've been working during my 5 years working in my country.
                The principal objetive of this project is to maintain the administration of the gas stations in Argentina, this software serves
                to control fuel sales, stock and analyze the performance of employees,etc.
                I can provide Power Point made by the company if someone could need more information
                about this project.
            </CardText>
            <CardActions border>
                <Button style={{textDecoration: 'none'}}>PRIVATE</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>

        <Cell offsetDesktop={2} col={5} tablet={12}>
          <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://media.rehansaeed.com/rehansaeed/2014/02/NET-1024x576.png) center / cover'}}>.NET Project #2</CardTitle>
            <CardText>
                This is a project for clients of one of the biggest fuel company in Argentina.
                This system works so that customers can check the points they have with their
                 benefits card and in this way be able to acquire prizes at their service station.
            </CardText>
            <CardActions border>
                <Button style={{textDecoration: 'none'}}>PRIVATE</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
      </Grid>
    );
  }

  htmlSection() {
    return (
      <Grid>
        <Cell col={5} tablet={12}>
          <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://link-in.co.il/wp-content/uploads/2016/02/html5.jpg) center / cover'}}>Web Project</CardTitle>
            <CardText>
                This project is my old personal web, where you can find information
                about me and contact.
            </CardText>
            <CardActions border>
              <a
                className="mdl-button mdl-js-button mdl-button--colored"
                href="https://github.com/magaliaromi/old-personal-web"
                target="_blank"
              >GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
      </Grid>
    );
  }

  toggleCategories() {
    let section;
    switch (this.state.activeTab) {
      case 0:
        section = this.reactSection();
        break;
      case 1:
        section = this.dotNetSection();
        break;
      case 2:
        section = this.htmlSection();
        break;
      default:
        return (<div/>);
    }
    return (
      <div className="projects-grid">
        { section }
      </div>
    );
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>.NET</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
