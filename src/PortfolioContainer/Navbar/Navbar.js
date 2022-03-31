import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css';

export default function Nabar() {

    return (
        <Nav className='justify-content-center  clr' variant="tabs"
            defaultActiveKey="/home"  >
            <Nav.Item>
                <Nav.Link href="#home" className='link'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='#about' className='link'>AboutMe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" href='#experiences' className='link'>Experiences</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" href='#abilities' className='link'>Abilities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4" href='#contact' className='link'>ContactMe</Nav.Link>
            </Nav.Item>

        </Nav>

        
    )
}