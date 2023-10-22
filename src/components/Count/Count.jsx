import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { globalIncrement } from "../../redux/slices/counterSlice";
import { globalDecrement } from "../../redux/slices/counterSlice";



function Count() {
  //global state
  const counterGlobalState = useSelector(state => state.counterSlice.value)
  console.log(counterGlobalState)
  const dispatch = useDispatch()
  const increment = () => { dispatch(globalIncrement()) }
  const decrement = () => { dispatch(globalDecrement()) }

  //local state
  // const [counter, setCounter] = useState(10);
  //  const increment = () => { setCounter(counter + 1) }
  // const decrement = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1)
  //   }
  // }
  return (
    <div className="  my-5 d-flex justify-content-center align-items-center flex-column">
      <div className="p-5 card">
        <h1 className="text-center py-4 my-5">{counterGlobalState}</h1>
        <div className="py-5">
          <Button className="me-5 p-3" onClick={increment} variant="success">Increment</Button>
          <Button className="p-3" onClick={decrement} variant="danger">Decrement</Button>
        </div>

      </div>
    </div>

  )
}


export default Count;