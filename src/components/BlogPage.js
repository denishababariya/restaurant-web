import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'The Art of Food Plating',
            excerpt: 'Learn about the principles of food presentation and how we create visually stunning dishes.',
            image: 'https://images.unsplash.com/photo-1547496502-affa22d38842',
            date: 'August 1, 2023',
            author: 'Chef Michael Roberts'
        },
        {
            id: 2,
            title: 'Seasonal Ingredients: Summer Edition',
            excerpt: 'Discover the fresh ingredients we\'re using in our summer menu and why seasonal cooking matters.',
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
            date: 'July 15, 2023',
            author: 'Sophia Chen'
        },
        {
            id: 3,
            title: 'Wine Pairing Basics',
            excerpt: 'Our sommelier shares tips on how to pair wines with different types of dishes.',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
            date: 'July 1, 2023',
            author: 'David Johnson'
        }
    ];

    return (
        <Container className="py-5 mt-5">
            <h1 className="text-center mb-5">Our Blog</h1>
            <Row>
                {blogPosts.map(post => (
                    <Col lg={4} className="mb-4" key={post.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img 
                                variant="top" 
                                src={post.image} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title className="h4">{post.title}</Card.Title>
                                <div className="mb-3">
                                    <small className="text-muted">
                                        {post.date} | By {post.author}
                                    </small>
                                </div>
                                <Card.Text>{post.excerpt}</Card.Text>
                                <Button variant="outline-primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogPage;