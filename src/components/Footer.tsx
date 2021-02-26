import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer style={{ position: 'fixed', left:0, bottom:0, right:0 }}>
            <Container fluid style={{ padding: '3rem', backgroundColor: 'lemonchiffon' }}>
                    ༼ つ ◕_◕ ༽つ Thanks for visiting ! ༼ つ ◕_◕ ༽つ
                
            </Container>
        </footer>
    );
}

export default Footer;