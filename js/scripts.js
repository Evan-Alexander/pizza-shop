// function Pizza(size, meat, veggies) {
//   this.size = size;
//   this.meat = meat;
//   this.veggies = veggies;
// }

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(sreet, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}


$(document).ready(function() {
  $("form#contact-info").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact (inputtedFirstName, inputtedLastName);

    // $(".new-address").each(function() {
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    //   newContact.address.push(newAddress);
    // });



    $("#delivery-to").show();
    $("#delivery-to h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);


    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
    // // $("input#new-street").val("");
    // // $("input#new-city").val("");
    // // $("input#new-state").val("");
  });
});
