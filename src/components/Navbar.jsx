import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const NAv = () => {
    return (
        <>
 
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            <ul className="d-flex">
            <li className=" mx-3 "> <Link className="text-decoration-none text-white" to="/"> Home </Link></li>
            <li className=" mx-3 "> <Link  className="text-decoration-none text-white"to="/about"> About</Link></li>
            <li className=" mx-3 "> <Link className="text-decoration-none text-white" to="/shop">Shop</Link></li>
            <li className=" mx-3 "> <Link className="text-decoration-none text-white" to="/count">Counter</Link></li>
            <li className=" mx-3 "> <Link className="text-decoration-none text-white" to="/products">Products</Link></li>
            <li className=" mx-3 "> <Link className="text-decoration-none text-white" to="/signin">Login</Link></li>
            <li className=" mx-3 "> <Link className="text-decoration-none text-white" to="/register">Register</Link></li>
            </ul>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
            
        </>
        // <Nav.Link to="/shop">Shop</Nav.Link>
    );
};
export default NAv;