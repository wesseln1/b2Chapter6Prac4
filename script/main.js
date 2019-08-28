const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
}

const allOrders = () => {
    return restaurant.orders
}

const chickenComboMeal = {
    sandwhichType: "chicken",
    fries: true,
    drinkSize: "large"
}

const doubleBaconComboMeal = {
    sandwhichType: "ham burger w/double bacon ",
    fries: true,
    drinkSize: "small"
}


// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(doubleBaconComboMeal)
// Invoke the function to return the list of all orders
allOrders()
// Output all orders to the console using console.table()
console.table(restaurant.orders)