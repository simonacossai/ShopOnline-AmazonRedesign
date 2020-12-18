import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import './Carousel.css'


export default function Carousel({reviews}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Container className="mt-5">
            <Slider {...settings} className="mt-5">
                {reviews && reviews.map((e)=>                
                <Col className="mt-5">
                <Card className="review-card" >
                <Card.Body className="p-0">
                    <Card.Subtitle className="mb-2 text-muted">{e.rate}</Card.Subtitle>
                    <Card.Text>
                        {e.comment}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
                )}
            </Slider>
        </Container>
    )
}
