
(function () {
  window.addEventListener("load", function () {

    setupHTML();
    var contentDiv = document.getElementById("content");
    var submitButton = document.getElementById("submitText");

    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    var noteController = new NoteController(noteList, noteListView);

    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      noteController.run();
    });
  });
})();
