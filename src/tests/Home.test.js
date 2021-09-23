import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Matches Snapshot', () => {
  const tree = renderer
    .create(
      <Home />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
