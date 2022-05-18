import mathHelper from '../helpers/mathHelper.js';

class shoppingCartService {
    constructor(){
        this.items = [];
    }

    addToCart(product, quantity){
        var indexOfItem = this.items.findIndex(x => x.item.name == product.name);
        if(indexOfItem == -1){
            this.items.push({ 
                'item': product, 
                'quantity': quantity
            });
        }
        else {
            this.items[indexOfItem].quantity += quantity;
        }
    }

    getTotal(){
        return mathHelper.roundCurrency(this.items
            .map(x => x.item.price * x.quantity)
            .reduce((prev, curr) => prev + curr));
    }
}

export default shoppingCartService;