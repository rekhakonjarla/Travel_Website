import React from 'react'
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return 
  <section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newletter__input">
                        <input type='text' />
                    </div>
                </div>
            </Col>
            <Col lg='6'></Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
