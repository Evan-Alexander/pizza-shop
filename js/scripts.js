var smallPie = { name: "small", price: 12 };
var mediumPie = { name: "medium", price: 14 };
var largePie = { name: "large", price: 16 };

var sausage = { name: "sausage", price: 2 };
var prosciutto = { name: "prosciutto", price: 2 };
var pepperoni = { name: "pepperoni", price: 2 };
var canadianBacon = { name: "canadianBacon", price: 2 };
var sausage = { name: "sausage", price: 2 };

var roastedGarlic = { name: "roastedGarlic", price: 2 };
var arugula = { name: "arugula", price: 2 };
var SpanishOlives = { name: "SpanishOlives", price: 2 };
var canadianBacon = { name: "canadianBacon", price: 2 };
var artichokeHearts = { name: "artichokeHearts", price: 2 };
var jalepenos = { name: "jalepenos", price: 2 };
var redOnions = { name: "redOnions", price: 2 };
var pineapple = { name: "pineapple", price: 2 };
var mushrooms = { name: "mushrooms", price: 2 };


function Pizza(pizzaSize, meat, veggies) {
  this.pizzaSize = pizzaSize;
  this.meat = meat;
  this.veggies = veggies;
}

Pizza.prototype.makePizza = function() {
  return this.pizzaSize + " " + this.meat + " with " + this.veggies;
}

// PizzaPrice.prototype.getPrice = function() {
//   return this.pizzaSize.price + this.veggies.price + this.meat.price;
// }


$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var getSize = $("input:checkbox[name=size]:checked").val();

    var meatToppings = [];
    $("input:checkbox[name=meat]:checked").each(function(){
        var getMeat = $(this).val();
        meatToppings.push(getMeat);
        console.log(meatToppings);
      });

    var vegToppings = [];
    $("input:checkbox[name=veg]:checked").each(function(){
        var getVeggies = $(this).val();
        vegToppings.push(getVeggies);
        console.log(vegToppings);
      });

    var newPizza = new Pizza(getSize, meatToppings, vegToppings);
    // var orderCost = new PizzaPrice(getSize, getMeat, getVeggies)

    $('#order-info').append("<li><span>" + newPizza.makePizza() + "</span></li>");
    // $('#cost').append("<li><span>" + orderCost.getPrice() + "</span></li>");


    });
});
