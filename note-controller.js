(function(exports){

  function NoteController(noteList, noteListView, singleNote, singleNoteView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    var contentElement = document.getElementById("content");
    this.singleNoteView = new SingleNoteView(contentElement);
    this.submitElement = document.getElementById("submitText");
    this.currentNote = "null at start";
    this.idIndex = 0;
  }

  NoteController.prototype = {

    idCount: function () {
      this.idIndex ++;
    },

    htmlSingleNote: function () {
      return this.singleNoteView.displayNote(this.currentNote);
    },

    displayList: function () {
      this.noteListView.displayListNote();
    },

    run: function () {
      this.getNewContent();
      makeUrlChange(this.noteList);
    },

    createNewNote: function (text) {
      this.noteList.storeNote(new Note(text, this.idIndex));
      this.idCount();
      this.noteListView.displayListNote();
    },

    getNewContent: function () {
      var self = this;
      var text = document.querySelector("textarea");
      this.submitElement.addEventListener('click', function (event) {
        event.preventDefault();
        self.createNewNote(text.value);
      });
    }

};

  exports.NoteController = NoteController;

})(this);
