import React from 'react';
import { Layout } from 'antd';
import _css from './style.module.scss'
const { Header } = Layout;

class PageHeader extends React.Component {
  render () {
    return (
			<Header className="header" className={_css.header}>
				<div className="logo" />
				<h1 className={_css.title}>后台管理</h1>
			</Header>
    );
	}
}
export default PageHeader;
