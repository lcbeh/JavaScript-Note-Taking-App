(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  var twentyCharacters = function (string) {
    return (string.slice(0, 20) + " ...");
  };

  NoteListView.prototype = {

    htmlList: function () {
      var notes = this.noteList.noteArray;
      var list = notes.map(function(note) {
        return ("<li><div><a href='#notes/" + note.idReturn() + "'>") + twentyCharacters(note.textReturn()) + ("</a></li></div>");
      }).join("");
      return ("<ul>" + list + "</ul>");
    },

    listNote: function () {
      var notePreview =  document.getElementById("preview");
      notePreview.innerHTML = this.htmlList();
    },

  };

  exports.NoteListView = NoteListView;

})(this);
