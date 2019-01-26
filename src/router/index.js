import ScenarioList from '../containers/ScenarioList';
import ScenarioConfig from '../containers/ScenarioConfig';
import NotFound from '../containers/NotFound'

let routes = [
  {path: "/", component: ScenarioList, breadName: 'Home' },
  {path: "/scenarioConfig", component: ScenarioConfig },
  {component: NotFound }
];

export default routes;