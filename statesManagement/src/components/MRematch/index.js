import store from "./store";
import { Provider, connect } from "react-redux";

const MRematch = (props) => {
  return (
    <div className="box">
      <h2>MRematch</h2>
      <p>{props.count}</p>
      <button onClick={props.onIncrement}>increment</button>
      <button onClick={props.onDecrease}>decrease</button>
    </div>
  );
};

const MRematchApp = connect(
  (state) => {
    return { count: state.count };
  },
  (dispatch) => ({
    onIncrement: () => dispatch.count.increment(1),
    onDecrease: () => dispatch.count.decrease(1),
  })
)(MRematch);

const MRematchContainer = () => {
  return (
    <Provider store={store}>
      <MRematchApp />
    </Provider>
  );
};

export default MRematchContainer;
