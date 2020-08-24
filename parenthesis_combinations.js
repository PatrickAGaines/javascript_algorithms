// Given the number of pairs of parentheses, return an array of strings, where each string represents a different valid way to order those parentheses. Example: given 2, return ["()()", "(())"].

function printParenthesis(n){
    combinations = [];
    r_printParenthesis("", n*2, combinations, 0, 0);
    return combinations;
};

function r_printParenthesis(combo, rem, combinations, open, closed){
    
    if(rem === 0){
        if(open === closed) {
            combinations.push(combo);
        }
        return;
    }

    let new_rem = rem - 1;

    if(open <= closed){
        r_printParenthesis(combo + "(", new_rem, combinations, open + 1, closed);
    } else {
        r_printParenthesis(combo + "(", new_rem, combinations, open + 1, closed);
        r_printParenthesis(combo + ")", new_rem, combinations, open, closed + 1);
    }

};

printParenthesis(4);

// printParenthesis(4).length to return 14
// printParenthesis(6).length to return 132
// printParenthesis(7).length to return 429