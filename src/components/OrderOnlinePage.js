import React from 'react';
import { Container, Button } from 'react-bootstrap';

const OrderOnlinePage = () => {
    return (
        <Container>
            <h2>Order Online</h2>
            <Button variant="primary" href="/order">Order Now</Button>
        </Container>
    );
};

export default OrderOnlinePage;
