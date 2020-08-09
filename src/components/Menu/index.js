import React from 'react';

import Logo from '../../assets/img/nerdflix.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

const Menu = () =>{


  return(
    <nav className='menu'>
      <a href="/">
        <img className='logo' src={Logo} alt="logo"/>
      </a>
      <Button className='buttonLink' href="/"> 
        Novo Video
      </Button   >
    </nav>
  );
}

export default Menu;