import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export default class WorkWith extends Component {
    render() {
        return (
            <Container id="work_with" className="work_with mw-100 mh100">
            <Row>
              <Col>
              <h2>Let's talk and create nice projects together</h2>
               <h3>Find me here:</h3>

               <a id="profile-link" href="https://github.com/ssam24" target="_blank" className="btn contact-details">
                <i class="fab fa-github"></i>GitHub</a>
                <a href="https://www.instagram.com/ssamuel04/" target="_blank" class="btn contact-details">
            <i class="fab fa-instagram"></i>Instagram</a> 
              </Col>
            </Row>
          </Container>
        )
    }
}
