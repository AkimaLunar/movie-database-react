import * as React from 'react';
import { shallow } from 'enzyme';
import Movies from './index';

describe('<Movies /', () => {
  it('renders without crashing', () => {
    shallow(<Movies />);
  });
});
