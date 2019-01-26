import React from 'react';
import { withRouter, Link, Route, Switch } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import nameMap from './nameMap';

class PageBread extends React.Component {
	render() {
    return (
      <div>123</div>
    )
    // const breadcrumbNameMap = {
    //   '/apps': 'Application List',
    //   '/apps/1': 'Application1',
    //   '/apps/2': 'Application2',
    //   '/apps/1/detail': 'Detail',
    //   '/apps/2/detail': 'Detail',
    // };

    // const { location } = props;
    // const pathSnippets = location.pathname.split('/').filter(i => i);
    // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    //   return (
    //     <Breadcrumb.Item key={url}>
    //       <Link to={url}>
    //         {breadcrumbNameMap[url]}
    //       </Link>
    //     </Breadcrumb.Item>
    //   )
  }
}

export default withRouter(PageBread);