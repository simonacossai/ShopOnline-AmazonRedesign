import React, { Component } from 'react'
import { fetchProducts, fetchProductsByCategory } from "../../api/api";
import SingleProduct from './SingleProduct';
import { Container, Row, Col } from 'react-bootstrap';

export default class ProductList extends Component {
    state = {
        products: []
    }
    componentDidMount = async () => {
        let products = await fetchProducts();
        this.setState({ products });
    };
    getProductsByCategory = async (e) => {
        let category = e.currentTarget.value;
        if (category === "all") {
            let products = await fetchProducts();
            this.setState({ products });
        }
        else {
            let products = await fetchProductsByCategory(category)
            this.setState({ products });
        }
    }
    render() {
        return (
            <Container className="mt-5 pt-5">
                <Row>
                    <Col md={10}>  <hr></hr></Col>
                    <Col md={2}>
                        sort by
                    <select className="ml-2 selectCategory" onChange={(e) => this.getProductsByCategory(e)}>
                            <option value="all">category</option>
                            <option value="shoes">shoes</option>
                            <option value="top">top</option>
                            <option value="pants">pants</option>
                        </select>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {
                        this.state.products.map((product) =>
                            <SingleProduct product={product} props={this.props}/>
                        )
                    }
                </Row>
            </Container>
        )
    }
}
