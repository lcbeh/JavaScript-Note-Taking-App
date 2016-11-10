(function(exports){

  function SingleNoteView(noteObj){
    this.noteObj = noteObj;
    // this.htmlElement = htmlElement;
  }

  SingleNoteView.prototype.htmlNote = function () {
    var noteText = this.noteObj.text;
    var div = document.createElement("div");
    var text = document.createTextNode(noteText);
    return div.appendChild(text);
  };

  SingleNoteView.prototype.displayNote = function () {
    var target = document.getElementById("app");    target.appendChild(this.htmlNote());
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
