// Select color input
// Select size input
const sizePicker = document.querySelector("#sizePicker");

function make_Grid() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  const canvas = document.getElementById('pixelCanvas');
  const colorElement = document.getElementById("colorPicker");
  canvas.innerHTML = '';
  // Looping for rows
  for (let i = 0; i < height; i++) {
    let rows = canvas.insertRow(i);

    // Looping for cells
    for (let j = 0; j < width; j++) {
       let cells = rows.insertCell(j);
  
      cells.addEventListener('click', function(event) {   // add eventListener for "click' input
        const attribute = cells.hasAttribute("style");
        const color = colorElement.value;
        if (attribute === true) {
          cells.removeAttribute("style");}
        else {event.target.style.backgroundColor = color;}   
       });
    }
  }
}

// Add eventListener to the submit input
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  // The grid function is called as the data is submitted.
  make_Grid();
});

