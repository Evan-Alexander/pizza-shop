var big = {
  name: "small", price: 12,
  name: "medium", price: 14,
  name: "large", price: 16,
}

var meat = {
  name: "sausage", price: 2,
  name: "prosciutto", price: 2,
  name: "pepperoni", price: 2,
  name: "canadian bacon", price: 2,
}

var veggies = {
  name: "roasted garlic", price: 1,
  name: "arugula", price: 1,
  name: "Spanish olives", price: 1,
  name: "canadian bacon", price: 1,
  name: "artichoke hearts", price: 1,
  name: "red onions", price: 1,
  name: "jalepenos", price: 1,
  name: "red onions", price: 1,
  name: "pineapple", price: 1,
  name: "mushrooms", price: 1,
}


function Pizza(big, meat, veggies) {
  this.big = big;
  this.meat = meat;
  this.veggies = veggies;
  this.price = function() {
    return this.big + this.meat + this.veggies
  }
}

Pizza.prototype.makePizza() {
  return [this.big, this.meat, this.veggies];
}


$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
        var getSize = $(this).val();
        $('#order-info').append(getSize + "<br>");
      });
    $("input:checkbox[name=meat]:checked").each(function(){
      var getMeat = $(this).val();
      $('#order-info').append(getMeat + "<br>");
      });
    $("input:checkbox[name=veg]:checked").each(function(){
      var getVeggies = $(this).val();
      $('#order-info').append(getVeggies + "<br>");
      });
  });
});
