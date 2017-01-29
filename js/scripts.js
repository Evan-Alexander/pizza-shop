//BUSINESS LOGIC
function PizzaPrice(smallPie, mediumPie, largePie) {
  this.smallPrice = 12;
  this.mediumPrice = 14;
  this.largePrice = 16;
}

function Pizza(pizzaSize, meat, veggies) {
  this.pizzaSize = pizzaSize;
  this.meat = meat;
  this.veggies = veggies;
}


Pizza.prototype.makePizza = function() {
  return this.pizzaSize + " " + this.meat + " with " + this.veggies;
}

PizzaPrice.prototype.pieSize = function(getSize) {
  if (getSize === "small") {
    return this.smallPrice;
  } else if (getSize === "medium") {
    return this.mediumPrice;
  } else if (getSize === "large") {
    return   this.largePrice;
  }
}

//UI LOGIC
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    //Retrieves size chosen
    var getSize = $("input:checkbox[name=size]:checked").val();

    //Retrieves meat choices
    var meatToppings = [];
    $("input:checkbox[name=meat]:checked").each(function(){
        var getMeat = $(this).val();
        meatToppings.push(getMeat);
        console.log(meatToppings);
      });

    //Retrieves veggie choices
    var vegToppings = [];
    $("input:checkbox[name=veg]:checked").each(function(){
        var getVeggies = $(this).val();
        vegToppings.push(getVeggies);
      });

    var newPizza = new Pizza(getSize, meatToppings, vegToppings);

    var newCost = new PizzaPrice(getSize);
    console.log(getSize);

    //Displays pizza size with meat and veggie options
    $('#order-info').append("<li><span>" + newPizza.makePizza() + "</span></li>");

    //Displays total pizza price.
    $('#cost').append("<li><span>" + "$" + parseInt( (meatToppings.length * 2) + vegToppings.length + newCost.pieSize(getSize)) + "</span></li>");

    });
});
