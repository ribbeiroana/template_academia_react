import React from 'react';
import { Header, HeadersItems, Soon } from './style';
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
        <img src="../../assets/logo.png" alt="logo" />
      </Soon>

    </Header>
 
  )
}

export default Headers;