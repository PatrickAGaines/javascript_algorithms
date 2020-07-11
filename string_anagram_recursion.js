// Given a string, use recursion to return array where each element is a string representing a different anagram (a different sequence of the letters in that string). For example, if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"].

function StringAnagram(str){
    var words = [];
    _rStringAnagram("", str, words);
    return words;
  }
  
function _rStringAnagram(name, rem, words){
  
    if(rem == ""){
      words.push(name);
      return;
    }
  
    for(var i=0; i<rem.length; i++){
      var new_rem = "";
      for(var j=0; j<rem.length; j++){
        if(j!=i){
          new_rem += rem[j];
        }
      }
      console.log(name+rem[i]);
      _rStringAnagram(name+rem[i], new_rem, words);
    }
  }
  
  StringAnagram("lim");
  
  // StringAnagram("lim").length to return 6
  // StringAnagram("lima").length to return 24
  // StringAnagram("limas").length to return 120