import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
h2 {
    color: black;
    font-weight: 800;
    font-size: 40px;
    text-align: center;
  }
  h3 {
    margin-bottom: 1rem;
  }
`

export const Cards = styled.div`
display: flex;
.card-plans {
  width: 500px;
  background-color: #d9d9d9;
  background-image: linear-gradient(160deg, #d9d9d9 0%, #ffffff 100%);
  padding: 1rem 1rem;
  border-radius: 5px;
  margin: 2rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


  ul, li {
    list-style-type: none;
  }
  
  li {
    padding: 8px;

    .icon-green {
      color: green;
    }
    .icon-red {
      color: red;
    }
    }
  }

`
