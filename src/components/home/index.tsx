import React from 'react';
import { Container } from './style';
import img from '../../assets/home.jpg'
 const Home = () => {
  return (
    <Container>
      <img src={img} alt="" />
    </Container>
  )
}

export default Home;