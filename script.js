window.addEventListener('DOMContentLoaded', (event) => {
    let dragged;

    document.addEventListener("dragstart", function(event) {
        dragged = event.target;
    });

    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    document.addEventListener("drop", function(event) {
        event.preventDefault();
        if (event.target.className === "dropzone" ) {
            event.target.textContent = dragged.textContent;
        }
    });
});
