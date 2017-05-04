import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const reducer = function (state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return ++state;
        default:
            return state; //getState是通过这个获得初始值的
    }
};
const store   = createStore(reducer);
class Counter extends Component {
    render() {
        const {value} = this.props;
        return (
            <div>
                <span>{store.getState()}</span>
                <button onClick={()=>store.dispatch({type: 'ADD'})}>Increase</button>
            </div>
        )
    }
}
const render = () => ReactDOM.render(
    <Counter value="1"/>,
    document.getElementById('root')
);
render();
store.subscribe(render);