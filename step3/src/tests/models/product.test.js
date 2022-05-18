import product from '../../components/models/product.js';
import expect from 'expect';
import { describe } from 'jest-circus';

describe("shopping cart item", () => {
    test('Sets the name of the shopping cart item', () => {
        var testObject = new product('Avocados', 1.99);

        expect(testObject.name).toBe('Avocados');
    });

    test('Sets the price of the shopping cart item', () => {
        var testObject = new product('Food', 2.99);

        expect(testObject.price).toBe(2.99);
    });
});