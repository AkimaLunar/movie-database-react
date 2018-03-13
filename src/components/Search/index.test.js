import * as React from 'react';
import { shallow } from 'enzyme';
import Search from './index';

describe('<Search /', () => {
  it('renders without crashing', () => {
    shallow(<Search />);
  });
});
