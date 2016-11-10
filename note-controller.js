(function(exports){

  function NoteController(noteList, noteListView, singleNote, singleNoteView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNote = new Note("Today is today!! bla bla bla bla");
    this.singleNoteView = new SingleNoteView(this.singleNote);
  }

  NoteController.prototype.htmlSingleNote = function () {
    return this.singleNoteView.displayNote();
  };

  NoteController.prototype.htmlList = function () {
    this.noteList.storeNote(this.singleNote.textReturn());
    // this.noteList.storeNote("pray, eat monkey, pray, jump, run");
    var joiner = this.noteListView.htmlJoiner();
    return joiner;
  };

  NoteController.prototype.listNote = function () {
    var test =  document.getElementById("app");
    test.innerHTML = this.htmlList();
  };


  NoteController.prototype.run = function () {
    this.listNote();
    this.htmlSingleNote();
  };

  exports.NoteController = NoteController;

})(this);
