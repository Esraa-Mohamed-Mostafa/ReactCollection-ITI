import { useEffect, useState } from "react";
import { Rate } from 'rsuite';
import { Link } from "react-router-dom";
import "./Shop.css";
import Card from 'react-bootstrap/Card';
import {    CardGroup,} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';



function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = () => {
        setLoading(true);
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setLoading(false);
                setProducts(json)
            })
        // console.log(json)
    };

    useEffect(() => {
        getProducts();

    }, []);

    if (loading) {
        return <>
        <div class="d-flex justify-content-center align-items-center py-5">


       <Spinner style={{ color: 'black',width:'8rem',  padding:'4rem' }} animation="border"  role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner> </div></>
    }


    console.log('products', products)
    return (
        <>
            <div className="py-3 ">
                <div className="container">
                    <h2 className="py-3 ">
                        Products
                    </h2>
                    <div className="d-flex flex-wrap">
                        <CardGroup>
                            <div className=" card-deck d-flex flex-wrap">
                            {products.map((product) => {
                                return (
                                    <div className="  me-2">
                                        <Card style={{ width: '13rem' }}>
                                            <Card.Img orientation="top" className="card-img-top p-4" src={product.image} />
                                            <Card.Body>
                                                <h4 >{product.title}</h4>
                                                <h5>{product.category}</h5>
                                                <h6>{product.price}</h6>
                                                <span>
                                                    <Rate className=" my-3 w-75" defaultValue={product.rating.rate} allowHalf /></span>
                                                <span className=" bg-dark p-2 rounded-circle">
                                                    <Link className=" text-decoration-none text-white" to={`/shop/${product.id}`}>Details</Link></span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })}
                            </div>
                            </CardGroup>
                    </div>
                </div></div>
        </>
    );
}
export default Shop;

{/* <img src={product.image} alt="" />
                            <h3> {product.title}</h3>
                            {product.category}
                            {product.price}
                           
                            <Link to={`/shop/${product.id}`}>Details</Link> */}