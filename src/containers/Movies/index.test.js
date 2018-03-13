import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Movies from './index';
import { store } from '../../store';

describe('<Movies /', () => {
  it('renders without crashing', () => {
    shallow(<Movies store={store} />).dive();
  });
});
