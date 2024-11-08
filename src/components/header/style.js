import styled from 'styled-components';

export const Header = styled.div `
background-color: black;  
display: flex;
display: flex;
align-items: center;
justify-content: space-between;

`

export const HeadersItems = styled.div `
ul, li {
list-style-type: none;
flex-direction: row;
display: flex;
gap: 10px;
padding: 8px;
color: #fff;
}

li {
&:hover {
  color: #9CFF1E;
}
}
`

export const Soon = styled.div `
margin: 10px 1rem 0 0;
`
