// Select color input
let color = $('#colorPicker').val();

// Select size input
let height = $('#input_height').val();
let width = $('#input_width').val();

// When size is submitted by the user, call makeGrid()

$('sizePicker').submit(function(event) {
  // Prevent default
  event.preventDefault();

  // Call the makeGrid function
  makeGrid();
});

function makeGrid() {
  
}
