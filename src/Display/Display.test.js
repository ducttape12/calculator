import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

it('renders without issue', () => {
    shallow(<Display />);
});

it('displays 0 when value is undefined', () => {
    const display = shallow(<Display />);

    expect(display.contains('0')).toBe(true);
});

it('displays 0 when the value is null', () => {
    const display = shallow(<Display value={null} />);

    expect(display.contains('0')).toBe(true);
});

it('displays 0 when the value is empty', () => {
    const display = shallow(<Display value='' />);

    expect(display.contains('0')).toBe(true);
});

it('displays the provided value', () => {
    const display = shallow(<Display value='1337' />);

    expect(display.contains('1337')).toBe(true);
});