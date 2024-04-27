import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(signin())}>Log in</button>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        {isLogged ? (
          <h3>Important things I shouldn't see</h3>
        ) : (
          <h3>Not logged in</h3>
        )}
      </div>
    </div>
  );
}

export default App;
