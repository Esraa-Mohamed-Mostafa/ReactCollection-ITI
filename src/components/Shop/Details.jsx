import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./Details.css";



const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});


  // console.log('params', params.id);

  const getProdectid = () => {
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }
  useEffect(() => {
    getProdectid();
  }, [])



   
  return (
            <div className="container">
      <div  className="d-flex py-5" >
        <Card.Img  className="me-4" src={product.image} />
        <Card.Body className="d-flex aligh-items-center flex-column">
          <h3 >{product.title}</h3>
          <h6>{product.category}</h6>
          <h5>{product.price}</h5>
          <Card.Text className="py-3">
            {product.description}
          </Card.Text>

        </Card.Body>
      </div>
    </div>

    

  )
}

export default Details



