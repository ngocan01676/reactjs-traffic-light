import React,{ Component} from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0;
const GREEN = 1;
const ORANGE = 2;

class TrafficLight extends Component {


  render() {
    const {currentColor} = this.props;
    return (
        <div className="TrafficLight">
          <div className={classNames('item','red',{ active: currentColor === RED })}></div>
          <div className={classNames('item','green',{ active: currentColor === GREEN })}></div>
          <div className={classNames('item','orange',{ active: currentColor === ORANGE })}></div>
        </div>
    )
  }
}

export default TrafficLight;