import mathHelper from '../helpers/mathHelper.js';

class shoppingCartService {

    constructor(){
        this.items = [];
        this.SALESTAX = .125;
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

    getSalesTax()
    {
        return mathHelper.roundCurrency(this.getTotal() * this.SALESTAX);
    }

    getTotalWithTax()
    {
        return this.getTotal() + this.getSalesTax();
    }
}

export default shoppingCartService;