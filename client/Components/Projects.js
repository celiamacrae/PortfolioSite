import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
      <div>
        <h1 id='my_projects'>My Projects</h1>
        <div className='project'>
          <img className='project_img' src='https://avatars3.githubusercontent.com/u/59840616?s=200&v=4' />
          <a href='https://github.com/1911-GH-mushrooms/GraceShopper'>Grace Shopper</a>
          <p>Grace Shopper is E-commerce web application where users can purchase groceries and recipes</p>
          <ul>
            <li>PostgreSQL</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>React-Redux.js</li>
            <li>Node.js</li>
            <li>Google OAuth</li>
            <li>Stripe Payment Platform</li>
          </ul>
          <br />
        </div>
        <div className='project'>
          <img className='project_img' src='https://avatars2.githubusercontent.com/u/60450249?s=400&u=b50a16566758429f3ee239735bdadd7ab61b9abc&v=4' />
          <a href='https://github.com/celiamacrae/Graphit2.0'>GraphIt</a>
          <p>Graphit is a platform that transforms uploaded data from a non-technical user to “magically” produce the most appropriate graph in seconds</p>
          <ul>
            <li>PostgreSQL</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>React-Redux.js</li>
            <li>Node.js</li>
            <li>Chart.js </li>
          </ul>
          <br />
        </div>
        <div className='project'>
          <img className='project_img' src='https://avatars1.githubusercontent.com/u/60267185?s=400&u=6bdcd2359d29593392d41f452213606b43cd3f92&v=4' />
          <a href='https://github.com/Stackathon-Studdy-Buddy/Study-Buddy'>Study Buddy</a>
          <p>Study Buddy is an IOS meetup app for study groups that allows you to create and attend events</p>
          <ul>
            <li>Firebase Services</li>
            <li>Express.js</li>
            <li>React-Native</li>
            <li>React-Redux.js</li>
            <li>Node.js</li>
            <li>Apple Maps API</li>
          </ul>
        </div>
      </div>
    )
}

export default Projects


