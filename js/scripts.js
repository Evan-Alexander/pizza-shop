// var smallPie = { name: "small", price: 12 };
// var mediumPie = { name: "medium", price: 14 };
// var largePie = { name: "large", price: 16 };
//
// var sausage = { name: "sausage", price: 2 };
// var prosciutto = { name: "prosciutto", price: 2 };
// var pepperoni = { name: "pepperoni", price: 2 };
// var canadianBacon = { name: "canadianBacon", price: 2 };
// var sausage = { name: "sausage", price: 2 };
//
// var roastedGarlic = { name: "roastedGarlic", price: 1 };
// var arugula = { name: "arugula", price: 1 };
// var SpanishOlives = { name: "olives", price: 1 };
// var canadianBacon = { name: "canadianBacon", price: 1 };
// var artichokeHearts = { name: "artichokeHearts", price: 1 };
// var jalepenos = { name: "jalepenos", price: 1 };
// var redOnions = { name: "onions", price: 1 };
// var pineapple = { name: "pineapple", price: 1 };
// var mushrooms = { name: "mushrooms", price: 1 };

// function PizzaPrice(smallPie, mediumPie, largePie, meatPrice, vegPrice) {
//   this.smallPrice = 12;
//   this.mediumPrice = 14;
//   this.largePrice = 16;
//   this.meatPrice = 2;
//   this.vegPrice = 1;
// }

function Pizza(pizzaSize, meat, veggies) {
  this.pizzaSize = pizzaSize;
  this.meat = meat;
  this.veggies = veggies;
}


Pizza.prototype.makePizza = function() {
  return this.pizzaSize + " " + this.meat + " with " + this.veggies;
}


// Meat.prototype.meatPrice = function() {
//   return this.meat.length * 2;
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
      });

    var newPizza = new Pizza(getSize, meatToppings, vegToppings);

    $('#order-info').append("<li><span>" + newPizza.makePizza() + "</span></li>");

    $('#cost').append("<li><span>" + "$" + parseInt( (meatToppings.length * 2) + vegToppings.length) + "</span></li>");

    });
});
