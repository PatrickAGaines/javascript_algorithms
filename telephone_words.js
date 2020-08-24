// Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to remember it. On older telephones, the keypad associates letters with each numeral. Given a seven-digit telephone number, return an array of all possible strings that equate to that phone number. For reference, here is the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for completeness, map 1 to I and zero to O. For example, given a phone number 818-2612, return an array of 243 different strings, including “vitamic” and “titania”.

function Words(nums){
    variations = [];
    let rem = nums.toString();
    _rWords("", rem, variations);
    return variations;
};

function _rWords(word, rem, variations){

    if(rem === ""){
        variations.push(word);
        return;
    }

    let new_rem = "";

    for(let i=1; i<rem.length; i++){
        new_rem += rem[i];
    }

    if(rem[0] === "0"){
        _rWords(word+="o", new_rem, variations);
    }

    if(rem[0] === "1"){
        _rWords(word+="i", new_rem, variations);
    }
    
    if(rem[0] === "2"){
        _rWords(word+="a", new_rem, variations);
        _rWords(word+="b", new_rem, variations);
        _rWords(word+="c", new_rem, variations);
    }
    
    if(rem[0] === "3"){
        _rWords(word+="d", new_rem, variations);
        _rWords(word+="e", new_rem, variations);
        _rWords(word+="f", new_rem, variations);
    }

    if(rem[0] === "4"){
        _rWords(word+="g", new_rem, variations);
        _rWords(word+="h", new_rem, variations);
        _rWords(word+="i", new_rem, variations);
    }

    if(rem[0] === "5"){
        _rWords(word+="j", new_rem, variations);
        _rWords(word+="k", new_rem, variations);
        _rWords(word+="l", new_rem, variations);
    }

    if(rem[0] === "6"){
        _rWords(word+="m", new_rem, variations);
        _rWords(word+="n", new_rem, variations);
        _rWords(word+="o", new_rem, variations);
    }

    if(rem[0] === "7"){
        _rWords(word+="p", new_rem, variations);
        _rWords(word+="q", new_rem, variations);
        _rWords(word+="r", new_rem, variations);
        _rWords(word+="s", new_rem, variations);
    }

    if(rem[0] === "8"){
        _rWords(word+="t", new_rem, variations);
        _rWords(word+="u", new_rem, variations);
        _rWords(word+="v", new_rem, variations);
    }

    if(rem[0] === "9"){
        _rWords(word+="w", new_rem, variations);
        _rWords(word+="x", new_rem, variations);
        _rWords(word+="y", new_rem, variations);
        _rWords(word+="z", new_rem, variations);
    }

};

Words(9456);

// Words("9456").length to return 108
// Words("946").length to return 36
// Words("7946").length to return 144