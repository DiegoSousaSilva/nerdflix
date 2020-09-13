import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/nerdflix.png';
import './menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

const URL = 'cadastro/video';
const Menu = () => (

  <nav className="menu">
    <Link to="/">
      <img className="logo" src={Logo} alt="logo" />
    </Link>

    <Button as={Link} className="buttonLink" to={URL}>
      Novo Video
    </Button>

  </nav>

);

export default Menu;
