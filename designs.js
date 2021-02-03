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

const couleur = $('#colorPicker').val();

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
  window.print();
})


grille.click(function(){
  window.print("salut");
  var lines = document.getElementsByTagName('tr');
  grille.style.background= couleur;
  lines.style.background = couleur;
})
