import * as React from 'react';
import { shallow } from 'enzyme';
import CardGrid from './index';

describe('<CardGrid /', () => {
  it('renders without crashing', () => {
    shallow(<CardGrid />);
  });
});
