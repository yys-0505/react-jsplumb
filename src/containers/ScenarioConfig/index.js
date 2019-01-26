import React from 'react';
import { Layout, Button } from 'antd';
import _css from './style.module.scss';
import DraggableMenu from '../../components/DraggableMenu'
import DroppablePanel from '../../components/DroppablePanel'

const { Sider, Content } = Layout;

class ScenarioConfig extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render () {
    return (
      <Layout className={_css["scenario-config"]} id="work-container">
        <Sider className={_css.sider} theme="light">
          <DraggableMenu containerId="work-container"/>
        </Sider>
        <Content>
          <DroppablePanel ref={(panel) => {this.panel = panel;}}/>
          <div className={_css["btn-section"]}>
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </div>
        </Content>
      </Layout>
    )
  }
  handleSubmit () {
    let d = {};
    d.connections = this.panel.getConnections();
    d.nodes = this.panel.getNodes();
    console.log(JSON.stringify(d));
  }
}

export default ScenarioConfig;