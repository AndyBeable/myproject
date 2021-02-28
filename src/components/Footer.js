import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer__wrapper'>
      <div className='footer__info'>
        <p>Aspiring Frontend Developer. Currently learning React.</p>
      </div>
      <div className='footer__contact'>
        <a href='andy.beable@gmail.com'>andy.beable@gmail.com</a>
        <a href='tel:07519631401'>07519631401</a>
      </div>
      <div className='footer__social'>
        <a href='https://twitter.com/beabs19?lang=en'>
          <FaTwitter />
        </a>
        <a href='https://github.com/AndyBeable'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/andy-beable/'>
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default Footer;
