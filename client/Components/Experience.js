import React, {Component} from 'react'
import {exlogos} from '../logos'

const Experience = () => {
    return (
      <div id='experiences'>
        <br />

        <div className='experience'>
          <h1>Fullstack Academy</h1>
          <h3>Software Engineering Teaching Fellow (2020-Current)</h3>
          <img className='eduex_img' src={exlogos.fullstack} />
          <ul className='responsibilities'>
            <li>Resolve help tickets for 31 students learning full stack JavaScript using NERD stack</li>
            <li>Support technical and professional growth of 7-student learning team thorough office hours and learning team lunches</li>
            <li>Administer 3-4 behavioral and technical interviews per week to prospective students</li>
            <li>Manage student projects from ideation to deployment through agile workflow</li>
          </ul>
        </div>

        <div className='experience'>
          <h1>Grace Hopper Program at Fullstack Academy</h1>
          <h3>Software Engineering Student (2019-2020)</h3>
          <img className='eduex_img' src={exlogos.gracehopper} />
          <h5 id='ghdesc'>A 17-week immersive software engineering program based in New York City centered on full-stack JavaScript development, including Node.js, Express, Sequelize ORM for PostgreSQL databases, React and Redux; along with HTML & CSS, and CS fundamentals.</h5>
        </div>

        <div className='experience'>
          <h1>Duke University</h1>
          <h3>Bachelors Degree Computer Science & Sociology Minor (2015-2019)</h3>
          <img className='eduex_img' src={exlogos.duke} />
          <div id='courses'>
            <h5>Relevant Cousework: </h5>
            <h5 >Introduction to Computer Science - Data Structures and Algorithms - Discrete Math for Computer Science - Computer Architecture - Introduction to Operating Systems - Introduction to the Design & Analysis of Algorithms - Everything Data - Technical and Social Analysis of Information and the Internet - Laboratory Calculus II - Probability</h5>
          </div>
          <br />
          <div id='courses'>
            <h5>Member of:</h5>
            <h5>Duke Varsity Women's Rowing - Duke Student Government Research Unit (DSGRU) - Duke Peer Advocates for Sexual Health (PASH) </h5>
          </div>
          <br />
          <div id='courses'>
            <h5>Volunteer:</h5>
            <h5>Hillcrest Convalescent Center - Zero Waste Game Day - Rubenstein-Bing Student-Athlete Civic Engagement (ACE) Program - George Watts Elementary School</h5>
          </div>
          {/* <img className='eduex_img' src='https://media.glassdoor.com/sqll/2775/duke-university-squarelogo.png' /> */}
        </div>

        <div className='experience'>
          <h1>Social Science Research Institute</h1>
          <h3>Lab Assistant, Research on the Education and Development of Youth (REDY) Lab (2018)</h3>
          <img className='eduex_img' src={exlogos.ssri} />
          <ul className='responsibilities'>
            <li>Analyzed minority child participation in gifted classes in North Carolina public schools for state funded project Nurturing Bright Tomorrow (NBT)</li>
            <li>Assisted in planning and hosting Bold Ideas in Education: School Readiness Summit</li>
            <li>Produced summer readiness packets for students entering Kindergarten, 1st, and 2nd grade in Wake County Public Schools</li>
          </ul>

        </div>

      </div>
    )
}

export default Experience
