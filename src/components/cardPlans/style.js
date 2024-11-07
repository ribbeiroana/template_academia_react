import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
`

export const Cards = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;

.card-plans {
  background-color: #D9D9D9;
  padding: 10rem;
  border-radius: 5px;
  margin: 1rem 5rem 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;

  h2 {
    color: #fff;
    font-weight: 800;
  }
}

`
