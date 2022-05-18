import mathHelper from '../helpers/mathHelper.js';

class shoppingCartService {
    constructor(){
        this.items = [];
    }

    addToCart(product, quantity){
        this.items.push({ 
            'item': product, 
            'quantity': quantity
        });
    }

    getTotal(){
        return mathHelper.roundCurrency(this.items
            .map(x => x.item.price * x.quantity)
            .reduce((prev, curr) => prev + curr));
    }
}

export default shoppingCartService;