import styled from "styled-components"

export const LandingContainer = styled.header`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.2)),
  url("https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-
  4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
  ) no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: var(--white);
    font-weight: 800;
    font-size: 3.5rem;
    width: 60%;
    line-height: 1.1;
  }

  p {
    color: var(--white);
    width: 60%;
    margin-top: 1.5%;
    line-height: 1.2;
    margin-bottom: 2%;
  }

`
export const OfferText = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;

  p {
    color: var(--green);
    font-weight: 700;
    font-size: 3.5rem;
  }
`
export const FourFoldsContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  section {
    height: 100vh;
    width: 50%;
    padding: 10% 10%;

    div {
      h2 {
        color: var(--white);
        font-size: 2rem;
        margin-bottom: 15%;
        line-height: 1.5;
      }

      p {
        line-height: 1.5;
        margin-bottom: 10%;
      }

      h2, p, i {
        color: var(--green);
      }
    }
  }

  section:first-child {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.2)),
    url("https://img.freepik.com/free-photo/smooth-green-background_53876-108464.jpg?w=1060&t=st=1672155473~exp=1672156073~hmac=6fb04da12fbc13e4ac85715ec8ccf3cd7c30fd691bd4c3d42dc6b9b1b97768f2"
    ) no-repeat;
    background-size: cover;

    h2, p, i {
      color: var(--white) !important;
    }
  }

  section:last-child {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.2)),
    url("https://img.freepik.com/free-photo/brown-gradient-background_53876-102760.jpg?w=1060&t=st=1672160664~exp=1672161264~hmac=aed71bc719a170ff257697a702a24c6dd69d3b6a108a78435e1804207e07010f"
    ) no-repeat;
    background-size: cover;

    h2, p, i {
      color: var(--white) !important;
    }
  }
`
export const JoiningInfo = styled.main`
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.2)),
  url("https://img.freepik.com/free-photo/wooden-cottage-deserted-landscape-sunny-day_181624-50468.jpg?w=1060&t=st=1672161089~exp=1672161689~hmac=3a7a2c124666000e153bb5c5c731219ceb956b6621b5840ce48a427e83527d1a"
  ) no-repeat;
  height: 100vh;
  background-size: cover;
  padding: 10% 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--white);
  }

  p {
    margin-top: 3%;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
`
export const Growth = styled.section`
  height:100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  gap:20%;
  flex-wrap: wrap;
  background: rgb(75,142,101);
  background: linear-gradient(319deg, rgba(75,142,101,1) 5%, rgba(26,77,46,1) 89%);
  &>div{
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: -10%;
  }
  h4{
    font-size: 3.5rem;
    font-weight: 600;
    width: 30%;
    color: var(--white);
  }
`
export const Innovation = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
`
export const InnovationContainer = styled.div`
  max-width: 100%;
  height: inherit;
  width: 50%;
  padding:5% 10%;
  h5{
    color: var(--yellow);
    font-size: 1.5rem;
    margin-bottom: 6%;
  }
  h3{
    color: var(--green);
    font-size: 2.5rem;
    margin-bottom: 6%;
  }
  P{
    color: var(--green);
  }
`
export const ConsultancyBusiness = styled.div`
  display: flex;
  align-items: center;
  
  div{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 10%;
    
    p{
      color: var(--green);
      font-weight: lighter;
      &:hover{
        color: var(--yellow);
        cursor: pointer;
      }
    }
    img{
      width:40px;
      height: 40px;
    }
  }
`
export const ServicesDetails = styled.div`
  margin-top: 20%;
  h3{
    font-size: 1.7rem;
    margin-bottom: 10px;
  }
  h6{
    color: var(--green);
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 10%;
  }
  ul,li{
    color: gray;
    font-weight: lighter;
  }
  &>div:first-child{
    p{
      font-size: 1rem;
      font-weight: lighter;
      color: gray;
    }
  }
  &>div:last-child{
    margin-top: 15%;
    display: flex;
    align-items: center;
    gap: 60px;
    li{
      line-height: 1.5;
      margin-bottom: 10%;
    }
    aside{
      margin-top: -15%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`
export const InnovationContainer2 = styled(InnovationContainer)`
  position: relative;
  
`
export const ImageServices = styled.img`
  max-height: 100%;
  min-height: 80vh;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  object-position: left;

`
export const ImageServices2 = styled.img`
  position: absolute;
  top: 20%;
  left: 0;
  width: 220px;
  height: 220px;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 6px 14px 66px -23px rgba(0,0,0,0.6);
  -webkit-box-shadow: 6px 14px 66px -23px rgba(0,0,0,0.6);
  -moz-box-shadow: 6px 14px 66px -23px rgba(0,0,0,0.6);
`

export const Testimonial = styled.section`
  position: relative;
  padding:10%;
  display: flex;
  align-items: center;
  z-index: 3;
  
  h6{
    color: var(--yellow);
    font-size: 1.5rem;
    margin-bottom: 4%;
  }
  h4{
    font-size: 3rem;
    color: var(--green);
    margin-bottom: 4%;
  }
  p{
    color: gray;
    font-weight: lighter;
    width:70%;
    line-height: 1.5;
  }
  div:last-child{
    max-width: 100%;
    width: 60%;
    height: 35vh;
    div{
      width: 100%;
    }
  }
  
`

export const Blog = styled.section`
  margin-top: -170px;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;

  & > div {
    h4 {
      color: var(--green);
      font-size: 2rem;
      margin-bottom: 30px;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;

      div {
        width: 360px;
        padding-bottom: 40px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 2px 6px 14px -4px rgba(0, 0, 0, 0.14);
        -webkit-box-shadow: 2px 6px 14px -4px rgba(0, 0, 0, 0.14);
        -moz-box-shadow: 2px 6px 14px -4px rgba(0, 0, 0, 0.14);

        img {
          width: inherit;
          height: 200px;
          object-fit: cover;
          margin-bottom: 20px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        h5 {
          color: var(--green);
          font-size: 1.1rem;
          margin: 0 10px 20px 10px;
        }

        p {
          color: var(--green);
          font-weight: lighter;
          line-height: 1.3;
          margin: 0 10px 20px 10px;
        }
      }
    }
  }
`