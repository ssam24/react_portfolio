import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
export default class Welcome extends Component {
    render() {
        return (
            <Container id="welcome" className="welcome mw-100">
              <Row>
                  <Col className="info">

                  <h1 className="info"> Hi, My name is Samuel</h1>
                  <h2 className="info">a web developer</h2>
                  <h3 className="info">here you have my portfolio, hope you find it cool ;)</h3>

                  </Col>
              </Row>
             </Container>
                
            
        )
    }
}
