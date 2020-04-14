import React, {Component} from 'react'

const Experience = () => {
    return (
      <div id='experiences'>
        <br />

        <div className='experience'>
          <h1>Fullstack Academy</h1>
          <h3>Software Engineering Teaching Fellow (2020)</h3>
          <img className='eduex_img' src='https://media-exp1.licdn.com/dms/image/C4D0BAQGDPuTINGjJYA/company-logo_200_200/0?e=2159024400&v=beta&t=DbYjofNnM6t66Pn_BPd_1oMHvasXqH3eSik09UJ9nW8' />
        </div>

        <div className='experience'>
          <h1>Grace Hopper Program at Fullstack Academy</h1>
          <h3>Software Engineering Student (2019-2020)</h3>
          <img className='eduex_img' src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2625/s300/161012-gh-facebook-profile-2x.jpg' />
        </div>

        <div className='experience'>
          <h1>Duke University</h1>
          <h3>Bachelors Degree Computer Science & Sociology Minor (2015-2019)</h3>
          <h5>Relevant Cousework: Introduction to Computer Science - Data Structures and Algorithms - Discrete Math for Computer Science - Computer Architecture - Introduction to Operating Systems - Introduction to the Design & Analysis of Algorithms - Everything Data - Technical and Social Analysis of Information and the Internet - Laboratory Calculus II - Probability</h5>
          {/* <img className='eduex_img' src='https://media.glassdoor.com/sqll/2775/duke-university-squarelogo.png' /> */}
          <img className='eduex_img' src='https://pbs.twimg.com/media/DZPSsn5VAAAlYO9.jpg:large' />
        </div>
      </div>
    )
}

export default Experience
