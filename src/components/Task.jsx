import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Task({data}) {
  console.log(data)
  return (
    <div className='cardTask'>
           <Card  style={{ width: '18rem' , textAlign : 'center' ,border : '1px solid black', backgroundColor : '#f0f0f0'}}>
                <Card.Body>
                  <Card.Title> {data.id}</Card.Title>
                  <Card.Text>
                   {data.description} ... <input type="checkbox" checked={data.checkTask} />
                  </Card.Text>
                <Button variant="primary"> Edit </Button>
              </Card.Body>
    </Card>
    </div>
  )
}
