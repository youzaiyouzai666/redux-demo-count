import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

const reducer = function (state = {count:0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'ADD':
            return Object.assign({},state,{count: count+1});
        default:
            return state; //getState是通过这个获得初始值的
    }
};
const store   = createStore(reducer);

const addAction = {type: 'ADD'};
class Counter extends Component {
    render() {
        const {value,onAdd} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onAdd}>Increase</button>
            </div>
        )
    }
}
function mapStateTopProps(state){
    return {
        value: state.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        onAdd: ()=>dispatch(addAction)
    }
}
const App = connect(
    mapStateTopProps,
    mapDispatchToProps
)(Counter);
const render = () => ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
render();