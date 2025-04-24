import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const TestimonialsPage = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            rating: 5,
            comment: 'The best dining experience I\'ve had in years! The food was exceptional and the service was impeccable.',
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
            date: 'June 15, 2023'
        },
        {
            id: 2,
            name: 'Michael Brown',
            rating: 5,
            comment: 'Amazing atmosphere and delicious food. The chef\'s special was outstanding!',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            date: 'July 2, 2023'
        },
        {
            id: 3,
            name: 'Emily Davis',
            rating: 5,
            comment: 'Perfect place for special occasions. The wine selection is impressive and the staff is very knowledgeable.',
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
            date: 'July 10, 2023'
        }
    ];

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-warning" />
        ));
    };

    return (
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-5">Customer Testimonials</h1>
            <Row>
                {testimonials.map(testimonial => (
                    <Col md={4} className="mb-4" key={testimonial.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="text-center">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="rounded-circle mb-3"
                                    style={{ width: '100px', height: '100px' }}
                                />
                                <div className="mb-3">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <Card.Text className="mb-4">"{testimonial.comment}"</Card.Text>
                                <Card.Title>{testimonial.name}</Card.Title>
                                <small className="text-muted">{testimonial.date}</small>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TestimonialsPage;