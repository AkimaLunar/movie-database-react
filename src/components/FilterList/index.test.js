import * as React from 'react';
import { shallow } from 'enzyme';
import FilterList from './index';

describe('<FilterList /', () => {
  it('renders without crashing', () => {
    shallow(<FilterList />);
  });
});
