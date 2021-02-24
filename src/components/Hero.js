import React from 'react';

function Hero() {
  return (
    <header>
      <h1 className='hero__title'>Andy Beable</h1>
      <div className='links__container'>
        <a
          href='https://github.com/AndyBeable'
          className='social__links'
          target='_blank'
        >
          Github
        </a>
        <a
          href='https://www.linkedin.com/in/andy-beable/'
          className='social__links'
          target='_blank'
        >
          LinkedIn
        </a>
        <a
          href='https://twitter.com/Beabs19'
          className='social__links'
          target='_blank'
        >
          Twitter
        </a>
      </div>
    </header>
  );
}

export default Hero;
