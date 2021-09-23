import Navbar from '../components/Navbar';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
test('Matches Snapshot', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  console.log(tree);
});