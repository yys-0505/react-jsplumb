import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _css from './style.module.scss';

class ChartNode extends Component {
  constructor (props) {
    super(props);
    this.handleNodeDbclick = this.handleNodeDbclick.bind(this);
    this.removeNode = this.removeNode.bind(this);
  }
  render () {
    let { id, nodeStyle, icon, text } = this.props.item;
    let { removeNode } = this.props;
    return (
      <div className="workplace-chart" id={id} style={nodeStyle} onDoubleClick={this.handleNodeDbclick} data-item={JSON.stringify(this.props.item)}>
        <i style={{'backgroundImage': 'url('+icon+')'}}></i>
        <span>{text}</span>
        <div className="del" onClick={this.removeNode}>x</div>
        <div className="ep"></div>
        {/* <div>
          <ul>
            <li v-for="(v, k) in props">{{k}}: {{v}}</li>
          </ul>
        </div> */}
      </div>
    )
  }
  handleNodeDbclick () {

  }
  removeNode () {
    this.props.removeNode(this.props.item.id);
  }
}

ChartNode.propTypes = {
  item: PropTypes.object.isRequired
};
ChartNode.defaultProps = {
  item: {}
};
export default ChartNode;