import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ReservationPage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [partySize, setPartySize] = useState('');

    const handleReservationSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation Confirmed for ${name} on ${date} at ${time}`);
    };

    return (
        <Container>
            <h2 className="my-4">Reserve a Table</h2>
            <Form onSubmit={handleReservationSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPartySize">
                    <Form.Label>Party Size</Form.Label>
                    <Form.Control type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Confirm Reservation
                </Button>
            </Form>
        </Container>
    );
};

export default ReservationPage;
