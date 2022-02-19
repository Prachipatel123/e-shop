import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <h3>
              <Product product={product} />
            </h3>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
