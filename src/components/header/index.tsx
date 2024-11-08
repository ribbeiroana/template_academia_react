import React from 'react';
import { Header, HeadersItems, Soon } from './style';
import logo from '../../assets/logo.png';

 const Headers = () => {
  return (
    <Header>

      <HeadersItems>
        <ul>
          <li>Início</li>
          <li>Horários</li>
          <li>Planos</li>
        </ul>
      </HeadersItems>

      <Soon>
        <img src={logo} alt="logo" />
      </Soon>

    </Header>
 
  )
}

export default Headers;