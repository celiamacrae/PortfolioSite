import React, {Component} from 'react'

const logos = {
  js : 'https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png',
  node : 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
  express : 'https://cdn.glitch.com/project-avatar/fa1f1a9a-054c-42b2-93ab-83ec4f40695d.png?2017-09-13T18:38:00.967Z',
  react : 'https://cdn.worldvectorlogo.com/logos/react.svg',
  redux : 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  sequelize : 'https://cdn.worldvectorlogo.com/logos/sequelize.svg',
  css : 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
  html : 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png',
  git : 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  github : 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  java : 'https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png',
  python: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
  mocha: 'https://avatars2.githubusercontent.com/u/8770005?s=400&v=4',
  chai: 'https://s.gravatar.com/avatar/da8abf39a61072952c2b07a8364f334b?size=496&default=retro',
  cplusplus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
  latex: 'https://cdn.worldvectorlogo.com/logos/latex.svg',
  sql: 'https://software.3metas.com/wp-content/uploads/2014/04/sql2-compressed-1.jpg',
  reactnative: 'https://logodix.com/logo/1658565.png',
  scheme: 'https://users.cs.northwestern.edu/~robby/logos/plt-logo-red-diffuse.svg',
  r: 'https://www.r-project.org/logo/Rlogo.png',
  logisim: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logisim-icon.svg/1200px-Logisim-icon.svg.png',
  mips: 'https://mipsprotection.com/wp-content/uploads/2020/02/MIPS-LOGO-2018-RGB.jpg',
  firebase: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_0016c93c710cf35990b999cba3a59bae/firebase.png',
  heroku: 'https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png'
}

const Skills = () => {
    return (
      <div id='skills'>
        <h2>Proficient</h2>
        <div classname='skill_set'>
          <img className='skill_img' src={logos.js}/>
          <img className='skill_img' src={logos.node}/>
          <img className='skill_img' src={logos.express}/>
          <img className='skill_img' src={logos.react}/>
          <img className='skill_img' src={logos.redux}/>
          <img className='skill_img' src={logos.sequelize}/>
          <img className='skill_img' src={logos.css}/>
          <img className='skill_img' src={logos.html}/>
          <img className='skill_img' src={logos.git}/>
          <img className='skill_img' src={logos.github}/>
        </div>
        <h2>Knowledgeable</h2>
        <div classname='skill_set'>
          <img className='skill_img' src={logos.java}/>
          <img className='skill_img' src={logos.python}/>
          <img className='skill_img' src={logos.mocha}/>
          <img className='skill_img' src={logos.chai}/>
          <img className='skill_img' src={logos.cplusplus}/>
          <img className='skill_img' src={logos.latex}/>
          <img className='skill_img' src={logos.sql}/>
          <img className='skill_img' src={logos.reactnative}/>
        </div>
        <h2>Some Experience</h2>
        <div classname='skill_set'>
          <img className='skill_img' src={logos.scheme}/>
          <img className='skill_img' src={logos.r}/>
          <img className='skill_img' src={logos.logisim}/>
          <img className='skill_img' src={logos.mips}/>
          <img className='skill_img' src={logos.firebase}/>
          <img className='skill_img' src={logos.heroku}/>
        </div>

      </div>
    )
}

export default Skills
