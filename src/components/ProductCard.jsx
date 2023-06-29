import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ products}) => {
  console.log(products, 'product');
  return (
    <Card style={{ width: "18rem" }} className="mb-3 position-relative">
      <Card.Img variant="top" src={products.image} height={300} className="p-2"  style={{objectFit: 'contain'}}/>
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
        {products.description}
        </Card.Text>
        <Button variant="primary" className="">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
