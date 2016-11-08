import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BillabongText from '../BillabongText';

it('renders correctly', () => {
  const tree = renderer.create(
    <BillabongText>
      Test!
    </BillabongText>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
