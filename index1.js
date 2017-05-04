import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            num:  0
        };
        this.clickTest = this.clickTest.bind(this);

    }
    clickTest(){
        let _num = this.state.num;
        _num++;
        this.setState({
            num:_num
        })
    }
    render(){
        const {value, ts} = this.props;
        return (
            <div>
                <span>{this.state.num}</span>
                <button onClick={this.clickTest}>Increase</button>
            </div>
        )
    }
}
ReactDOM.render(
  <Counter value="1" />,
    document.getElementById('root')
);
