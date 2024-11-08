import styled from 'styled-components';

export const Header = styled.div `
background-color: black;  
display: flex;
padding: 10px;
display: flex;
`

export const HeadersItems = styled.div `
ul, li {
list-style-type: none;
flex-direction: row;
display: flex;
gap: 20px;
padding: 20px;
color: #fff;

/* .icon {
  padding: 0px;
} */
}

li {
&:hover {
  color: #9CFF1E;
}
}
`

export const Soon = styled.div `
margin-left: 1rem;
`
