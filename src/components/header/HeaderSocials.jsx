import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ankit-meena-nitia2003/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/imAnkitMeena" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials