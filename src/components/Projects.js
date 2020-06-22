import React, { Component } from 'react'
import { Carousel, CarouselItem  } from 'react-bootstrap'

export default class Projects extends Component {
    render() {
        return (
            <Carousel id="projects" className="carousel">
              <CarouselItem>
                <h2>Pokemon Pokedex</h2>
              <a id="tribute" href="https://pokedex-js.now.sh/#/" target='_blank'>
              <img
                className="d-block" 
                src= {process.env.PUBLIC_URL + '/images/pokedex.PNG'}
                alt="Tribute Page"
              ></img> 
              </a>
            </CarouselItem>
            <CarouselItem>
                <h2>Pomodoro Clock</h2>
              <a id="tribute" href="https://pomodoro-clock-pearl.now.sh/" target='_blank'>
              <img
                className="d-block" 
                src= {process.env.PUBLIC_URL + '/images/pomodoro.PNG'}
                alt="Tribute Page"
              ></img> 
              </a>
            </CarouselItem>
            <CarouselItem>
                <h2>React Calculator</h2>
              <a id="tribute" href="https://react-js-calculator.now.sh/" target='_blank'>
              <img
                className="d-block" 
                src= {process.env.PUBLIC_URL + '/images/calculator.PNG'}
                alt="Tribute Page"
              ></img> 
              </a>
            </CarouselItem>
               <CarouselItem>
                <h2>Tribute Page</h2>
              <a id="tribute" href="https://ssam24.github.io/Tribute-page/" target='_blank'>
              <img
                className="d-block" 
                src= {process.env.PUBLIC_URL + '/images/tribute-page.PNG'}
                alt="Tribute Page"
              ></img> 
              </a>
            </CarouselItem> 
            <Carousel.Item>
                <h2>Survey Form</h2>
              <a id="survey" href="https://ssam24.github.io/survey-form/" target="_blank"> 
              <img
                className="d-block w-100"
                src= {process.env.PUBLIC_URL + '/images/survey.PNG'}
                alt="Survey form"
              /></a>
            </Carousel.Item>
            <Carousel.Item>
                <h2>Landing Page</h2>
                <a id="landing" href="https://ssam24.github.io/Product_Landing_Page/" target="_blank"> 
              <img
                className="d-block w-100"
                src= {process.env.PUBLIC_URL + '/images/landing.PNG'}
                alt="Third slide"
              /></a>
            </Carousel.Item>
            <Carousel.Item>
                <h2>Technical Documentation Page</h2>
                <a id="documentation" href="https://ssam24.github.io/Technical-Documentation-Page/" target="_blank"> 
              <img
                className="d-block w-100"
                src= {process.env.PUBLIC_URL + '/images/documentation.PNG'}
                alt="Third slide"
              /></a>
            </Carousel.Item>

          </Carousel> 
                
            
        )
    }}

