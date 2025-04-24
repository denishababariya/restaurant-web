import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaHandshake, FaAward } from 'react-icons/fa';

const AboutUsPage = () => {
  // Team data
  const teamMembers = [
    {
      id: 1,
      name: 'Chef Michael Roberts',
      role: 'Executive Chef',
      image: '/api/placeholder/400/400',
      bio: 'With over 20 years of culinary experience across Europe and Asia, Chef Michael brings his passion for global flavors and techniques to every dish he creates. Trained at Le Cordon Bleu in Paris, he has worked in Michelin-starred restaurants before establishing Gourmet Haven.'
    },
    {
      id: 2,
      name: 'Sophia Chen',
      role: 'Head Pastry Chef',
      image: '/api/placeholder/400/400',
      bio: 'A graduate of the Culinary Institute of America, Sophia specializes in creating desserts that are both visually stunning and exquisitely delicious. Her innovative approach to pastry combines traditional techniques with modern presentations.'
    },
    {
      id: 3,
      name: 'David Johnson',
      role: 'Sommelier',
      image: '/api/placeholder/400/400',
      bio: 'A certified Master Sommelier with a keen understanding of wine pairings, David curates our extensive wine collection and helps guests discover the perfect complement to their meal.'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Restaurant Manager',
      image: '/api/placeholder/400/400',
      bio: 'With a background in hospitality management and a dedication to exceptional service, Emily ensures that every guest experience at Gourmet Haven is seamless and memorable.'
    }
  ];

  // Values data
  const values = [
    {
      id: 'quality',
      title: 'Quality Ingredients',
      icon: <FaLeaf className="text-primary" size={40} />,
      description: 'We source the freshest, seasonal ingredients from local farms and trusted suppliers. Our produce is organic whenever possible, and our meats and seafood are sustainably sourced.'
    },
    {
      id: 'community',
      title: 'Community Connection',
      icon: <FaHandshake className="text-primary" size={40} />,
      description: 'We believe in supporting our local community through partnerships with area farmers, participation in community events, and charitable initiatives that give back.'
    },
    {
      id: 'creativity',
      title: 'Culinary Creativity',
      icon: <FaHandshake className="text-primary" size={40} />,
      description: 'Our chefs constantly explore new techniques and flavor combinations while respecting traditional culinary foundations. We embrace innovation while honoring classic cuisine.'
    },
    {
      id: 'experience',
      title: 'Exceptional Experience',
      icon: <FaAward className="text-primary" size={40} />,
      description: 'Every detail matters to us, from the presentation of our dishes to the ambiance of our dining room. We strive to create memorable moments for every guest who visits Gourmet Haven.'
    }
  ];

  return (
    <div className="about-page py-5 mt-5">
      {/* Hero Section */}
      <section className="position-relative mb-5" style={{ 
        height: '60vh', 
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/api/placeholder/1920/1080") no-repeat center center/cover'
      }}>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-3 fw-bold mb-4">Our Story</h1>
          <p className="lead">The passion and people behind Gourmet Haven</p>
        </div>
      </section>

      {/* Restaurant History */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-6 mb-4">From Dream to Reality</h2>
              <p className="lead mb-4">
                Founded in 2015, Gourmet Haven began as a vision to create a dining experience that celebrates culinary artistry and warm hospitality.
              </p>
              <p className="mb-3">
                What started as a small bistro with just 10 tables has grown into one of the city's most beloved dining destinations. Chef Michael Roberts and his wife Elena opened Gourmet Haven with a simple mission: to create dishes that tell a story, using locally-sourced ingredients and techniques gathered from around the world.
              </p>
              <p className="mb-3">
                Over the years, we've expanded our space, refined our menu, and built a team of passionate culinary professionals. Yet our core values remain unchanged—a commitment to exceptional quality, creative expression, and genuine hospitality.
              </p>
              <p>
                Today, Gourmet Haven continues to evolve while staying true to our founding principles, offering a dining experience that honors both tradition and innovation.
              </p>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <img src="/api/placeholder/600/400" alt="Restaurant History" className="img-fluid rounded shadow-lg" />
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Original Restaurant" 
                  className="img-fluid rounded shadow-lg position-absolute" 
                  style={{ bottom: '-50px', right: '-50px', maxWidth: '60%' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6">Our Values</h2>
            <p className="lead">The principles that guide everything we do</p>
          </div>
          <Row>
            {values.map(value => (
              <Col md={6} lg={3} key={value.id} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center py-4">
                  <Card.Body>
                    <div className="mb-3">
                      {value.icon}
                    </div>
                    <Card.Title as="h3">{value.title}</Card.Title>
                    <Card.Text>
                      {value.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6">Meet Our Team</h2>
            <p className="lead">The talented individuals behind your exceptional dining experience</p>
          </div>
          <Row>
            {teamMembers.map(member => (
              <Col md={6} lg={3} key={member.id} className="mb-4">
                <Card className="team-card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="position-relative">
                    <Card.Img variant="top" src={member.image} alt={member.name} />
                    <div className="team-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="team-social d-flex">
                        <a href="#" className="mx-2 bg-white rounded-circle p-2">
                          <i className="fab fa-instagram text-dark"></i>
                        </a>
                        <a href="#" className="mx-2 bg-white rounded-circle p-2">
                          <i className="fab fa-linkedin-in text-dark"></i>
                        </a>
                      </div>
                    </div>  
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title as="h4">{member.name}</Card.Title>
                    <p className="text-primary mb-3">{member.role}</p>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Restaurant Atmosphere */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-6 mb-4">Experience the Ambiance</h2>
              <p className="lead mb-4">
                Step into a warm, inviting space designed to complement our culinary vision.
              </p>
              <p className="mb-3">
                Our dining room combines rustic charm with contemporary elegance. Natural materials, soft lighting, and thoughtful details create an atmosphere that's both sophisticated and comfortable.
              </p>
              <p>
                Whether you're celebrating a special occasion in our private dining room, enjoying a romantic evening at a corner table, or gathering with friends at our chef's counter, our space is designed to enhance your dining experience.
              </p>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/api/placeholder/400/300" alt="Restaurant Interior" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/api/placeholder/400/300" alt="Restaurant Dining" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/api/placeholder/400/300" alt="Restaurant Bar" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/api/placeholder/400/300" alt="Private Dining Room" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Accolades */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="display-6 mb-5">Recognition & Accolades</h2>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="mx-4 mb-4 text-center">
                  <img src="/api/placeholder/150/150" alt="Award 1" className="img-fluid mb-3" style={{ maxHeight: '80px' }} />
                  <p className="mb-1"><strong>Best New Restaurant</strong></p>
                  <p className="text-muted">City Dining Awards, 2016</p>
                </div>
                <div className="mx-4 mb-4 text-center">
                  <img src="/api/placeholder/150/150" alt="Award 2" className="img-fluid mb-3" style={{ maxHeight: '80px' }} />
                  <p className="mb-1"><strong>Chef of the Year</strong></p>
                  <p className="text-muted">Culinary Excellence, 2018</p>
                </div>
                <div className="mx-4 mb-4 text-center">
                  <img src="/api/placeholder/150/150" alt="Award 3" className="img-fluid mb-3" style={{ maxHeight: '80px' }} />
                  <p className="mb-1"><strong>Three Stars</strong></p>
                  <p className="text-muted">Regional Food Guide, 2020</p>
                </div>
                <div className="mx-4 mb-4 text-center">
                  <img src="/api/placeholder/150/150" alt="Award 4" className="img-fluid mb-3" style={{ maxHeight: '80px' }} />
                  <p className="mb-1"><strong>Sustainability Award</strong></p>
                  <p className="text-muted">Green Dining Association, 2022</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUsPage;