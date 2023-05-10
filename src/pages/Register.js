import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import {Row, Col, Container} from 'react-bootstrap'

const Register = () => {
  return (
    <MainLayout>
        <Container>
        <Row>
            <Col className='info'> info</Col>
            <Col className=''> form</Col>
        </Row>
        </Container>
    </MainLayout>
  )
}

export default Register