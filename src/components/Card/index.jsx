import React from 'react'

import { Card } from 'react-bootstrap';

export default function CardComp({ img , text }) {
  return (
    <Card style={{ width: '15rem' , display: 'flex' ,   alignItems: 'center', justifyContent: 'center' , background: 'whitesmoke' }}>
        <Card.Img variant="top" src={img} style={{ width: '120px' , margin: '25px 0' }}/>
        <Card.Body>
            <Card.Text style={{ textAlign: 'center' , marginBottom: "20px"}}>
                {text}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
