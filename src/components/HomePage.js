import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaUtensils, FaCalendarAlt, FaStar, FaClock, 
  FaMapMarkerAlt, FaPhoneAlt, FaAward, FaLeaf, 
  FaWineGlassAlt, FaUsers 
} from 'react-icons/fa';

const HomePage = () => {
  const specialOffers = [
    {
      id: 1,
      title: "Happy Hour Special",
      description: "Enjoy 50% off on all drinks between 4-7 PM, Monday to Thursday.",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
      buttonText: "View Details",
      link: "/events"
    },
    {
      id: 2,
      title: "Weekend Brunch",
      description: "All-you-can-eat brunch buffet every Saturday and Sunday from 10 AM - 2 PM.",
      image: "https://images.unsplash.com/photo-1533920379810-6bedac961c52",
      buttonText: "Reserve Now",
      link: "/reservations"
    },
    {
      id: 3,
      title: "Chef's Special Menu",
      description: "This month's special tasting menu featuring seasonal ingredients.",
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
      buttonText: "Explore Menu",
      link: "/menu"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center" style={{ 
        height: '100vh', 
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4") no-repeat center center/cover',
        marginTop: '-76px'
      }}>
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown" 
    style={{ 
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      fontSize: 'calc(2rem + 2vw)',
      letterSpacing: '1px'
    }}>
            A Culinary Journey Awaits
          </h1>
          <p className="lead mb-5 animate__animated animate__fadeInUp"
             style={{ fontSize: '1.5rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Experience the perfect blend of exquisite flavors and warm hospitality
          </p>
          <div className="d-flex justify-content-center gap-4">
            <Button 
              as={Link} 
              to="/reservations" 
              variant="primary" 
              size="lg" 
              className="me-3 animate__animated animate__fadeInLeft px-4 py-3"
              style={{ borderRadius: '30px', backgroundColor: '#8B1F3F', borderColor: '#8B1F3F' }}>
              Book a Table
            </Button>
            <Button 
              as={Link} 
              to="/menu" 
              variant="outline-light" 
              size="lg" 
              className="animate__animated animate__fadeInRight px-4 py-3"
              style={{ borderRadius: '30px' }}>
              View Menu
            </Button>
          </div>
        </Container>
      </section>

      {/* About Us Preview */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9" 
                  alt="Restaurant Interior" 
                  className="img-fluid rounded shadow-lg" 
                  style={{ objectFit: 'cover', height: '400px', width: '100%' }}
                />
                <div 
                  className="position-absolute" 
                  style={{ 
                    bottom: '-30px', 
                    right: '-30px', 
                    width: '200px', 
                    height: '200px',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}>
                  <img 
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" 
                    alt="Chef at Work" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5">
              <h2 className="display-5 fw-bold mb-4" style={{ 
  color: '#2c3e50',
  fontSize: 'calc(1.8rem + 1vw)',
  position: 'relative'
}}>
  Welcome to Gourmet Haven
  <div className="heading-underline" style={{
    width: '80px',
    height: '3px',
    background: '#8B1F3F',
    marginTop: '15px'
  }}></div>
</h2>
              <p className="lead mb-4" style={{ color: '#34495e' }}>
                At Gourmet Haven, we believe in creating more than just meals – we craft memorable dining experiences.
              </p>
              <p className="mb-4" style={{ color: '#7f8c8d' }}>
                Our restaurant combines modern culinary techniques with traditional flavors, using only the freshest local and sustainable ingredients. Led by award-winning Chef Michael Roberts, our team is dedicated to providing an unforgettable gastronomic journey.
              </p>
              <Button 
                as={Link} 
                to="/about" 
                variant="outline-primary" 
                className="px-4 py-2"
                style={{ borderRadius: '25px' }}>
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section py-5" style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="decorative-circles" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 0,
          background: `
            radial-gradient(circle at 10% 20%, #8B1F3F 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, #8B1F3F 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #8B1F3F 0%, transparent 30%)
          `
        }}></div>
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ 
  color: '#2c3e50',
  fontSize: 'calc(1.3rem + 1vw)',
  marginBottom: '2rem'
}}>
  Discover Our Offerings
  <div className="heading-underline" style={{
    width: '80px',
    height: '3px',
    background: '#8B1F3F',
    margin: '15px auto'
  }}></div>
</h2>
            <p className="lead text-muted">Explore our world-class culinary experiences</p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-lg hover-card" style={{
                borderRadius: '15px',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                <Card.Body className="text-center p-5">
                  <div className="icon-wrapper mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(139, 31, 63, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <FaUtensils style={{ color: '#8B1F3F', fontSize: '2rem' }} />
                  </div>
                  <Card.Title as="h3" className="fw-bold mb-3">Exquisite Menu</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Explore our diverse menu featuring culinary delights from around the world, prepared with the freshest ingredients.
                  </Card.Text>
                  <Button 
                    as={Link} 
                    to="/menu" 
                    variant="outline-primary" 
                    className="rounded-pill px-4 py-2 fw-bold"
                    style={{ 
                      color: '#8B1F3F', 
                      borderColor: '#8B1F3F',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                    Browse Menu
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-lg hover-card" style={{
                borderRadius: '15px',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                <Card.Body className="text-center p-5">
                  <div className="icon-wrapper mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(139, 31, 63, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <FaCalendarAlt style={{ color: '#8B1F3F', fontSize: '2rem' }} />
                  </div>
                  <Card.Title as="h3" className="fw-bold mb-3">Special Events</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    From wine tastings to live music nights, we host a variety of events to enhance your dining experience.
                  </Card.Text>
                  <Button 
                    as={Link} 
                    to="/events" 
                    variant="outline-primary" 
                    className="rounded-pill px-4 py-2 fw-bold"
                    style={{ 
                      color: '#8B1F3F', 
                      borderColor: '#8B1F3F',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                    View Events
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-lg hover-card" style={{
                borderRadius: '15px',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                <Card.Body className="text-center p-5">
                  <div className="icon-wrapper mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(139, 31, 63, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <FaStar style={{ color: '#8B1F3F', fontSize: '2rem' }} />
                  </div>
                  <Card.Title as="h3" className="fw-bold mb-3">Private Dining</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Celebrate special occasions with our private dining options, complete with personalized service.
                  </Card.Text>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-primary" 
                    className="rounded-pill px-4 py-2 fw-bold"
                    style={{ 
                      color: '#8B1F3F', 
                      borderColor: '#8B1F3F',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                    Inquire Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Special Offers Section with Enhanced Design */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="display-5 fw-bold mb-5" style={{ 
  color: '#2c3e50',
  fontSize: 'calc(1.3rem + 1vw)',
  position: 'relative'
}}>
  Special Offers & Promotions
  <div className="heading-underline" style={{
    width: '80px',
    height: '3px',
    background: '#8B1F3F',
    margin: '15px auto'
  }}></div>
</h2>
          <Carousel className="special-offers-carousel" indicators={false}>
            {[
              {
                id: 1,
                title: "Happy Hour Special",
                description: "Enjoy 50% off on all drinks between 4-7 PM, Monday to Thursday.",
                image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
                buttonText: "View Details",
                link: "/events"
              },
              {
                id: 2,
                title: "Weekend Brunch",
                description: "All-you-can-eat brunch buffet every Saturday and Sunday from 10 AM - 2 PM.",
                image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
                buttonText: "Reserve Now",
                link: "/reservations"
              },
              {
                id: 3,
                title: "Chef's Special Menu",
                description: "This month's special tasting menu featuring seasonal ingredients.",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
                buttonText: "Explore Menu",
                link: "/menu"
              }
            ].map(offer => (
              <Carousel.Item key={offer.id}>
                <div className="d-flex flex-column flex-md-row align-items-center bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="col-md-6 p-0 h-100">
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="img-fluid w-100" 
                      style={{ height: '400px', objectFit: 'cover' }} 
                    />
                  </div>
                  <div className="col-md-6 p-5">
                    <h3 className="mb-3" style={{ color: '#2c3e50' }}>{offer.title}</h3>
                    <p className="mb-4" style={{ color: '#7f8c8d' }}>{offer.description}</p>
                    <Button 
                      as={Link} 
                      to={offer.link} 
                      variant="primary"
                      className="px-4 py-2"
                      style={{ borderRadius: '25px', backgroundColor: '#8B1F3F', borderColor: '#8B1F3F' }}>
                      {offer.buttonText}
                    </Button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Testimonial Preview */}
      <section className="bg-dark text-white py-5" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1559329007-40df8a9345d8") no-repeat center/cover`
      }}>
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-5" style={{ 
  fontSize: 'calc(1.3rem + 1vw)',
  position: 'relative'
}}>
  What Our Guests Say
  <div className="heading-underline" style={{
    width: '80px',
    height: '3px',
    background: '#8B1F3F',
    margin: '15px auto'
  }}></div>
</h2>
          <div className="testimonial-preview">
            <div className="quote-icon mb-4">
              <i className="fas fa-quote-left fa-3x" style={{ color: '#8B1F3F' }}></i>
            </div>
            <p className="lead mb-4">
              "The ambiance was cozy, the service was impeccable, and the food was beyond amazing. Every dish was a work of art, bursting with flavors. This restaurant is definitely going to be my new favorite spot!"
            </p>
            <div className="testimonial-rating mb-3">
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
            </div>
            <p className="mb-0"><strong>Sarah Johnson</strong></p>
            <Button as={Link} to="/testimonials" variant="outline-light" className="mt-4">Read More Reviews</Button>
          </div>
        </Container>
      </section>

      {/* Restaurant Info */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4") no-repeat center/cover',
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)'
      }}>
        <Container>
          <Row className="g-4">
            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm text-center py-3 hover-card" 
                style={{ 
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255, 255, 255, 0.98)',
                  cursor: 'pointer',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="px-3">
                  <div className="icon-wrapper mb-3" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1) 0%, rgba(139, 31, 63, 0.2) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.1)'
                  }}>
                    <FaClock style={{ color: '#8B1F3F' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Opening Hours</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.9rem' }}>
                    <p className="mb-1">Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p className="mb-1">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm text-center py-3 hover-card" 
                style={{ 
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255, 255, 255, 0.98)',
                  cursor: 'pointer',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="px-3">
                  <div className="icon-wrapper mb-3" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1) 0%, rgba(139, 31, 63, 0.2) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.1)'
                  }}>
                    <FaMapMarkerAlt style={{ color: '#8B1F3F' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Location</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.9rem' }}>
                    <p className="mb-1">123 Gourmet Street</p>
                    <p className="mb-1">Foodville, FL 54321</p>
                    <Link 
                      to="/contact" 
                      className="btn btn-outline-primary mt-3"
                      style={{ 
                        color: '#8B1F3F', 
                        borderColor: '#8B1F3F',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        padding: '8px 20px'
                      }}>
                      View on Map
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm text-center py-3 hover-card" 
                style={{ 
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255, 255, 255, 0.98)',
                  cursor: 'pointer',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="px-3">
                  <div className="icon-wrapper mb-3" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1) 0%, rgba(139, 31, 63, 0.2) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.1)'
                  }}>
                    <FaPhoneAlt style={{ color: '#8B1F3F' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Contact Us</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.9rem' }}>
                    <p className="mb-1">(123) 456-7890</p>
                    <p className="mb-1">info@gourmethaven.com</p>
                    <Link 
                      to="/contact" 
                      className="btn btn-outline-primary mt-3"
                      style={{ 
                        color: '#8B1F3F', 
                        borderColor: '#8B1F3F',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        padding: '8px 20px'
                      }}>
                      Get in Touch
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm text-center py-3 hover-card" 
                style={{ 
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255, 255, 255, 0.98)',
                  cursor: 'pointer',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="px-3">
                  <div className="icon-wrapper mb-3" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1) 0%, rgba(139, 31, 63, 0.2) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.1)'
                  }}>
                    <FaCalendarAlt style={{ color: '#8B1F3F' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Reservations</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.9rem' }}>
                    <p className="mb-1">Book your table now</p>
                    <p className="mb-1">Special occasions welcome</p>
                    <Link 
                      to="/reservations" 
                      className="btn btn-primary mt-3"
                      style={{ 
                        backgroundColor: '#8B1F3F',
                        borderColor: '#8B1F3F',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        padding: '8px 20px'
                      }}>
                      Book Now
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Culinary Excellence Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(to right, rgba(139, 31, 63, 0.05), rgba(139, 31, 63, 0.1))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container className="position-relative">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-2" style={{ color: '#2c3e50',fontSize: 'calc(1.3rem + 1vw)' }}>Our Culinary Excellence</h2>
            <div className="separator mx-auto mb-4" style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(to right, #8B1F3F, #c62f57)'
            }}></div>
            <p className="lead" style={{ color: '#34495e' }}>Experience the finest in gastronomy</p>
          </div>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Card className="border-0 bg-transparent text-center h-100 hover-card" 
                style={{ 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="p-4" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(139, 31, 63, 0.1)'
                }}>
                  <div className="icon-wrapper mb-4" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, #8B1F3F, #c62f57)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.2)'
                  }}>
                    <FaAward style={{ color: '#ffffff' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Award Winning</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Recognized globally for our innovative cuisine and exceptional dining experience
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="border-0 bg-transparent text-center h-100 hover-card">
                <Card.Body className="p-4" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(139, 31, 63, 0.1)'
                }}>
                  <div className="icon-wrapper mb-4" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, #8B1F3F, #c62f57)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.2)'
                  }}>
                    <FaLeaf style={{ color: '#ffffff' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Fresh Ingredients</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Sourcing the finest local and seasonal ingredients for authentic flavors
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="border-0 bg-transparent text-center h-100 hover-card">
                <Card.Body className="p-4" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(139, 31, 63, 0.1)'
                }}>
                  <div className="icon-wrapper mb-4" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, #8B1F3F, #c62f57)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.2)'
                  }}>
                    <FaWineGlassAlt style={{ color: '#ffffff' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Fine Dining</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Elegant atmosphere with exceptional service and premium wine selection
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="border-0 bg-transparent text-center h-100 hover-card">
                <Card.Body className="p-4" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(139, 31, 63, 0.1)'
                }}>
                  <div className="icon-wrapper mb-4" style={{
                    width: '65px',
                    height: '65px',
                    background: 'linear-gradient(135deg, #8B1F3F, #c62f57)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 4px 15px rgba(139, 31, 63, 0.2)'
                  }}>
                    <FaUsers style={{ color: '#ffffff' }} size={28} />
                  </div>
                  <Card.Title as="h4" className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Private Events</Card.Title>
                  <Card.Text style={{ color: '#34495e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Customized dining experiences for special occasions and celebrations
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Section: Featured Dishes */}
      <section className="py-5 bg-light">
        <Container>
        <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-2" style={{ color: '#2c3e50',fontSize: 'calc(1.3rem + 1vw)' }}>Featured Dishes</h2>
            <div className="separator mx-auto mb-4" style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(to right, #8B1F3F, #c62f57)'
            }}></div>
         
          </div>
         
          <Row>
            {[
              {
                id: 1,
                name: "Grilled Salmon Supreme",
                description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
                price: "$32",
                image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927",
                category: "Seafood"
              },
              {
                id: 2,
                name: "Truffle Mushroom Risotto",
                description: "Creamy Arborio rice with wild mushrooms and truffle oil",
                price: "$28",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
                category: "Vegetarian"
              },
              {
                id: 3,
                name: "Prime Ribeye Steak",
                description: "28-day aged ribeye with roasted vegetables",
                price: "$45",
                image: "https://media.istockphoto.com/id/1314032218/photo/rare-rib-eye-steaks-with-herbs-and-spices-on-wooden-serving-board-with-white-beans-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=d_wRp3Be15TwFsawaAvepsay4lwVBmk8neCOd8HniRw=",
                category: "Meat"
              }
            ].map(dish => (
              <Col lg={4} md={6} className="mb-4" key={dish.id}>
                <Card className="border-0 shadow-sm h-100 hover-card">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={dish.image} 
                      alt={dish.name}
                      style={{ 
                        height: '300px',
                        objectFit: 'cover'
                      }}
                    />
                    <div 
                      className="position-absolute top-0 end-0 m-3 px-3 py-1"
                      style={{
                        backgroundColor: 'rgba(139, 31, 63, 0.9)',
                        color: '#fff',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>
                      {dish.category}
                    </div>
                  </div>
                  <Card.Body className="text-center p-4">
                    <Card.Title 
                      as="h4" 
                      style={{ 
                        color: '#2c3e50',
                        marginBottom: '0.5rem'
                      }}>
                      {dish.name}
                    </Card.Title>
                    <Card.Text 
                      style={{ 
                        color: '#7f8c8d',
                        fontSize: '0.95rem',
                        marginBottom: '1rem'
                      }}>
                      {dish.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <span 
                        style={{ 
                          color: '#8B1F3F',
                          fontSize: '1.25rem',
                          fontWeight: '600'
                        }}>
                        {dish.price}
                      </span>
                      <Button
                        as={Link}
                        to="/menu"
                        variant="outline-primary"
                        style={{ 
                          color: '#8B1F3F',
                          borderColor: '#8B1F3F',
                          borderRadius: '20px'
                        }}>
                        Order Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* New Section: Customer Experience */}
      <section className="py-5" style={{ 
  background: `linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)), 
               url("https://images.unsplash.com/photo-1514933651103-005eec06c04b") no-repeat center/cover`,
  position: 'relative',
  overflow: 'hidden'
}}>
  <div className="decorative-pattern" style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.03,
    backgroundImage: `
      radial-gradient(#8B1F3F 1.5px, transparent 1.5px),
      radial-gradient(#8B1F3F 1.5px, transparent 1.5px)
    `,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0, 15px 15px',
    pointerEvents: 'none'
  }}></div>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#2c3e50',fontSize: 'calc(1.3rem + 1vw)' }}>The Perfect Dining Experience</h2>
            <div className="separator mx-auto my-3" style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(to right, #8B1F3F, #c62f57)'
            }}></div>
            <p className="lead text-muted">Discover why we're the perfect choice for your dining pleasure</p>
          </div>
          
          <Row className="align-items-center g-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696"
                  alt="Restaurant Ambiance" 
                  className="img-fluid rounded-lg shadow-lg"
                  style={{
                    height: '500px',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
                <div className="position-absolute" style={{
                  bottom: '-30px',
                  right: '-30px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e"
                    alt="Chef Preparing Food"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="ps-lg-5">
                <h3 className="fw-bold mb-4" style={{ color: '#2c3e50' }}>Why Choose Us?</h3>
                <div className="feature-item d-flex mb-4">
                  <div className="flex-shrink-0" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1), rgba(139, 31, 63, 0.2))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaStar style={{ color: '#8B1F3F' }} size={24} />
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Exceptional Service</h5>
                    <p className="text-muted mb-0">Our dedicated staff ensures every visit becomes a cherished memory with attentive and personalized service.</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex mb-4">
                  <div className="flex-shrink-0" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1), rgba(139, 31, 63, 0.2))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaWineGlassAlt style={{ color: '#8B1F3F' }} size={24} />
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Curated Wine Selection</h5>
                    <p className="text-muted mb-0">Discover our carefully selected wines from around the world, perfectly paired with our exquisite dishes.</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex">
                  <div className="flex-shrink-0" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, rgba(139, 31, 63, 0.1), rgba(139, 31, 63, 0.2))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaLeaf style={{ color: '#8B1F3F' }} size={24} />
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>Fresh Ingredients</h5>
                    <p className="text-muted mb-0">We source only the finest local and seasonal ingredients to create dishes that celebrate authentic flavors.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Section: Our Specialties */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fff 100%)' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold" style={{ color: '#2c3e50',fontSize: 'calc(1.3rem + 1vw)' }}>Our Specialties</h2>
            <div className="separator mx-auto my-3" style={{
              width: '80px',
              height: '3px',
              background: '#8B1F3F',
              margin: '20px auto'
            }}></div>
          </div>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                    alt="Italian Cuisine"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Italian Cuisine</h4>
                  <p className="text-muted">Authentic Italian dishes made with imported ingredients</p>
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill mt-3"
                    style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                    View Menu
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3"
                    alt="Seafood"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Fresh Seafood</h4>
                  <p className="text-muted">Daily fresh catch prepared to perfection</p>
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill mt-3"
                    style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
                    alt="Desserts"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Sweet Delights</h4>
                  <p className="text-muted">Handcrafted desserts to satisfy your sweet tooth</p>
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill mt-3"
                    style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                    Discover
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
                    alt="Beverages"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Fine Beverages</h4>
                  <p className="text-muted">Curated selection of wines and cocktails</p>
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill mt-3"
                    style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                    View List
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Section: Chef's Recommendations */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold" style={{ color: '#2c3e50',fontSize: 'calc(1.3rem + 1vw)' }}>Chef's Recommendations</h2>
            <div className="separator mx-auto my-3" style={{
              width: '80px',
              height: '3px',
              background: '#8B1F3F',
              margin: '20px auto'
            }}></div>
          </div>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947"
                    alt="Signature Pasta"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#8B1F3F',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '25px',
                    fontSize: '0.9rem'
                  }}>
                    Best Seller
                  </div>
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Signature Pasta</h4>
                  <p className="text-muted">Handmade pasta with truffle cream sauce</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold" style={{ color: '#8B1F3F' }}>$24.99</span>
                    <Button 
                      variant="outline-primary" 
                      className="rounded-pill"
                      style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                      Order Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1546039907-7fa05f864c02"
                    alt="Grilled Salmon"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#8B1F3F',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '25px',
                    fontSize: '0.9rem'
                  }}>
                    Chef's Special
                  </div>
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Grilled Salmon</h4>
                  <p className="text-muted">Fresh Atlantic salmon with seasonal vegetables</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold" style={{ color: '#8B1F3F' }}>$29.99</span>
                    <Button 
                      variant="outline-primary" 
                      className="rounded-pill"
                      style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                      Order Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-lg hover-card h-100" style={{
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                    alt="Beef Tenderloin"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#8B1F3F',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '25px',
                    fontSize: '0.9rem'
                  }}>
                    Premium
                  </div>
                </div>
                <Card.Body className="text-center p-4">
                  <h4 className="mb-3">Beef Tenderloin</h4>
                  <p className="text-muted">Prime cut with red wine reduction</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold" style={{ color: '#8B1F3F' }}>$34.99</span>
                    <Button 
                      variant="outline-primary" 
                      className="rounded-pill"
                      style={{ color: '#8B1F3F', borderColor: '#8B1F3F' }}>
                      Order Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;