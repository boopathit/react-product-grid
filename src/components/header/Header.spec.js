import Header from './Header';
import React from 'react';
import { mount } from 'enzyme';

test('Header renders the text inside it', () => {

    const wrapper = mount(
        <Header />
    );
    const brand = wrapper.find('.navbar-brand');
    expect(brand.text()).toBe("Products");
});