import React from 'react';
import { Header, HeadersItems, Soon } from './style';
import logo from '../../assets/logoBig.png';
import { FaInstagram, FaYoutube, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Header>
      <Soon>
        <img src={logo} alt="logo" />
      </Soon>

      <HeadersItems>
        <ul>
          <li>
          <FaInstagram className='icon' />
          </li>
          <li>
          <FaYoutube className='icon'/>
          </li>
          <li>
          <FaLinkedin className='icon'/>
          </li>
          <li>
          <FaXTwitter className='icon'/>
          </li>
          </ul>
          <ul>
          <li>Contatos</li>
          <li>Endereço</li>
          <li>Outros</li>
        </ul>
      </HeadersItems>



    </Header>

  )
}

export default Footer;