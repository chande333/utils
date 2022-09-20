   function getUrlVars(varName = ""){ //BY Arturas Gradulevas, it get the URL variable names and values as an object
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)/gi,function(m,key,value){ vars[key] = value; });
        if (window.location.href.indexOf("file:///") != -1) {vars.localfile = true;}
        if (!!varName){
            return !!vars[varName] ? vars[varName] : false;
        }else{
            return vars;
        }
        
    }
