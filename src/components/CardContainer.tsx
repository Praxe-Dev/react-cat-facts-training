import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Fact } from '../types/fact';
import { Result } from '../types/result';
import FactCard from '../components/FactCard';
import API from '../api'



const CardContainer: React.FC = () => {
    const [facts, setFacts] = useState<Fact[]>([]);

    useEffect(() => {
        async function ApiCall() {
            const fetchedFacts: Result | null = await API.CatFactService.getCatFacts();
            setFacts(fetchedFacts?.data);
        }

        ApiCall();
    }, []);

    return (
        <Container>
            <Row>
                { facts.map(fact => <FactCard key={fact._id} data={fact}/>) }
            </Row>
        </Container>
    );
}

export default CardContainer;