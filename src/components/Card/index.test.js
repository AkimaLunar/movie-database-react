import * as React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('<Card /', () => {
  it('renders without crashing', () => {
    shallow(<Card />);
  });
});
