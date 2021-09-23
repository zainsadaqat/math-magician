import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('Matches Snapshot', () => {
  const tree = renderer
    .create(
      <Button />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
