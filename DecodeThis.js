// Version 2024-07-05_3
window.DecodeThis = (function (){

    function decodeThis(text,additionalDecode = false){

        var replaceLinks = [];
        
        text = additionalDecode ? decodeURIComponent(text) : text;

        if(!!text.match(/\[.*?\]/) == true){ //If HYperlink is detected

            var thisText = text.match(/\[.*?\]/g);

            thisText.forEach(function(bb){
                //console.log(bb)
                var cc = bb.replace(/(\[|\])/g,"");
                var xx = cc.split("|");
                var ww = `<a href=\"${xx[1]}\" target='_blank'>${xx[0]}</a>`;
                
                replaceLinks.push({"original": bb, "withlink": ww});
            });

            replaceLinks.forEach(function(repl){
				text = text.replace(repl.original,repl.withlink);
        //console.log(a.descrp);
			  });

            
        }

        // Adding class to <span>
		if (text.match(/span:.*?>/g)) {
            var amount = text.match(/span:.*?>/g).length;
            for (var i = 0; i < amount; i++) {
                //console.log(i + " ---->" + text);
                var spanClass = text.match(/<span:(.*?)>/)[1];
                text = text.replace(/<span:.*?>/,"<span class='" + spanClass + "'>");
                //console.log(text);
            }					
		}
		


        // Adding class between ::  :: 
        // ------ ----- -------
        if (!!text.match(/::.*?::.*?::/)) {
            text = text.replace(/::(.*?)::/g, function(match, thisClass) {
            return `<span class='${thisClass}'>`;
            });
            text = text.replace(/::/g, "</span>");
        }


        // * :img: replacer
        // * Add classes between : : (e.g. high_red from :high_red:)
        // * Adds h1, h2, h3 

		if(!!text.match(";")) {
			var breaks = text.split(";");
			var b = ";"

			var returnText = breaks.map(function(a){
	
				var thisout = ";";
				var classy = "dummy";

				if (a.match(/:img:/)){
					let imgUrl = a.match(/:img:(.*(png|jpg|gif))/)[1];

					a = a.replace(/:img:.*/,`<img src='${imgUrl}' style="max-height:200px">`);
				}

				else if (a.match(/:.*?:/)) {
					var classy = a.match(/:.*?:/)[0].replace(/:/g,""); // takes high_red from :high_red:					

					if (a.match(/\*/)) {
						a ="*" + a.split(/:.*?:/)[1];
					}
					else{
						a = a.split(/:.*?:/)[1];
					}

					var bbbbb = a.replace("span:high_red","span class='high_red'");
				}


	
				switch(true){
					
					case !!a.match(/h1/): b = "<h1>" + a.replace("h1.","").trim() + "</h1>";  break;
                    case !!a.match(/h2/): b = "<h2>" + a.replace("h2.","").trim() + "</h2>";  break;
                    case !!a.match(/h3/): b = "<h3>" + a.replace("h3.","").trim() + "</h3>";  break;
					case !!a.match(/\*.*/g): b = "<li class='" + classy + "'>" + a.replace("*","").trim() + "</li>"; break;
					case !!a.match("\n"): b = a.replace("\n","<br>");  break;
                    case (classy!= "dummy"): b = "<span class='" + classy + "'>" + a.replace("*","").trim() + "</span>"; break;

					default: b = "<span>" + a + "</span>";
				}

				if (a.match("span:")) {
					console.log(a);
					console.log(b);
				}
	
				return b;
	
			});

		returnText = returnText.join("");

		}

		else{
			var returnText = text;

		}

        if (!!returnText.match(/\*(.*?)\*/g)){
            const regex = /\*(.*?)\*/g;
            returnText = returnText.replaceAll(regex, (match, p1) => `<b>${p1}</b>`);
        }


		returnText = returnText.replace(/\n/g,"<br>")

		return returnText;
		
	}

    function encodeBetter(text){
        text = encodeURIComponent(text);
        text = text.replace(/'/g, "%27");
        return text;
    }
    
    

    return {
        decodeThis:decodeThis,
        encodeBetter:encodeBetter
    }

})();
