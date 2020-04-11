import React, {Component} from 'react'

const Contact = () => {
    return (
      <div id='allprojects'>
        <br />
        <h1 id='contact_me'>Contact Me</h1>
        <div className='contact_wrapper'>
          <div className='contact'>
            <a href='https://github.com/celiamacrae'>
              <img className='contact_img' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'/>
            </a>
            <a className='contact_link' href='https://github.com/celiamacrae'>https://github.com/celiamacrae</a>
          </div>
        </div>

        <div className='contact_wrapper'>
          <div className='contact'>
            <a href='https://www.linkedin.com/in/celia-macrae/'>
              <img className='contact_img' src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png'/>
            </a>
            <a className='contact_link' href='https://www.linkedin.com/in/celia-macrae/'>https://www.linkedin.com/in/celia-macrae/</a>
          </div>
        </div>

        <div className='contact_wrapper'>
          <div className='contact'>
            <a href='mailto:celiamacrae@gmail.com'>
              <img className='contact_img' src='https://cdn.clipart.email/d161e3ad2459c7b51f7888466a5aeff0_circle-email-inbox-letter-mail-message-messages-icon_512-512.png' />
            </a>
            <a className='contact_link' href='mailto:celiamacrae@gmail.com'>celiamacrae@gmail.com</a>
          </div>
        </div>
      </div>
    )
}

export default Contact
