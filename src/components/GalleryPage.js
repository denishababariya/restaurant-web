import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GalleryPage = () => {
    const galleryImages = [
        {
            id: 1,
            title: 'Restaurant Interior',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
            category: 'Interior'
        },
        {
            id: 2,
            title: 'Signature Dish',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
            category: 'Food'
        },
        {
            id: 3,
            title: 'Private Dining',
            image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17',
            category: 'Interior'
        },
        {
            id: 4,
            title: 'Chef Special',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            category: 'Food'
        },
        {
            id: 5,
            title: 'Bar Area',
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
            category: 'Interior'
        },
        {
            id: 6,
            title: 'Dessert Collection',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
            category: 'Food'
        }
    ];

    return (
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-5">Our Gallery</h1>
            <Row>
                {galleryImages.map(image => (
                    <Col md={4} className="mb-4" key={image.id}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Img 
                                variant="top" 
                                src={image.image} 
                                alt={image.title}
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Card.Text>{image.category}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GalleryPage;