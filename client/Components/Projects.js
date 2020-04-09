import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
      <div>
        <h1>Projects Component</h1>
        <div>
          <img className='project_img' src='https://avatars3.githubusercontent.com/u/59840616?s=200&v=4' />
          <a href='https://github.com/1911-GH-mushrooms/GraceShopper'>Grace Shopper</a>
          <br />
        </div>
        <div>
          <img className='project_img' src='https://avatars2.githubusercontent.com/u/60450249?s=400&u=b50a16566758429f3ee239735bdadd7ab61b9abc&v=4' />
          <a href='https://github.com/celiamacrae/Graphit2.0'>GraphIt</a>
          <br />
        </div>
        <div>
          <img className='project_img' src='https://avatars1.githubusercontent.com/u/60267185?s=400&u=6bdcd2359d29593392d41f452213606b43cd3f92&v=4' />
          <a href='https://github.com/Stackathon-Studdy-Buddy/Study-Buddy'>Study Buddy</a>
        </div>
      </div>
    )
}

export default Projects


