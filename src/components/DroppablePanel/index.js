import React, { Component, Fragment } from 'react';
import { message } from 'antd'
import $ from 'jquery';
import ChartNode from '../../template/ChartNode'

class DroppablePanel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      chartData: {
        nodes: [],
        connections: []
      }
    };
    this.removeNode = this.removeNode.bind(this);
  }
  render () {
    return (
      <Fragment>
        <div className="workplace" id="workplace">
          { this.renderChartNode() }
        </div>
      </Fragment>
    )
  }
  renderChartNode () {
    return this.state.chartData.nodes.map((item, idx) => {
      return (
        <ChartNode key={idx} item={item} removeNode={this.removeNode}/>
      )
    })
  }
  componentDidMount () {
    this.jsPlumbPrepare();
  }
  jsPlumbPrepare () {
    console.log('jsPlumbPrepare');
    const _self = this;
    let jsPlumb = window.jsPlumb;
    jsPlumb.ready(() => {
      // 默认配置
      var instance = jsPlumb.getInstance({
        Endpoint: [
          "Blank",
          { cssClass: "chart-dot", hoverClass: "chart-dot-hover", radius: 5 }
        ],
        Connector: "Straight",
        HoverPaintStyle: { stroke: "#1e8151", strokeWidth: 2 },
        ConnectionOverlays: [
          [
            "Arrow",
            {
              location: 1,
              visible: true,
              width: 11,
              height: 11,
              id: "Arrow"
            }
          ]
          // ["Label", { label: "-", id: "label", cssClass: "aLabel" }]
        ],
        Container: "workplace"
      });
      this.jsp = instance;
      var canvas = document.getElementById("workplace");

      // 删除连接线
      instance.bind("click", (conn) => {
        this.jsp.deleteConnection(conn);
      });

      // 监听 connection 事件
      instance.bind("connection", (info) => {
        // info.connection.getOverlay("label").setLabel(info.connection.id);
      });
      // 监听拖动connection 事件，判断是否有重复链接
      instance.bind("beforeDrop", (info) => {
        // info.connection.getOverlay("label").setLabel(info.connection.id);
        // 判断是否已有该连接
        let isSame = true;
        let currConnections = _self.getConnections();
        currConnections.forEach(item => {
          if ((item.targetId === info.targetId && item.sourceId === info.sourceId) ||
            (item.targetId === info.sourceId && item.sourceId === info.targetId)
          ) {
            isSame = false;
          }
        });
        if (isSame) {
          
        } else {
          message.warning("不允许重复连接！");
        }
        return isSame;
      });

      // bind a double click listener to "canvas"; add new node when this occurs.
      // jsPlumb.on(canvas, "dblclick", function(e) {
      //   newNode(e.offsetX, e.offsetY);
      // });
      $("#workplace").droppable({
        scope: "plant",
        drop: function(ev, ui) {
          console.log(1);
          let helper = ui.helper;
          let id = window.jsPlumbUtil.uuid();
          let item = {
            id,
            icon: helper.attr("data-icon"),
            busiType: helper.attr("data-busitype"),
            text: helper.attr("data-text"),
            nodeStyle: {
              top: ui.position.top + "px",
              left: ui.position.left - 180 - 20 + "px"
            },
            props: {}
          };
          _self.chartDataPushNode(item);
          _self.initNode(id);
        }
      });
    });
  }
  chartDataPushNode (item) {
    console.log(this.state.chartData.nodes)
    this.setState(() => {
      const chartData = JSON.parse(JSON.stringify(this.state.chartData));
      chartData.nodes.push(item);
      return {
        chartData
      }
    }, () => {
      console.log(this.state.chartData.nodes)
    });
  }
  // 初始化node节点
  initNode(el) {
    this.jsp.draggable(el, {
      containment: true,
      start(params) {}, // 拖动开始
      drag(params) {}, // 拖动中
      stop(params) {} // 拖动结束
    });

    this.jsp.makeSource(el, {
      filter: ".ep",
      anchor: ["Perimeter", { shape: "Rectangle" }],
      connectorStyle: {
        stroke: "#5c96bc",
        strokeWidth: 2,
        outlineStroke: "transparent",
        outlineWidth: 4
      },
      extract: {
        action: "the-action"
      },
      maxConnections: -1,
      onMaxConnections: function(info, e) {
        alert("Maximum connections (" + info.maxConnections + ") reached");
      }
    });

    this.jsp.makeTarget(el, {
      dropOptions: { hoverClass: "dragHover" },
      anchor: ["Perimeter", { shape: "Rectangle" }],
      allowLoopback: false
    });
  }
  // 删除节点及关联的线
  removeNode (nodeId) {
    this.jsp.remove(nodeId);
  }
  // 从当前场景获取所有节点
  getNodes () {
    let nodesArr = Object.values(this.jsp.getManagedElements());
    let nodes = [];
    nodesArr.forEach(obj => {
      let item = JSON.parse(obj.el.dataset.item);
      let { id, icon, busiType, text, nodeStyle } = item;
      nodes.push({
        id,
        icon,
        busiType,
        text,
        nodeStyle,
        props: {}
      });
    });
    return nodes;
  }
  //从当前场景获取所有连线
  getConnections () {
    let connArr = this.jsp.getAllConnections();
    let connections = [];
    connArr.forEach(item => {
      connections.push({
        "sourceId": item.sourceId,
        "targetId": item.targetId
      });
    })
    return connections;
  }
}

export default DroppablePanel;