import styled from "styled-components"

export const CarouselContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 6px 14px -4px rgba(0,0,0,0.14);
  -webkit-box-shadow: 2px 6px 14px -4px rgba(0,0,0,0.14);
  -moz-box-shadow: 2px 6px 14px -4px rgba(0,0,0,0.14);
  p{
    margin-top: 20px;
    font-size: 0.8rem;
    text-align: center;
  }
  em{
    font-size: 1rem;
    margin-top: 20px;
  }
  img{
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
  }
`