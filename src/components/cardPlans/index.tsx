import React from 'react';
import { Container, Cards } from './style';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const CardsPlans = () => {
  return (
    <Container>
      <h2>PLANOS</h2>
      <Cards>

      <div className='card-plans'>
          <h3>Plano Fitness - R$ 99/mês</h3>
          Ideal para quem quer iniciar a jornada fitness e ter acesso a uma rotina de treinos eficiente.
          <ul>
            <li>
              <AiOutlineCheckCircle className='icon-green' /> Acesso ilimitado à academia (horário comercial)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Aulas em grupo (Zumba, Yoga, Spinning, etc.)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Uso de todos os equipamentos de musculação e cardio
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acompanhamento básico (orientação geral sobre os equipamentos)
            </li>
            <li>
              <AiOutlineCloseCircle className='icon-red'/> Acompanhamento com personal trainer
            </li>
            <li>
              <AiOutlineCloseCircle  className='icon-red'/> Aulas especializadas (como HIIT, Crossfit)
            </li>
            <li>
              <AiOutlineCloseCircle className='icon-red'/> Acesso a áreas VIP ou exclusivos
            </li>
            <li>
              <AiOutlineCloseCircle className='icon-red'/> Descontos em eventos ou workshops da academia
            </li>
          </ul>
        </div>


        <div className='card-plans'>
          <h3>Plano Power - R$ 149/mês</h3>
          Para quem busca resultados mais rápidos com treinos intensos e acompanhamento regular.
          <ul>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acesso ilimitado à academia (horário comercial)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Aulas em grupo (Zumba, Yoga, Spinning, etc.)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Uso de todos os equipamentos de musculação e cardio
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> 1 sessão de personal trainer por semana
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Desconto em workshops e eventos exclusivos da academia
            </li>
            <li>
              <AiOutlineCloseCircle className='icon-red'/> Acesso a áreas VIP ou exclusivos
            </li>
            <li>
              <AiOutlineCloseCircle className='icon-red'/> Aulas especializadas (como HIIT, Crossfit)
            </li>
          </ul>
        </div>


        <div className='card-plans'>
          <h3>Plano Premium - R$ 199/mês</h3>
          Para quem busca o máximo de resultados com treinos personalizáveis e acompanhamento contínuo.
          <ul>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acesso ilimitado à academia (horário comercial)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Aulas em grupo (Zumba, Yoga, Spinning, etc.)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Uso de todos os equipamentos de musculação e cardio
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> 3 sessões de personal trainer por semana
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acesso a aulas especializadas (HIIT, Crossfit)

            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Desconto em eventos e workshops exclusivos
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acesso a áreas VIP da academia (spa, sauna, etc.)
            </li>
            <li>
              <AiOutlineCloseCircle className='icon-red'  /> Locker exclusivo
            </li>
          </ul>
        </div>

        <div className='card-plans'>
          <h3>Plano VIP - R$ 249/mês</h3>
          O plano mais completo, com serviços exclusivos e atendimento personalizado para quem quer maximizar seus resultados.
          <ul>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acesso ilimitado à academia (24 horas, se disponível)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Aulas em grupo (Zumba, Yoga, Spinning, etc.)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Uso de todos os equipamentos de musculação e cardio
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acompanhamento personalizado (3 sessões de personal trainer por semana)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Aulas especializadas (HIIT, Crossfit, etc.)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Desconto em workshops, eventos e treinamentos especializados
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Acesso a áreas VIP da academia (spa, sauna, etc.)
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Locker exclusivo e estacionamento VIP
            </li>
            <li>
              <AiOutlineCheckCircle className='icon-green'/> Horário preferencial para aulas e serviços
            </li>
          </ul>
        </div>

      </Cards>

    </Container>
  )
}


export default CardsPlans;