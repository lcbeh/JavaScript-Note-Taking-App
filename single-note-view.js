(function(exports){

  function SingleNoteView(noteObj){
    this.noteObj = noteObj;
  }

  SingleNoteView.prototype.htmlNote = function () {
    var noteText = this.noteObj.text;
    return "<div>" + noteText + "</div>";
  };

  SingleNoteView.prototype.display = function (note) {
    this.noteObj.innerHTML = note.htmlNote();
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
