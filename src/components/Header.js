import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaUtensils, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? '#fff' : (isHomePage ? 'transparent' : '#fff'),
  };

  const linkStyles = {
    color: scrolled ? '#2c3e50' : (isHomePage ? '#fff' : '#2c3e50'),
    transition: 'color 0.3s ease',
    fontWeight: '500',
  };

  const buttonStyles = {
    primary: {
      backgroundColor: '#8B1F3F',
      borderColor: '#8B1F3F',
      color: '#fff',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#7a1b37',
        borderColor: '#7a1b37',
      }
    },
    outline: {
      borderColor: scrolled ? '#8B1F3F' : (isHomePage ? '#fff' : '#8B1F3F'),
      color: scrolled ? '#8B1F3F' : (isHomePage ? '#fff' : '#8B1F3F'),
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#8B1F3F',
        borderColor: '#8B1F3F',
        color: '#fff',
      }
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={navStyles}
      className={`py-3 ${scrolled ? 'shadow-sm' : 'shadow-sm'}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaUtensils className="me-2" style={{ color: scrolled ? '#8B1F3F' : (isHomePage ? '#fff' : '#8B1F3F') }} />
          <span className="fw-bold" style={{ color: scrolled ? '#2c3e50' : (isHomePage ? '#fff' : '#2c3e50') }}>
            Gourmet Haven
          </span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className={scrolled || !isHomePage ? 'navbar-light' : 'navbar-dark'} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {['Home', 'Menu', 'About Us', 'Gallery', 'Events', 'Blog', 'Testimonials', 'Contact'].map((item) => (
              <Nav.Link 
                key={item}
                as={Link} 
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="mx-2"
                style={linkStyles}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex align-items-center">
            <Button 
              as={Link} 
              to="/reservations" 
              variant="outline-primary" 
              className="me-2"
              style={buttonStyles.outline}
            >
              Book a Table
            </Button>
            <Button 
              as={Link} 
              to="/order-online" 
              variant="primary"
              style={buttonStyles.primary}
            >
              Order Online
            </Button>
            <a 
              href="tel:+1234567890" 
              className="btn btn-link text-decoration-none ms-2"
              style={{ color: scrolled ? '#2c3e50' : (isHomePage ? '#fff' : '#2c3e50') }}
            >
              <FaPhone className="me-1" /> (123) 456-7890
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;