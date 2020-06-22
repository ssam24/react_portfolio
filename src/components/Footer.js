import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Container id="footer" className="footer mw-100">
            <Row>
              <Col>
              <h3>Made by Samuel Crespo for AcademiaGeek</h3>
              <h4> © 2020</h4>
              </Col>
            </Row>
          </Container>
        )
    }
}
