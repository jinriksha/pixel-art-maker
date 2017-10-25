// Select color input
const color = $('#colorPicker');

// Select size input
const height = $('#input_height');
const width = $('#input_width');

// Select table
const canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  // Prevent default behavior
  event.preventDefault();
  makeGrid();
});

// Make grid based on user size input
function makeGrid() {
  clearGrid();
  for(let i = 0; i < height.val(); i++) {
    canvas.append('<tr id="row' + i +'"></tr>');
    for(let j = 0; j < width.val(); j++) {
      $('#row' + i).append('<td></td>');
    }
  }
}

// Clear any previous grid
function clearGrid() {
    canvas.empty();
}

// When user clicks on td elements change css color value to user selected value
canvas.on('click', 'td', function(event) {
    $(this).css('background-color', color.val());
});
