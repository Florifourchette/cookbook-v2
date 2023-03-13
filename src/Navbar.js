import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink, Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/NavbarStyles.css';
import logo from './Logo.png';


function NavigationBar({callback} ) {
    const handleSearchInput = (e) => {
        callback(e.target.value);
        };
    return (
        <>
            <Navbar className="Navbar" expand="lg">
                <Navbar.Brand> <img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="search-bar" inline>
                        <FormControl
                            type="text"
                            placeholder="Find the best recipes!"
                            className="mr-sm-2"
                            onChange={handleSearchInput}
                        />
                    </Form>
                    <Nav>
                        <NavLink
                            className="Nav-link"    to="/"
                            style={{ textDecoration: 'none' }}
                        >
                            Home
                        </NavLink>
                        
                        <NavLink className="Nav-link"   to="/about">
                            About
                        </NavLink>
                        <NavLink className="Nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavigationBar;
