import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaUtensils
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="mb-4 d-flex align-items-center">
              <FaUtensils className="me-2" size={24} />
              <h5 className="mb-0 fw-bold">Gourmet Haven</h5>
            </div>
            <p className="mb-4">Experience the perfect blend of exquisite flavors and warm hospitality at Gourmet Haven. We pride ourselves on quality ingredients and memorable dining experiences.</p>
            <div className="d-flex mb-3">
              <a href="#" className="text-white me-3"><FaFacebookF size={20} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={20} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaYoutube size={20} /></a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/menu" className="text-white text-decoration-none">Menu</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/reservations" className="text-white text-decoration-none">Reservations</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <FaMapMarkerAlt className="me-2 mt-1" />
                <span>123 Gourmet Street<br />Foodville, FL 54321</span>
              </li>
              <li className="d-flex mb-3">
                <FaPhoneAlt className="me-2 mt-1" />
                <span>(123) 456-7890</span>
              </li>
              <li className="d-flex mb-3">
                <FaEnvelope className="me-2 mt-1" />
                <span>info@gourmethaven.com</span>
              </li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-4">Newsletter</h5>
            <p className="mb-3">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Your Email" className="me-2" />
              <Button variant="primary" type="submit">Join</Button>
            </Form>
            <p className="mt-3 small">
              <small>By subscribing, you agree to our Privacy Policy and Terms of Service.</small>
            </p>
          </Col>
        </Row>
        
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© {new Date().getFullYear()} Gourmet Haven. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              <Link to="/privacy-policy" className="text-white text-decoration-none me-3">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white text-decoration-none">Terms of Service</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;