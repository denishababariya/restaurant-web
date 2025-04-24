import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventsPage = () => {
    const events = [
        {
            id: 1,
            title: 'Wine Tasting Evening',
            date: 'August 25, 2023',
            time: '7:00 PM - 9:00 PM',
            description: 'Join us for an exclusive wine tasting event featuring premium selections from renowned vineyards.',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
            price: '$75 per person'
        },
        {
            id: 2,
            title: 'Chef\'s Table Experience',
            date: 'September 1, 2023',
            time: '6:30 PM - 9:30 PM',
            description: 'An intimate dining experience with our executive chef, featuring a special tasting menu.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
            price: '$120 per person'
        },
        {
            id: 3,
            title: 'Live Jazz Night',
            date: 'Every Friday',
            time: '8:00 PM - 11:00 PM',
            description: 'Enjoy live jazz music while dining on our special evening menu.',
            image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f',
            price: 'Regular menu prices'
        }
    ];

    return (
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-5">Upcoming Events</h1>
            <Row>
                {events.map(event => (
                    <Col lg={4} className="mb-4" key={event.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img 
                                variant="top" 
                                src={event.image} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title className="h4">{event.title}</Card.Title>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <FaCalendar className="me-2" />{event.date}
                                    </p>
                                    <p className="mb-1">
                                        <FaClock className="me-2" />{event.time}
                                    </p>
                                    <p className="mb-1">
                                        <FaMapMarkerAlt className="me-2" />Restaurant Main Hall
                                    </p>
                                </div>
                                <Card.Text>{event.description}</Card.Text>
                                <p className="text-primary fw-bold">{event.price}</p>
                                <Button variant="outline-primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default EventsPage;