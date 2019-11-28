import React from 'react'
import { shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Root from '@/Root';
import { sel } from '../Utility';

describe('Root', () => {
    test('SnapShot', () => {
        const root = renderer.create(
            <Root/>
        ).toJSON();
        expect(root).toMatchSnapshot();
    });
    test('div1', () => {
        const wrapper = shallow(<Root/>);
        expect(wrapper.find(sel('div1')).text()).toEqual('aoaaooaaaaaea');
    });
    test('h2', () => {
        const wrapper = shallow(<Root/>);
        expect(wrapper.find('h2').text()).toEqual('a2aaaa');
    });
});
