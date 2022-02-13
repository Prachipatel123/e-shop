import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import {Card} from 'react-bootstrap'
  //<h5>{product.name}</h5>
  //<img src={product.image} alt="" />

function Products({product}) {
  return (
    <>
  <Card className="my-3 p-3 rounded">
    <a href={`/product/${product._id}`}>
      <Card.Img variant="top" src={product.image} />
    </a>
      <Card.Body as="div">
        <Card.Title>{product.name}</Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              <h6>
              {product.rating} from {product.numReviews} reviews
              </h6>
            </div>
          </Card.Text>
          
          <Card.Text as="h5">
            CAD ${product.price}
          </Card.Text>
      </Card.Body>
  </Card>
    </>
  )
}

export default Products
