import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { getCartItem, deleteFromCart, sendEmail } from "../../api/api";
import { BsTrashFill } from 'react-icons/bs';

export default class Cart extends Component {
    state = {
        items: [],
        total: 0,
    }

    componentDidMount = async () => {
        const items = await getCartItem()
        this.setState({ items })
        let total = 0;
        await this.state.items.forEach((item)=>{
            total += parseInt(item.price)
        })
        this.setState({total})
    };
    deleteCart=async(id)=>{
       await deleteFromCart(id)
       const items = await getCartItem()
       this.setState({ items })
       let total = 0;
        await this.state.items.forEach((item)=>{
            total += parseInt(item.price)
        })
        this.setState({total})

    }

    render() {
        return (
            <Container className="mt-5 pt-5">
                <Row>
                    <Col md={4} >
                        {this.state.items && this.state.items.map((e) =>
                            <Card className="card p-1 mb-2 mt-3" >
                                <div className="addToCart">
                                    <BsTrashFill className="addToCartIcon" onClick={() => this.deleteCart(e._id)} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{e.name}</Card.Title>
                                    <Card.Text className="description">
                                        {e.description}
                                    </Card.Text>
                                    <div className="m-0 p-0 d-flex justify-content-between align-items-center text-center">
                                        <Button variant="primary" className="productDetailsButton" onClick={() => this.props.props && this.props.props.props.history.push('/details/' + e._id)}>See more</Button>
                                        <p className="text-right text-muted m-0 p-0">$ {e.price}</p>
                                    </div>
                                </Card.Body>
                            </Card>)}
                    </Col>
                    <Col md={8} className="mt-3">
                        <Card style={{borderBottom: "none"}}>
                            <Card.Body>
                                <Card.Title>Your order:</Card.Title>
                                <Card.Text>
                                    The thing we care the most is for you to be fully satisfied both for our products and the delivery.
                                    We usually send the products in a few days.
                                    Thanks for choosing us! Feel free to contact us in case of problems
                                </Card.Text>
                                <Card.Subtitle className="my-3">Total: {this.state.total}$</Card.Subtitle>
                                <Button className="productDetailsButton" onClick={()=>sendEmail()}>Checkout</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
