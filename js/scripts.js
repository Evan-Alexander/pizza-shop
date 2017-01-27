function Pizza(big, meat, veggies) {
  this.big = size;
  this.meat = meat;
  this.veggies = veggies;
}

// Pizza.prototype.makePizza() {
//   return [this.big, this.meat, this.veggies];
// }


$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
        var getSize = $(this).val();
        $('#order-info').append(getSize + "<br>");

      });
    // $("input:checkbox[name=meat]:checked").each(function(){
    //     var getMeat = $(this).val();
    // $("input:checkbox[name=veggies]:checked").each(function(){
    //     var getVeggies = $(this).val();
  });
});
