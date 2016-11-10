(function(exports){

  function SingleNoteView(singleNote){
    this.singleNote = singleNote;
  }

  SingleNoteView.prototype = {

    htmlNote: function () {
      var noteText = this.singleNote.text;
      var div = document.createElement("div");
      div.innerHTML = noteText;
      return div;
    },

    displayNote: function () {
      var target = document.getElementById("app");
      target.appendChild(this.htmlNote());
    },



  };

  exports.SingleNoteView = SingleNoteView;

})(this);
