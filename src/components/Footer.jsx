import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <div>
        <a href="https://www.facebook.com/pritesh.dube.7" target="blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/pritesh_dube/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/priteshdube"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/pritesh-dubey/"><FaLinkedin/></a>
        <a href="https://twitter.com/Pritesh4636"><FaTwitter/></a>
        </div>
      <p>
        Made with <span>❤</span> by Pritesh Dube <br />
        <a href="mailto:dubeypritesh88@gmail.com" target='blank'>dubeypritesh88@gmail.com</a>
      </p>
      <p>© All Rights Reserved</p>
    </footer>
  )
}

export default Footer