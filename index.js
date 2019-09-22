class product {
    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
        this.itemsordered = [] //quantity left in stock based on number of customers ordering this item

    }
    report() {
        console.log('The price of a', this.name, 'is £', this.price,'and the number of units we have in stock is', this.quantity - this.itemsordered.length)
    }
}

class customer {
    constructor(name, location) {
        this.name = name
        this.location = location
    }
    order(product) {    
        product.itemsordered.push(this)
    }
    checkout(payment){
        payment.checkoutitems.push(this)
    }
}

class payment {
    constructor(name){
        this.name = name
        this.checkoutitems = [] //items in the basket
    }
    report() {
        console.log('Number of items in the basket is', this.checkoutitems.length, '. We will collect £', this.checkoutitems.length * pillow.price, 'via', this.name)
    }
}

const maria = new customer('Maria', 'London') //create a new person and parse the name and the age
const felipe = new customer('Felipe', 'Paris') //create a new person and parse the name and the age
console.log(maria, felipe)

const pillow = new product('Pillow', 30, 100)
const clock = new product('Clock', 25, 75)
console.log(pillow, clock) //each product is an object

const paypal = new payment('Paypal')


maria.order(pillow)
felipe.order(pillow)
maria.order(clock)
maria.checkout(paypal)
pillow.report()
clock.report()
paypal.report()
