import React, { Component } from 'react'
import { getReviews, fetchSingleProduct } from "../../api/api";
import Carousel from './Carousel';
import {Container, Row, Col} from 'react-bootstrap'

export default class Details extends Component {
    state = {
        reviews: [],
        product: []
    }
    componentDidMount = async () => {
        let reviews = await getReviews(this.props.match.params.id);
        let product = await fetchSingleProduct(this.props.match.params.id);
        this.setState({product})
        this.setState({reviews});
    };
    render() {
        return (
            <Container className="my-5 py-5">
                <Row className="my-5 pt-5">
                    <Col md={6}>
                <img src={this.state.product.image} className="product-image-detail"/>
                </Col>
                <Col md={6}>
                    <h1>{this.state.product.name}</h1>
                    <p>{this.state.product.description}</p>
                    <div className="d-flex justify-content-between">
                    <span>{this.state.product.price}$</span>
                    <span>{this.state.product.brand}</span>
                    </div>
                </Col>
                </Row>
                <Carousel reviews={this.state.reviews} product={this.state.product}/>
            </Container>
        )
    }
}
