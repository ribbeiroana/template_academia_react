import React from 'react';
import { Container, DaysTimes } from './style';
import { IoIosTimer } from "react-icons/io";
const SectionTime = () => {
  return (
    <Container>
      <h2>HORÁRIOS</h2>

      <DaysTimes>
        <div className="days">
          <h4>Segunda - Sexta</h4>
          <h5><IoIosTimer /> 05:00 / 00:00</h5>
        </div>

        <div className="days">
          <h4>Sábado</h4>
          <h5><IoIosTimer /> 05:00 / 15:00</h5>
        </div>

        <div className="days">
          <h4>Domingo</h4>
          <h5><IoIosTimer /> 05:00 / 14:00</h5>
        </div>

        <div className="days">
          <h4>Feriados</h4>
          <h5><IoIosTimer /> 05:00 / 12:00</h5>
        </div>
      </DaysTimes>
    </Container>
  )
}


export default SectionTime;