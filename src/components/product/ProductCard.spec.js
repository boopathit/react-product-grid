import ProductCard from './ProductCard';
import React from 'react';
import { mount } from 'enzyme';

test('ProductCard renders the text inside it', () => {
    const product = {
        title: "ShedRain Auto Open/Close Compact Umbrella  - Black",
        tcin: "16858105",
        type: "Stand Alone",
        dpci: "061-00-0947",
        upc: "091806203832",
        description: "The Cirra by ShedRain Auto Open Auto Close Umbrella just makes life a little easier. Press the button and it opens. Press the button and it closes. What could be more simple? It's the ideal umbrella for when you're on the move!",
        images: [{
            base_url: "https://target.scene7.com/is/image/Target/",
            primary: "16858105"
        }],
        list_price: {
            price: 15.99,
            min_price: 0.0,
            max_price: 0.0,
            formatted_price: "$15.99",
            price_type: "Reg"
        },
        average_rating: 4.0,
    };
    const wrapper = mount(
        <ProductCard product={product} />
    );
    const p = wrapper.find('.card-title');
    const price = wrapper.find('.card-footer .badge');
    expect(p.text()).toBe(product.title);
    expect(price.text()).toBe(product.list_price.formatted_price);
});