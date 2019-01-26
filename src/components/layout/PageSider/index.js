import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import list from './config';
const { Sider } = Layout;
const { SubMenu } = Menu;

class PageSider extends React.Component {
	render () {
		let defaultSelectedKeys = this.props.history.location.pathname;
		// TODO find nice way
		let defaultOpenMenu = list.find(item => {
			return item.children.find(submenu => {
				return submenu.key === defaultSelectedKeys;
			})
		});
		return (
			<Sider width={200} style={{ background: '#545c64' }}>
				<Menu
					mode="inline"
					theme="light"
					defaultSelectedKeys={[defaultSelectedKeys]}
					defaultOpenKeys={[defaultOpenMenu["key"]]}
					style={{ height: '100%', borderRight: 0 }}
				>
					{
						list.map((level1) => {
							return(
								<SubMenu key={level1.key} title={<span><Icon type={level1.icon} />{level1.title}</span>}>
									{
										level1.children.map((level2) => {
											return <Menu.Item key={level2.key}>
												<Link to={level2.key}>{level2.title}</Link>
											</Menu.Item>
										})
									}
								</SubMenu>
							)
						})
					}
				</Menu>
			</Sider>
		)
	}
}
export default withRouter(PageSider);