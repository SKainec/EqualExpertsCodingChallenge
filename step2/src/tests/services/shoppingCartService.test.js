import shoppingCartService from '../../components/services/shoppingCartService.js';
import product from '../../components/models/product.js';
import expect from 'expect';
import { describe, it } from 'jest-circus';

describe('Shopping Cart Service', () => {
    test('Contains no items when a shopping cart is created', () => {
        var shoppingCart = new shoppingCartService();

        expect(shoppingCart.items.length).toBe(0);
    });

    test('Adds a product to the items list', () => {
        var shoppingCart = new shoppingCartService();
        var item = new product("Cookies", 15.99);

        shoppingCart.addToCart(item, 4);

        expect(shoppingCart.items.length).toBe(1);
        expect(shoppingCart.items[0].item).toBe(item);
        expect(shoppingCart.items[0].quantity).toBe(4);
    });

    test('Adds a different product to the items list', () => {
        var shoppingCart = new shoppingCartService();
        var item = new product("Dove Soap", 5.99);

        shoppingCart.addToCart(item, 5);

        expect(shoppingCart.items.length).toBe(1);
        expect(shoppingCart.items[0].item).toBe(item);
        expect(shoppingCart.items[0].quantity).toBe(5);
    });

    test('Adds a multple products to the items list', () => {
        var shoppingCart = new shoppingCartService();
        var product1 = new product("Dove Soap", 5.99);
        var product2 = new product("Cat", 25.99);

        shoppingCart.addToCart(product1, 5);
        shoppingCart.addToCart(product2, 1);

        expect(shoppingCart.items.length).toBe(2);
        expect(shoppingCart.items[0].item).toBe(product1);
        expect(shoppingCart.items[0].quantity).toBe(5);
        expect(shoppingCart.items[1].item).toBe(product2);
        expect(shoppingCart.items[1].quantity).toBe(1);
    });

    test('Adds the same item to the list there are no addition products in the cart', ()=> {
        var shoppingCart = new shoppingCartService();

        var item = new product("Dove Soap", 39.99);

        shoppingCart.addToCart(item, 5);
        var countBefore = shoppingCart.items.length;

        shoppingCart.addToCart(item, 8);
        var countAfter = shoppingCart.items.length;

        expect(countAfter).toBe(countBefore);
    });

    test('Updates the quantity of an item already in the cart when added again', ()=> {
        var shoppingCart = new shoppingCartService();

        var item = new product("Dove Soap", 39.99);

        shoppingCart.addToCart(item, 5);
        shoppingCart.addToCart(item, 8);
        
        expect(shoppingCart.items[0].quantity).toBe(13);
    });

    
    test('Updates the quantity of an items already in the cart when added multiple times', ()=> {
        var shoppingCart = new shoppingCartService();

        var item = new product("Dove Soap", 39.99);

        shoppingCart.addToCart(item, 5);
        shoppingCart.addToCart(item, 8);
        shoppingCart.addToCart(item, 2);
        
        expect(shoppingCart.items[0].quantity).toBe(15);
    });

    test('Gets the total price for one product', ()=>{
        var shoppingCart = new shoppingCartService();
        var item = new product("Dove Soap", 39.99);

        shoppingCart.addToCart(item, 5);

        var total = shoppingCart.getTotal();

        expect(total).toBe(199.95);
    });

    test('Gets the total price for a different product', ()=>{
        var shoppingCart = new shoppingCartService();
        var item = new product("Potatoes", 3.00);

        shoppingCart.addToCart(item, 4);

        var total = shoppingCart.getTotal();

        expect(total).toBe(12.00);
    });

    test('Gets the total for all the products in the cart', ()=>{
        var shoppingCart = new shoppingCartService();
        var item1 = new product("Potatoes", 3.00);
        var item2 = new product("Dove Soap", 39.99);

        shoppingCart.addToCart(item1, 4);
        shoppingCart.addToCart(item2, 5);

        var total = shoppingCart.getTotal();

        expect(total).toBe(211.95);
    });

    
    test('Gets the total for a product added multiple times to the cart', ()=>{
        var shoppingCart = new shoppingCartService();
        var item = new product("Dove Soap", 39.99);

        shoppingCart.addToCart(item, 5);
        shoppingCart.addToCart(item, 3);

        var total = shoppingCart.getTotal();

        expect(total).toBe(319.92);
    });
});