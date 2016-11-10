var listOfNotes = null;

function makeUrlChange (noteList) {
  listOfNotes = noteList.noteArray;
  window.addEventListener("hashchange", showSelectedNote);
}

function showSelectedNote () {
  showNote(getNotefromURL(window.location));
}

function getNotefromURL (location) {
  return listOfNotes[location.hash.split("#notes/")[1]].text;
}

function showNote (content) {
  document
    .getElementById("content")
    .innerHTML = content;
}
