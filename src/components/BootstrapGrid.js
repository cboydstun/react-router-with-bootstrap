import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Grid() {
    return (
        <Container className="row-container">
            <Row className="row">
                <Col>1 of 1</Col>
            </Row>

            <Row className="row">
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>

            <Row className="row">
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row >

            <Row className="row">
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>

            <Row>
                <Col>1 of 3</Col>
                <Col xs={5}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    )
}
