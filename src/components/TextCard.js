import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

const TextCard = ({text,textHead,previewHeader}) => {
  return (
    <div className='container my-3'>
    <Card style={{ width: '70%' }}>
      <Card.Body>
        <Card.Title>{textHead}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{text.split(" ").length} word & {text.length} characters</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{0.08 * text.split(" ").length}minutes to read</Card.Subtitle>
        <Card.Text>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{previewHeader}</Accordion.Header>
        <Accordion.Body>
         {text}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default TextCard
