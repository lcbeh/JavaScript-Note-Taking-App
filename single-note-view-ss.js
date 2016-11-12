(function(exports){

  function SingleNoteView(noteElement){
    this.noteElement = noteElement; 
  }

  SingleNoteView.prototype = {

    displayNote: function (noteObj) {
      this.noteElement.innerHTML = noteObj.text;
    },
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
