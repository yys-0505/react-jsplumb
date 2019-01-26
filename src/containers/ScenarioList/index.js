import React,  { Component, Fragment } from 'react';
import { Table, Divider, Icon } from 'antd'
import http from '../../common/js/http'
import { formateDate } from 'mt-common-utils'
import ChartDailog from '../../components/ChartDailog'

class ScenarioList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSource: [{
        id: '001',
        scenarioName: '场景1',
        creator: '创建人1',
        createTime: '1546672373748'
      }, {
        id: '002',
        scenarioName: '场景2',
        creator: '创建人2',
        createTime: '1546672373748'
      }, {
        id: '003',
        scenarioName: '场景3',
        creator: '创建人3',
        createTime: '1546672373748'
      }, {
        id: '004',
        scenarioName: '场景4',
        creator: '创建人4',
        createTime: '1546672373748'
      }, {
        id: '005',
        scenarioName: '场景5',
        creator: '创建人5',
        createTime: '1546672373748'
      }, {
        id: '006',
        scenarioName: '场景6',
        creator: '创建人6',
        createTime: '1546672373748'
      }, {
        id: '007',
        scenarioName: '场景7',
        creator: '创建人7',
        createTime: '1546672373748'
      }, {
        id: '008',
        scenarioName: '场景8',
        creator: '创建人8',
        createTime: '1546672373748'
      }, {
        id: '009',
        scenarioName: '场景9',
        creator: '创建人9',
        createTime: '1546672373748'
      }, {
        id: '010',
        scenarioName: '场景10',
        creator: '创建人10',
        createTime: '1546672373748'
      }, {
        id: '011',
        scenarioName: '场景11',
        creator: '创建人11',
        createTime: '1546672373748'
      }, {
        id: '012',
        scenarioName: '场景12',
        creator: '创建人12',
        createTime: '1546672373748'
      }, {
        id: '013',
        scenarioName: '场景13',
        creator: '创建人13',
        createTime: '1546672373748'
      }, {
        id: '014',
        scenarioName: '场景14',
        creator: '创建人14',
        createTime: '1546672373748'
      }],
      columns: [{
        title: '场景名称',
        dataIndex: 'scenarioName',
        key: 'scenarioName',
      }, {
        title: '创建人',
        dataIndex: 'creator',
        key: 'creator',
      }, {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text) => {
          var d = new Date(parseInt(text));
          return formateDate(d, 'yyyy-MM-dd hh:mm:ss')
        }
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Icon
              type="eye"
              theme="twoTone"
              style={{fontSize: '16px'}}
              onClick={this.viewScenario.bind(this, record)}
            />
            <Divider type="vertical" />
            <Icon
              type="edit"
              theme="twoTone"
              style={{fontSize: '16px'}}
              onClick={this.editScenario.bind(this, record)}
            />
            <Divider type="vertical" />
            <Icon
              type="delete"
              theme="twoTone"
              style={{fontSize: '16px'}}
              onClick={this.deleteScenario.bind(this, record)}
            />
          </span>
        )
      }],
      action: ""
    };
  }
  render () {
    return (
      <Fragment>
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          rowKey={record => record.id}
          pagination={{pageSize: 7, total: this.state.dataSource.length}}
          onChange={this.handleChange.bind(this)}
        />
        <ChartDailog ref={(chartDailog) => {this.chartDailog = chartDailog}}/>
      </Fragment>
    )
  }
  componentDidMount () {

  }
  handleChange (pagination) {
    console.log(pagination.current);
  }
  /**
   * @description 查看场景
   */
  viewScenario () {
    this.chartDailog.setState(() => ({
      visible: true
    }));
  }
  /**
   * @description 编辑场景
   */
  editScenario () {
    this.setState(() => ({
      action: "edit"
    }));
  }
  /**
   * @description 删除场景
   */
  deleteScenario () {

  }
}

export default ScenarioList;