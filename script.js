let buttonnumber = 1;
let boxColour = document.getElementById("Box");

Box.addEventListener('mouseover', function() {
    Box.style.backgroundColor = rgb(213, 192, 168);
});


Box.addEventListener('mouseout', function() {
    Box.style.backgroundColor = rgb(145, 127, 107);
});

Box.addEventListener('click', function() {
    Box.textContent = buttonnumber
    buttonnumber++
});
