import { Button } from '@mui/material'
import React from 'react'
import "./Home.scss"

export const Home = () => {
  return (
    <main>
      <header>
        <section className='header'>
          <h1>Empowering Lives, Transforming Communities</h1>
          <div>
            <h2>Unleashing Compassion, Igniting Change: A Journey Towards a Better World.</h2>
            <h2>Catalyzing Positive Impact through Education, Advocacy, and Opportunity</h2>
          </div>
          <Button variant='contained'>Learn more</Button>
        </section>
      </header>

      <section className='main-section'>
        <div className='purpose-card'>
          <div className='purpose-items'>
            <img
              src='../../asset/gifs/tech-support.gif'
              alt="Empowerment"
            />
            <h5>Empowerment </h5>
          </div>
          <div className='purpose-items'>
            <img
              src='../../asset/gifs/money-bag.gif'
              alt="Empowerment"
            />
            <h5>Community </h5>
          </div>
          <div className='purpose-items'>
            <img
              src='../../asset/gifs/money-bag.gif'
              alt="Empowerment"
            />
            <h5>Peace</h5>
          </div>
        </div>

        <section className='mission-vission'>
          <div>
            <div className='mission-vission-image-container'>
              <img
                src={'../../asset/images/img1.jpg'}
                alt="Empowerment1"
              />
              <img 
                src='../../asset/images/img2.jpg'
                alt='Empowerment2'
              />
              <img
                src='../../asset/images/img3.jpg'
                alt='Empowerment3'
              /> 
            </div>
            <div>
              <div>
                <h4>Our Mission</h4>
                <p>Description</p>
              </div>

              <div>
                <h4>Our Vision</h4>
                <p>Description</p>
              </div>

            </div>
          </div>
        </section>
      </section>

    </main>

  )
}
