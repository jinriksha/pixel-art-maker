// Select color input
const color = $('#colorPicker').val();

// Select size input
const height = $('#input_height').val();
const width = $('#input_width').val();

// When size is submitted by the user, call makeGrid()

$('sizePicker').submit(function(event) {
  // Prevent default
  event.preventDefault();

  // Call the makeGrid function
  makeGrid();
});

// Make grid based on user size input
function makeGrid() {
  for (let i = 0; i < height; i++) {
    $('#pixel_canvas').append("<tr> </tr>");
    for (let j = 0; j < width; j++) {
      $('tr').append("<td> </td>");
    }
  }
}

/*
Expected pattern created by makeGrid function

<tr>
  <td></td>
  .
  .
  .
</tr>
<tr>
  <td></td>
  .
  .
  .
</tr>
.
.
.
*/
