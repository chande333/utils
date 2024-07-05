// Version 2024-07-05
window.DecodeThis = (function (){

    function decodeThis(text){

		
		// if (text.match("Cruelest")) {
		// 	console.log(text);
		// }

        var replaceLinks = [];

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

		if (text.match(/span:.*?>/g)) {
				var amount = text.match(/span:.*?>/g).length;
				for (var i = 0; i < amount; i++) {
					//console.log(i + " ---->" + text);
					var spanClass = text.match(/<span:(.*?)>/)[1];
					text = text.replace(/<span:.*?>/,"<span class='" + spanClass + "'>");
					//console.log(text);
				}
					
				}
		

		//text.replace(/\n/,"<br>");

        if (!!text.match(/::.*?::.*?::/)) {
            text = text.replace(/::(.*?)::/g, function(match, thisClass) {
              return `<span class='${thisClass}'>`;
            });
            text = text.replace(/::/g, "</span>");
          }
          
        // if (!!text.match(/::.*?::.*?::/)) {
        //     var thisClass = text.match(/::(.*?)::/)[1];
        //     text = text.replace(/::(.*?)::/,`<span class='${thisClass}'>`);
        //     text = text.replace(/::/,"</span>");
        // }

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
					//var conNum = a.split(":").length - 1;

					

					if (a.match(/\*/)) {
						a ="*" + a.split(/:.*?:/)[1];
					}
					else{
						a = a.split(/:.*?:/)[1];
					}
					


					// a = "<span class='" + classy + "'>" + content + "</span>";
					//console.log("Classyyyyy --- " +(classy!= "dummy"));
					var bbbbb = a.replace("span:high_red","span class='high_red'");
				}

				//a = a.replace("span:high_red","span class='high_red'");


	
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
