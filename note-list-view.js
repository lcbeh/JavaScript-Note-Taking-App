(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  var twentyCharacters = function (string) {
    return (string.slice(0, 20) + " ...");
  };

  NoteListView.prototype = {

    htmlURL: function () {
      var index = 0;
      var stringArr = this.noteList.stringArray();
      var resultArray = stringArr.map(function(string) {
        index++;
        return ("<li><div><a href='#notes/" + index + "'>") + twentyCharacters(string) + ("</a></li></div>");
      }).join("");
      return resultArray;
    },

    htmlJoiner: function () {
      return ("<ul>" + this.htmlURL() + "</ul>");
    },

    

  };

  exports.NoteListView = NoteListView;

})(this);
