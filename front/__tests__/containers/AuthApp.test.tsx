import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
// import { sel } from '@/testUtilities/utility';
import AuthApp from '@/containers/AuthApp';

describe('AuthApp', () => {
  test('SnapShot', () => {
    const root = renderer.create(<AuthApp />).toJSON();
    expect(root).toMatchSnapshot();
  });
});
