import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";
import { Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import Ratings from "../components/Ratings";

function ProductScreen() {
  const { id } = useParams();
  console.log(id);

  const product = products.find((p) => p._id === id);
  console.log(product.name);

  return (
    <>
      <Link to="/" className=" btn btn-dark my-3">
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt="product.name" fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h5>{product.name}</h5>
            </ListGroup.Item>

            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : CAD {product.price}</ListGroup.Item>

            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col> CAD {product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Stock</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
