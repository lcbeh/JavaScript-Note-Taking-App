(function(exports){

  function NoteController(noteList, noteListView, singleNote, singleNoteView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNote = new Note("Today is today!! bla bla bla bla");
    this.singleNoteView = new SingleNoteView(this.singleNote);
  }

  NoteController.prototype.htmlSingleNote = function () {
    return this.singleNoteView.htmlNote();
  };

  NoteController.prototype.htmlList = function () {
    this.noteList.storeNote(this.singleNote.textReturn());
    // this.noteList.storeNote("pray, eat monkey, pray, jump, run");
    var joiner = this.noteListView.htmlJoiner();
    return joiner;
  };

  exports.NoteController = NoteController;

})(this);
