import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import FactCard from './FactCard';
import { Fact } from '../types/fact';
import API from '../api'


const RandomFact: React.FC = () => {
    const [fact, setFact] = useState<Fact | null>(null);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            const result = await API.CatFactService.getRandomFact();
            setFact(result?.data);
        }

        fetchData();
    }, [refresh]);

    function handleClick() {
        setRefresh(!refresh);
    }

    return (
        <Container >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <FactCard key={fact?._id} data={fact}/>
            </div>
            <Button variant="primary" onClick={handleClick}>New fact !</Button>
        </Container>
    );
}

export default RandomFact;