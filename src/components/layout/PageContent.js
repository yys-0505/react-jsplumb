import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import routes from '../../router';
const { Content } = Layout;

class PageContent extends React.Component {
	render () {
		return (
			<Content style={{ background: '#fff', margin: 0, minHeight: 280,}}
			>
				<Switch>
				{
					routes.map((item, idx) => {
						return <Route key={idx} exact path={item.path} component={item.component}></Route>
					})
				}
				</Switch>
			</Content>
		);
	}
}

export default PageContent;