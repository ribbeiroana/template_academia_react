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
padding: 20px;
color: #fff;

.icon {
background-color: #fff;
color: black;
width: 50px;
height: 50px;
padding: 10px;
border-radius: 20px;
}
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
