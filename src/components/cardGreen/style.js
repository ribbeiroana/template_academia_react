import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
`

export const Cards = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
gap: 4rem;

.card-green {
  background-color: #ffffff;
  background-image: linear-gradient(0deg, #ffffff 0%, #9cff1e 100%);
  padding: 0 4rem 8rem 4rem;
  border-radius: 1rem;
  margin: 1rem;

  h3 {
    color: #ffffff;
    font-size: 30px;
  }
  img {
    max-width: 350px;
    border-radius: 1rem;
  }
}
`
