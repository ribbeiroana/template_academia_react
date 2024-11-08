import React from 'react';
import { Container} from './style';
import fotoTech from '../../assets/scroll.png';
import imgfit from '../../assets/scrolld.png';


 const Scroll = () => {
  return (
    <Container>
       <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
        <img src={fotoTech} alt="logo" />
        <img className='img-fit' src={imgfit} alt="logo" />
    </Container>
  )}


  export default Scroll;