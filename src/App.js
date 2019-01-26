import React, { Component } from 'react';
import { Layout, Spin } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './assets/css/App.css';
import PageHeader from "./components/layout/PageHeader";
import PageSider from "./components/layout/PageSider/";
import PageBread from "./components/layout/PageBread/";
import PageContent from "./components/layout/PageContent";


class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Layout>
          <PageHeader />
          <Layout>
              <PageSider />
              <Layout style={{ padding: '0 24px 0' }}>
                {/* <PageBread /> */}
                <PageContent />
              </Layout>
          </Layout>
          <div className="spinning-wrapper" style={{display: this.props.showLoading?'block':'none'}}>
            <Spin spinning={true} tip="Loading..." size="large"></Spin>
          </div>
        </Layout>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.getIn(["page", "showLoading"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
