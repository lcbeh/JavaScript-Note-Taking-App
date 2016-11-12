
function storesTextOnCreation(){
  var note = createNewNote();
  assert.isTrue(note.textReturn() === "text");
}

function storesIdOnCreation(){
  var note = createNewNote();
  assert.isTrue(note.idReturn() === 0);
}

function noteListStoresNote() {
  var noteList = createNoteList();
  noteList.storeNote(new Note("I want to be in noteList", 0));
  assert.isTrue(noteList.noteArray[0].text === "I want to be in noteList");
}

function noteListReturnsStringArray() {
  var note = createNewNote();
  var noteList = createNoteList();
  noteList.storeNote(note);
  var array = noteList.stringArray();
  assert.isTrue(array[0] === noteList.noteArray[0].text);
}

function ViewReturnHTMLstring() {
  var noteList = createNoteList();
  var view = new NoteListView(noteList);
  noteList.storeNote(new Note("Namaste", 0));
  noteList.storeNote(new Note("Hari", 1));
  assert.isTrue(view.htmlList() === "<ul><li><div><a href='#notes/0'>Namaste ...</a></li></div><li><div><a href='#notes/1'>Hari ...</a></li></div></ul>");
}

function createNewNote() {
  return new Note("text", 0);
}

function createNoteList() {
  return new NoteList();
}


console.log("storesTextOnCreation"); storesTextOnCreation();
console.log("storesIdOnCreation"); storesIdOnCreation();
console.log("noteListStoresNote"); noteListStoresNote();
console.log("noteListReturnsStringArray"); noteListReturnsStringArray();
console.log("ViewReturnHTMLstring"); ViewReturnHTMLstring();
