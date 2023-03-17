import React from "react";
import logo from './Logo.png';
import GooglePlay from './img/GooglePlay.png'
import AppStore from './img/Appstore.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/FooterStyles.css'

export default function Footer() {
    return (
        <>
            {/* <img className="logo" src={logo} alt="Logo" /> */}
    <MDBFooter  className='text-center text-lg-start text-muted footer'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
        </div>
        <div>
        <a href="" className="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i class="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i class="fab fa-google"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i class="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
        </a>
        <a href="" className="me-4 text-reset">
        <i class="fab fa-github"></i>
        </a>
    </div>
    </section>
    <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <img className="footer-logo" src={logo} alt="Logo" />
                <p>
                Cooking In Style Ltd. is a collavorative cooking space to share and enjoy recipes from all over the world
                </p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Features</h6>
                <p>
                <a href='#!' className='text-reset'>
                    Get Started
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                    Add Recipes
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                    Search
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                    FAQ
                </a>
                </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                <a href='#!' className='text-reset'>
                    Pricing
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                    Settings
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                    Orders
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                    Help
                </a>
                </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                WBS Coding School Weiskopffstraße 16, 12459 Berlin
                </p>
                <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                Cooking@WBS.com
                </p>
                <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +49 030 555789760
                </p>
                
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <img className="store-icon"  src={GooglePlay} alt="Logo" />
        <img className="store-icon" src={AppStore} alt="Logo" />
        © 2023 Copyright:
        <a className='text-reset fw-bold'>
            CookingInStyle.com
        </a>
        </div>
    </MDBFooter>
        </>
    );
    
}




