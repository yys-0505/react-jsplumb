import React, { Component, Fragment } from 'react'
import { Modal, Layout } from 'antd'
import DraggableMenu from '../../components/DraggableMenu'
import DroppablePanel from '../../components/DroppablePanel'
import _css from './style.module.scss'

const { Sider, Content } = Layout;
class ChartDailog extends Component {
  constructor (props) {
    super(props);
    this.state = { visible: false }
  }
  render () {
    return (
      <Fragment>
        <Modal
          title="Basic Modal"
          maskClosable={false}
          width="80%"
          style={{ top: "10%", minHeight: "80%", height: "1px" }}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          wrapClassName="chartdailog"
        >
          <Layout className={_css["scenario-config"]} id="dialog-container">
            <Sider className={_css.sider} theme="light">
              <DraggableMenu containerId="dialog-container"/>
            </Sider>
            <Content>
              <DroppablePanel ref={(panel) => {this.panel = panel}}/>
            </Content>
          </Layout>
        </Modal>
      </Fragment>
    )
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
}

export default ChartDailog;