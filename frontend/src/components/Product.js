import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
//<h5>{product.name}</h5>
//<img src={product.image} alt="" />

function Products({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body as="div">
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text as="div">
            <Ratings
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h5">CAD ${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Products;
