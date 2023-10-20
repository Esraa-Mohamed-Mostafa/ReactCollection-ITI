import { useState } from "react";
import Button from 'react-bootstrap/Button';


function Count() {

  const [counter, setCounter] = useState(10);
  const increment = () => { setCounter(counter + 1) }
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <div className="  my-5 d-flex justify-content-center align-items-center flex-column">
      <div className="p-5 card">
      <h1 className="text-center py-4 my-5">{counter}</h1>
      <div className="py-5">
        <Button className="me-5 p-3" onClick={increment} variant="success">Increment</Button>
        <Button className="p-3" onClick={decrement} variant="danger">Decrement</Button>
        </div>

      </div>
    </div>

  )
}


export default Count;