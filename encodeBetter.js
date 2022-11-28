function encodeBetter(text){
        text = encodeURIComponent(text);
        text = text.replace(/'/g, "%27"); // To fix the single quote issue
        return text;
    }
