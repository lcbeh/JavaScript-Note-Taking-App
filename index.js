var noteController = new NoteController();

// function createFirstDiv(){
//   var div = document.createElement("div");
//   div.setAttribute("id", "app");
//   var addText = document.createTextNode("the code is not working...");
//   div.appendChild(addText);
//   document.body.insertBefore(div, document.body.firstChild);
// }



window.onload = function() {
  noteController.run();
};
