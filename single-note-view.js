(function(exports){

  function SingleNoteView(noteElement){
    this.noteElement = noteElement; //document.getElementById("content")
  }

  SingleNoteView.prototype = {

    displayNote: function (noteObj) {
      console.log(this.noteElement);
      this.noteElement.innerHTML = noteObj.text;
    },
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
