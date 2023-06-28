import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: rgb(75,142,101);
  background: linear-gradient(319deg, rgba(75,142,101,1) 5%, rgba(26,77,46,1) 89%);
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 10%;
  div:first-child{
    p{
      color: white;
      text-align: center;
      font-weight: lighter;
      font-size: 0.9rem;
    }
  }
 div:last-child{
   p{
     line-height: 1.5;
     color: white;
   }
  
 }
  
`