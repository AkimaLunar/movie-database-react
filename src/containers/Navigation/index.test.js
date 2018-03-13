import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Navigation from './index';

import { Provider } from 'react-redux';
import { store } from '../../store';

describe('<Navigation /', () => {
  it('renders without crashing', () => {
    mount(<Provider store={store}><Navigation /></Provider>).dive();
  });
});
