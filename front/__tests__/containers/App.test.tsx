import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '@/containers/App';
import { sel } from '@/testUtilities/utility';

describe('App', () => {
  test('SnapShot', () => {
    const root = renderer.create(<App />).toJSON();
    expect(root).toMatchSnapshot();
  });
  test('div1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(sel('div1')).text()).toEqual('テストアプリテキスト');
  });
  test('h2', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).toEqual('見出しテキスト');
  });
});
