import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import flh from '../../Assets/Projects/flatiron-hub.png';
import mor from '../../Assets/Projects/moralis.png';
import spot from '../../Assets/Projects/spotify.png';
import nhl from '../../Assets/Projects/nhl.png';
import exp from '../../Assets/Projects/expense.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      {/* <Particle /> */}
      <Container>
      <h1 className="project-heading">
          My <strong className="blue"> Personal Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={exp}
              isBlog={false}
              title='Expense Tracker'
              description="Metaverse is a 'shared virtual environment that people access via the Internet'. The technology creates a set of virtual spaces where people can immerse themselves through holograms/avatars to make it feel like they are in the same physical space. However we've build a chat app using react-js next-js taiwand-css and moralis. Moralis provides us the backend support for storing and retrieving data from blockchain."
              link='https://expense-915b1.web.app/'
              link2='https://github.com/niraj23/Expense-App'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={mor}
              isBlog={false}
              title='Moralis Chat'
              description="This app was created to allow users to have a small, standalone application to log and keep track of their exercise's and to view them all in one central location. A full stack application that utilizes React.js for fast and responsive rendering, this application points to a Node.js/Express server that connects to a PostgreSQL database using Knex as the query builder."
              link='https://mind-your-fitness.vercel.app/'
              link2='https://github.com/Pete-Sekesan/mind-your-fitness'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={flh}
              isBlog={false}
              title='Flatiron Hub'
              description='React application for Flatiron students to use. Uses React with Hooks with and Context for state management. The application has 4 main components. The Chat uses ChatEngine as a rest API to create a chat room. 
              The Games and Learn components, both use external or self hosted APIs. The VideoChat component using PeerJs a WebRTC wrapper to create a peer to peer connection between two users.'
              link='https://flatironhub.org/'
              link2='https://github.com/niraj23/FlatIron-Hub'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={spot}
              isBlog={false}
              title='Christmas Spotify'
              description='This is an app based on my love for music and Christmas. Utilizing Spotifys API, you can search for any song or aaritst and play the song or add it to a custom playlist. There are also premade custom Global Top 50 songs(updated everytime Spotify updates their playlist), and a Christmas Playlist. The technology stack for this app included HTML, CSS, JavaScript, Rails, Recct and Spotify API.'
              link='https://christmas-spotify.web.app/'
              link2='https://github.com/niraj23/Christmas-Spotify'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={nhl}
              isBlog={false}
              title='NHL Fantasy App'
              description='My First App. A Javascript with BootStrap App built to showcase NHL Teams and their perspective players. Using an NHL API this App allows you to add your favorite players from each team to a favorites list to build your fantasy team. Double Clicking a Player Card will flip it and reveal their stats updated through the NHL API. Favorites persist and you can visit the favorites tocheck on your team. Players for each team are also categorized and marked by their position.'
              link='https://hockey-nu.vercel.app/'
              link='https://github.com/niraj23/NHL-Fantasy-App'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
