import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';
import PropTypes from 'prop-types';
import http from '../../common/js/http';
import { getTask, saveTaskAction } from '../../actions/scenario'

class DraggableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  render () {
    return (
      <Fragment>
        <div className="box-card">
          <div className="header">任务列表</div>
          <div className="card-body">
            {this.renderItem()}
          </div>
        </div>
      </Fragment>
    )
  }
  componentDidMount () {
    this.getTaskList();
  }
  /**
   * @description 获取左侧菜单列表
   */
  getTaskList () {
    if (!this.props.tasks.length) {
      http.get("/data/taskList.json").then(res => {
        this.props.saveTask(res);
        this.makeItemDraggable();
      });
    } else {
      this.makeItemDraggable();
    }
  }
  renderItem () {
    return this.props.tasks.map((item, idx) => {
      return (
        <div className="item" key={idx} data-icon={item.icon} data-text={item.name} data-busitype={item.busiType}>
          <i style={{backgroundImage: 'url('+item.icon+')'}}></i>
          <span className="text">{item.name}</span>
        </div>
      )
    });
  }
  makeItemDraggable () {
    $(".box-card .item").draggable({
      scope: "plant",
      helper: "clone",
      containment: $("#"+ this.props.containerId)
    });
  }
}

DraggableMenu.defaultProps = {
  containerId: 'body'
};

DraggableMenu.propTypes = {
  containerId: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    tasks: state.getIn(["scenario", "tasks"])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTask () {
      const action = getTask();
      dispatch(action);
    },
    saveTask (res) {
      const action = saveTaskAction(res);
      dispatch(action);
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DraggableMenu);