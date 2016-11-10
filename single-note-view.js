(function(exports){

  function SingleNoteView(singleNote){
    this.singleNote = singleNote;
  }

  SingleNoteView.prototype = {

    htmlNote: function () {
      var noteText = this.singleNote.text;
      var div = document.createElement("div");
      console.log(this.singleNote.id)
      div.setAttribute("id", this.singleNote.id)
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
