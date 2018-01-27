// Définition variables:
//const couleur = black;

// 1:Select color input
//$('#colorPicker').click(function() {
//  couleur = $('this').val();
 // })

// Select size input
$('#valider').click(function() {
  makeGrid()
})

function makeGrid() {
  $('#pixel_canvas').children().remove();
  var longueur = $('#input_height').val();
  var largueur = $('#input_width').val();
  var grille = $('#pixel_canvas');
  for (let i = 0; i < longueur; i++) {
    grille.append('<tr></tr>');
  }
  for (let i = 0; i < largueur; i++) {
    var tableau = $('tr').append('<td></td>');
  }
}

grille.click(function(){
  var lines = document.getElementsByTagName('tr');
  couleur = $('#colorPicker').val();
  lines.style.background = couleur;
}


//$('tr').click(function() {
//  couleur = $('#colorPicker').val();
//  $('tr').style.backgroundColor = couleur;
//})




//DIFFERENT TRYS
  //couleur = $('#colorPicker').val();
  //tableau.style.backgroundColor = couleur;

//$('#color-picker').val('#4286f4');

//$('h2').text("This is a test");
//$('#input_height').click(function() {
//  $('#color-picker').val('#4286f4');
  //var tudum = $( this ).val();
  //$( "h1" ).val( tudum );
//})
//$("#sizePicker").click(function(){
//  $('h1').remove();
//});
