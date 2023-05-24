import { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

// a. 创建UI组件(类组件)
class ClassRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="box">
        <h2>MRedux</h2>
        <p>{this.props.count}</p>
        <button onClick={this.props.onIncrement}>increment</button>
        <button onClick={this.props.onDecrease}>decrease</button>
      </div>
    );
  }
}
// 创建函数组件
const FuncRedux = (props) => {
  return (
    <div className="box">
      <h2>MRedux</h2>
      <p>{props.count}</p>
      <button onClick={props.onIncrement}>increment</button>
      <button onClick={props.onDecrease}>decrease</button>
    </div>
  );
};
// b. 使用connect方法将容器组件包裹UI组件形成新的组件
const ClassReduxApp = connect(
  (state) => state, // b1. 将外部的state通过容器组件转化为props传递给UI组件
  (dispatch) => {
    // b2. 将UI组件发出的action进行dispatch到store中交给reducer处理
    return {
      onIncrement: () => dispatch({ type: "increment" }), // 定一个action并dispatch
      onDecrease: () => dispatch({ type: "decrease" }),
    };
  }
)(FuncRedux); // FuncRedux,ClassRedux

// 1. 初始化状态
const initState = { count: 0 };

// 2. 定一个reducer来处理UI发出的动作
const classReducer = (state = initState, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// 3. 创建store用来存储状态和保存reducer方法
const store = createStore(classReducer);

// 4. 创建provider提供给自组件store
const ReduxContainer = () => {
  return (
    <Provider store={store}>
      <ClassReduxApp />
    </Provider>
  );
};

export { ReduxContainer };
