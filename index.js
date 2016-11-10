var noteController = new NoteController();

// function createFirstDiv(){
//   var div = document.createElement("div");
//   div.setAttribute("id", "app");
//   var addText = document.createTextNode("the code is not working...");
//   div.appendChild(addText);
//   document.body.insertBefore(div, document.body.firstChild);
// }


function listNote() {
  var test =  document.getElementById("app");
  test.innerHTML = noteController.htmlList();
}


window.onload = function() {

  // createFirstDiv();
  listNote();
};
