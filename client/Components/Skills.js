import React, {Component} from 'react'
import logos from '../logos'

class Skills extends Component  {

    constructor(){
      super()
      this.state = {}
      this.onHover = this.onHover.bind(this)
      this.offHover = this.offHover.bind(this)
    }

    onHover(e){
      this.setState({
        [e.target.id] : true
      })
    }

    offHover(e){
      this.setState({
        [e.target.id] : false
      })
    }

    render(){
      return (
        <div id='skills'>
          <br />
          <h2 className='skill_level'>Proficient</h2>
          {/* <br /> */}

          <div className='skill_set'>
            <div className='skill'>
              <img id='js' className='skill_img' src={logos.js} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.js ? (<p className='skill_name'>JavaScript</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='node' className='skill_img' src={logos.node} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.node ? (<p className='skill_name'>Node.js</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='express' className='skill_img' src={logos.express} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.express ? (<p className='skill_name'>Express.js</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='react' className='skill_img' src={logos.react} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.react ? (<p className='skill_name'>React.js</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='redux' className='skill_img' src={logos.redux} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.redux ? (<p className='skill_name'>Redux.js</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='sequelize' className='skill_img' src={logos.sequelize} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.sequelize ? (<p className='skill_name'>Sequelize.js</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='css' className='skill_img' src={logos.css} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.css ? (<p className='skill_name'>CSS</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='html' className='skill_img' src={logos.html} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.html ? (<p className='skill_name'>HTML</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='git' className='skill_img' src={logos.git} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.git ? (<p className='skill_name'>Git</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='github' className='skill_img' src={logos.github} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.github ? (<p className='skill_name'>GitHub</p>) : (<br />)}
            </div>
          </div>

          <br />
          <h2 className='skill_level'>Knowledgeable</h2>
          {/* <br /> */}

          <div className='skill_set'>
            <div className='skill'>
              <img id='java' className='skill_img' src={logos.java} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.java ? (<p className='skill_name'>Java</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='python' className='skill_img' src={logos.python} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.python ? (<p className='skill_name'>Python</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='chart' className='skill_img' src={logos.chart} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.chart ? (<p className='skill_name'>Chart.js</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='mocha' className='skill_img' src={logos.mocha} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.mocha ? (<p className='skill_name'>Mocha</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='chai' className='skill_img' src={logos.chai} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.chai ? (<p className='skill_name'>Chai</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='cplusplus' className='skill_img' src={logos.cplusplus} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.cplusplus ? (<p className='skill_name'>C++</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='latex' className='skill_img' src={logos.latex} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.latex ? (<p className='skill_name'>LaTeX</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='sql' className='skill_img' src={logos.sql} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.sql ? (<p className='skill_name'>SQL</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='reactnative' className='skill_img' src={logos.reactnative} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.reactnative ? (<p className='skill_name'>React Native</p>) : (<br />)}
            </div>
          </div>

          <br />
          <h2 className='skill_level'>Some Experience</h2>
          {/* <br /> */}

          <div className='skill_set'>
            <div className='skill'>
              <img id='scheme' className='skill_img' src={logos.scheme} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.scheme ? (<p className='skill_name'>Scheme</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='r' className='skill_img' src={logos.r} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.r ? (<p className='skill_name'>R</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='logisim' className='skill_img' src={logos.logisim} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.logisim ? (<p className='skill_name'>Logisim</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='mips' className='skill_img' src={logos.mips} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.mips ? (<p className='skill_name'>MIPS</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='firebase' className='skill_img' src={logos.firebase} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.firebase ? (<p className='skill_name'>Firebase</p>) : (<br />)}
            </div>
            <div className='skill'>
              <img id='heroku' className='skill_img' src={logos.heroku} onMouseOver={this.onHover} onMouseOut={this.offHover}/>
              {this.state.heroku ? (<p className='skill_name'>Heroku</p>) : (<br />)}
            </div>
          </div>

        </div>
      )
    }


}

export default Skills
