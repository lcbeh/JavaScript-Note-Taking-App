
function storesTextOnCreation(){
  var note = new Note("text", 0);
  assert.isTrue(note.textReturn() === "text");
}

function storesIdOnCreation(){
  var note = new Note("text", 0);
  assert.isTrue(note.idReturn() === 0);
}

function noteListStoresNote() {
  var noteList = new NoteList();
  noteList.storeNote(new Note("I want to be in noteList", 3));
  assert.isTrue(noteList.noteArray[0].text === "I want to be in noteList");
}

function noteListReturnsStringArray() {
  var noteList = new NoteList();
  noteList.storeNote(new Note("Namaste", 1));
  var array = noteList.stringArray();
  assert.isTrue(array[0] === noteList.noteArray[0].text);
}

function ViewReturnHTMLstring() {
  var noteList = new NoteList();
  var view = new NoteListView(noteList);
  noteList.storeNote(new Note("Namaste", 0));
  noteList.storeNote(new Note("Hari", 1));
  assert.isTrue(view.htmlList() === "<ul><li><div><a href='#notes/0'>Namaste ...</a></li></div><li><div><a href='#notes/1'>Hari ...</a></li></div></ul>");
}


// function singleNoteViewReturnsHTML() {
//   var note = new Note("harry potter");
//   singleNote = new SingleNoteView(note);
//   if (singleNote.htmlNote() == "<div>harry potter</div>") {
//     console.log("singleNoteViewReturnsHTML");
//   } else {
//     console.log("false");
//   }
// }


console.log("storesTextOnCreation"); storesTextOnCreation();
console.log("storesIdOnCreation"); storesIdOnCreation();
console.log("noteListStoresNote"); noteListStoresNote();
console.log("noteListReturnsStringArray"); noteListReturnsStringArray();
console.log("ViewReturnHTMLstring"); ViewReturnHTMLstring();
// console.log("singleNoteViewReturnsHTML"); singleNoteViewReturnsHTML();
