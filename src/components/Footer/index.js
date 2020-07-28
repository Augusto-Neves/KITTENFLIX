import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import Insta from '../../assets/img/Instagram.png'
import Linkedin from '../../assets/img/Linkedin.png'
import Github from '../../assets/img/Github.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="ImageFooter" src={Logo} alt="Logo Kittenflix" />
      </a>
      <p>
        Criado por <a href="https://www.instagram.com/_augusto_neves/" target="blank">Augusto Neves</a> durante a
        {' '}
        <a href="https://www.alura.com.br/" target='blank'>
          Imersão React da Alura
        </a>        
      </p>
      <div className="Redes">
        <a href="https://www.instagram.com/_augusto_neves/" target="blank">
          <img className="Insta" src={Insta} alt="Instagram" target="blank"/>
        </a>
        <a href="https://www.linkedin.com/in/augusto-neves-066b7b1ab/" target='blank'>
          <img className="Linkedin" src={Linkedin} alt="Linkedin"/>
        </a>
        <a href="https://github.com/Augusto-Neves" target="blank" >
          <img className="GitHub" src={Github} alt="GitHub"/>
        </a>
      </div>
    </FooterBase>
  );
}

export default Footer;
