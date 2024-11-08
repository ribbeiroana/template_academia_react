import React from 'react';
import { Container, Cards} from './style';
import Yoga from '../../assets/yoga.jpg';
import crossfit from '../../assets/crossfit.jpg';
import zumba from '../../assets/zumba.jpg';


 const CardsGreen = () => {
  return (
    <Container>
      <Cards>
        <div className='card-green'>
          <h3>Yoga</h3>
          <img src={Yoga} alt="yoga" />
        </div>

        <div className='card-green'>
        <h3>Crossfit</h3>
        <img src={crossfit} alt="crossfit" />
        </div>

        <div className='card-green'>
        <h3>Zumba</h3>
        <img src={zumba} alt="yoga" />
        </div>
      </Cards>

    </Container>
  )}


  export default CardsGreen;