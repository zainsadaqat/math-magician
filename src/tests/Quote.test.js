import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Matches Snapshot', () => {
  const tree = renderer
    .create(
      <Quote />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
