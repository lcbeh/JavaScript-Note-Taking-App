
window.onload = function() {

  // makeUrlChangeShowNoteForCurrentPage();
  //
  // function makeUrlChangeShowNoteForCurrentPage() {
  //   window.addEventListener("hashchange", showNoteForCurrentPage);
  // };
  //
  // function showNoteForCurrentPage() {
  //   showNote(getNoteFromUrl(window.location));
  // };
  //
  // function getNoteFromUrl(location) {
  //   return location.hash.split("#")[1];
  // };

  function showNote(note) {
    var noteController = new Instantiate();
    var test =  document.getElementById("note");
    test.innerHTML = noteController.htmlList();
  }

showNote(note);


};
