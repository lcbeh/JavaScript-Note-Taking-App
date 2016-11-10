(function(exports){

  function NoteController(noteList, noteListView, singleNote, singleNoteView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    var contentElement = document.getElementById("content")
    this.singleNoteView = new SingleNoteView(contentElement);
    this.currentNote = null;
    this.idIndex = 0;
  }

  NoteController.prototype = {

    idCount: function () {
      this.idIndex ++;
    },

    htmlSingleNote: function () {
      return this.singleNoteView.displayNote(this.currentNote);
    },

    createNewNote: function (text) {
      this.currentNote = new Note(text, this.idIndex);
      this.noteList.storeNote(this.currentNote);
      this.idCount();
    },

    run: function () {
      this.createNewNote("Namaste, may all good fortune upon you");
      this.createNewNote("Say a little prayer for you");
      this.noteListView.listNote();
      makeUrlChange(this.noteList);
    }

  };

  exports.NoteController = NoteController;

})(this);
