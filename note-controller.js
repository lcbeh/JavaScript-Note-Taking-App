(function(exports){

  function NoteController(noteList, noteListView){
    this.noteList = noteList;
    this.noteListView = noteListView;
    this.currentNote = "empty at start";
    this.idIndex = 0;
  }

  NoteController.prototype = {

    idCount: function () {
      this.idIndex ++;
    },

    getNewContent: function () {
      var text = document.querySelector("textarea");
      this.createNewNote(text.value);
    },

    createNewNote: function (text) {
      this.currentNote = new Note(text, this.idIndex);
      this.idCount();
    },

    storeNote: function () {
      this.noteList.storeNote(this.currentNote);
    },

    displayList: function () {
      this.noteListView.displayListNote();
    },

    run: function () {
      this.getNewContent();
      this.storeNote();
      this.displayList();
      makeUrlChange(this.noteList);
    }
};

  exports.NoteController = NoteController;

})(this);
