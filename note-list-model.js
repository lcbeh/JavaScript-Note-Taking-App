(function(exports){

  function NoteList(){
    this.noteArray = [];
  }

  NoteList.prototype = {

    storeNote: function(singleNote) {
      this.noteArray.push(singleNote);
    },

   stringArray: function () {
      var stringArr = this.noteArray.map(function(noteObj){
        return noteObj.text;
      });
      return stringArr;
    }

};

  exports.NoteList = NoteList;

})(this);
