import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';

const Header: React.FC = () => {
    return (
        <>
            <Navbar bg="dark">
                <Nav.Link href="/" >CatFacts !</Nav.Link>
                <Nav.Link href="/random-fact">Random Fact</Nav.Link>
            </Navbar>
        </>
    );
}

export default Header;