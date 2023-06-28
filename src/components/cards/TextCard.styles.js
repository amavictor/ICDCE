import styled from "styled-components"
export const Card = styled.section`
  height: fit-content;
  width: 450px;
  background-color: var(--white);
  border-radius: 30px;
  padding: 5% 10% 10% 10%;
  box-shadow: 6px 14px 66px -23px rgba(0,0,0,0.6);
  -webkit-box-shadow: 6px 14px 66px -23px rgba(0,0,0,0.6);
  -moz-box-shadow: 6px 14px 66px -23px rgba(0,0,0,0.6);
  img{
    width: 50px;
    height: 50px;
    border-top-left-radius: 30px;
  }
  h5{
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--green);
    margin-bottom: 3%;
  }
  p{
    color: var(--green);
    font-size: 1rem;
    line-height: 1.3;
    font-weight: lighter;
  }
`