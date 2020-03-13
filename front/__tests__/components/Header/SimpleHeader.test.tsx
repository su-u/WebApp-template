import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import HeaderComponent from '../../../src/components/Header/SimpleHeader';
import { sel } from '../../../src/testUtilities/utility';

describe('HeaderComponent', () => {
  describe('HeaderComponent', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = render(
        <MemoryRouter initialEntries={['/']}>
          <HeaderComponent />
        </MemoryRouter>
      );
    });

    test('SnapShot', () => {
      const root = renderer.create(
        <MemoryRouter initialEntries={['/']}>
          <HeaderComponent />
        </MemoryRouter>
      );
      expect(root).toMatchSnapshot();
    });
    test('title', () => {
      expect(wrapper.find(sel('head-title')).text()).toEqual('テストアプリ');
    });
  });
});
