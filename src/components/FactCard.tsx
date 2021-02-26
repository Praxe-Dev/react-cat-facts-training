import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Fact } from '../types/fact';
import catPic from '../resources/cat.jpg';

interface Props {
    data: Fact | null
}

const FactCard: React.FC<Props> = (props) => {

    if (props.data == null) {
        return (
            <Card bg="Danger" style={{ width: '30rem', margin: '1rem', border: '3px solid blue' }}>
                <Card.Body>
                    <Card.Title >
                        Sorry but an error occured !
                    </Card.Title>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Card style={{ width: '30rem', margin: '1rem', border: '3px solid blue' }}>
            <Card.Img variant="top" src={catPic} />
            <Card.Body>
                {
                    props.data == null ?
                    <Card.Title >Sorry but an error occured !</Card.Title>
                    : 
                    <>
                        <Card.Title>Source : {props.data.source}</Card.Title>
                        <Card.Text>
                        {props.data.text}
                        </Card.Text>
                        <Button variant="primary">More detail</Button>
                    </>
                }
                
            </Card.Body>
        </Card>
    );
}

export default FactCard;