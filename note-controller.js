(function(exports){

  function NoteController(noteList, noteListView, singleNote, singleNoteView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNote = new Note("Today is today!! bla bla bla bla");
    this.singleNoteView = new SingleNoteView(this.singleNote);
    this.count = 0;
  }

  NoteController.prototype = {

    idIncrement: function () {
      this.count++;
    },

    htmlSingleNote: function () {
      return this.singleNoteView.displayNote();
    },

    htmlList: function () {
      this.noteList.createNewNote(textReturn());
      var joiner = this.noteListView.htmlJoiner();
      return joiner;
    },

    createNewNote: function (text) {
      var id = this.count;
      this.idIncrement();
      this.noteList.storeNote(new Note(text, id));
    },

    listNote: function () {
      var test =  document.getElementById("app");
      test.innerHTML = this.htmlList();
    },

    run: function () {
      this.listNote();
      this.htmlSingleNote();
    }

  };

  exports.NoteController = NoteController;

})(this);
