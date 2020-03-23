
$(document).ready(function() {


  // This section is to toggle front7back of single cocktail card.
  $(document).on('mouseenter mouseleave','.cocktail',function() {
    $(this).children('#front').toggleClass('hidden');
    $(this).children('#back').toggleClass('hidden');
  });

  // User writes the name on input area to obtain the list of cocktails with that name.
  $('#input_index').keyup(function(e){
    if (e.which == 13){

      var query = $('#input_index').val();

      $('#drinks_template').siblings().remove();

      //  ajax call obtain a Json  from URI (endpont to get).
      $.ajax({
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+query+' ',

        // the "succes" creates a card with infos about cocktail and the appends this card to the Dom.
        success: function(data){

          for (var i = 0; i < data.drinks.length; i++) {

            var new_drink = data.drinks[i];
            var new_card = $('#drinks_template').clone().removeClass('hidden').removeAttr('id');

            new_card.find('.cover').attr('src', new_drink.strDrinkThumb);
            new_card.find('#name').text(new_drink.strDrink);
            new_card.find('#category').text(new_drink.strCategory);
            new_card.find('#iba').text(new_drink.strIBA);
            new_card.find('#alcoholic').text(new_drink.strAlcoholic);
            new_card.find('#glass').text(new_drink.strGlass);
            new_card.find('#instructions').text(new_drink.strInstructions);

            $('.drinks_container').append(new_card);
          }

        // end success
        },
      });
    };
  });
  // end document ready
});
