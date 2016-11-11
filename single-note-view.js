(function(exports){

  function SingleNoteView(noteElement){
    this.noteElement = noteElement; //document.getElementById("content")
  }

  SingleNoteView.prototype = {

    displayNote: function (noteObj) {
      console.log(noteObj)
      this.noteElement.innerHTML = noteObj.text;
      console.log(this.noteElement.innerHTML)
    },
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
