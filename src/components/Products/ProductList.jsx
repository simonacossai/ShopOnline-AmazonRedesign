import React, { Component } from 'react'
import { fetchProducts } from "../../api/api";
import SingleProduct from './SingleProduct';
import {Container, Row, Col} from 'react-bootstrap';
export default class ProductList extends Component {
    state={
        products:[]
    }
    componentDidMount = async () => {
        let products = await fetchProducts();
        this.setState({products});
      };
    
    render() {
        return (
            <Container className="mt-5 pt-5">
                <Row>
                    <Col md={10}>  <hr></hr></Col>
                    <Col md={2}> 
                    sort by
                    <select className="ml-2 selectCategory">
                    <option>category</option>
                    <option>shoes</option>
                    <option>top</option>
                    <option>pants</option>
                </select></Col>
                </Row>
                
            <Row className="mt-5">
            {
                this.state.products.map((product) =>
                    <SingleProduct product={product} />
                )
            }
            </Row>
        </Container>
        )
    }
}
