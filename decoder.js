function decodeThis(text){

        var replaceLinks = [];
        
        //text = text.replace(/\n/g, "<br/>");

        //If HYperlink is detected ----------------------------

        if(!!text.match(/\[.*?\]/) == true){ 
          
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
			  });

            
          }

          // -----------------------------------------------------
          // -----------------------------------------------------
          
          if(!!text.match(/(;|h(\d)\.)|(!(A|a)lert!)/)) {
			// var breaks = text.split(";");
            var breaks = text.split(/(;|\n)/);
			var b = ";"

			var returnText = breaks.map(function(a){
	
				var thisout = ";";
				var classy = "dummy";



				// if (a.match(/:.*?:/)) { ADD CUSTOM CLASSES if there are :high_red:
				// 	var classy = a.match(/:.*?:/)[0].replace(/:/g,""); // takes high_red from :high_red:
				// 	//var conNum = a.split(":").length - 1;

					

				// 	if (a.match(/\*/)) {
				// 		a ="*" + a.split(/:.*?:/)[1];
				// 	}
				// 	else{
				// 		a = a.split(/:.*?:/)[1];
				// 	}

				// 	var bbbbb = a.replace("span:high_red","span class='high_red'");
				// }

				//a = a.replace("span:high_red","span class='high_red'");



				switch(true){
                    case !!a.match(/!(A|a)lert!/): b = "<div class='alert alert-danger' role='alert'>" + a.replace(/!(A|a)lert!/,"").trim() + "</div>";  break;
					// case !!a.match(/!Alert!/): b = a.replace("/!Alert!/","<div class='alert alert-danger' role='alert'>!Alert!</div>").trim() + "</h1>";  break;
                    case !!a.match(/h1/): b = "<h1>" + a.replace("h1.","").trim() + "</h1>";  break;
                    case !!a.match(/h2/): b = "<h2>" + a.replace("h2.","").trim() + "</h2>";  break;
                    case !!a.match(/h3/): b = "<h3>" + a.replace("h3.","").trim() + "</h3>";  break;
                    case !!a.match(/h4/): b = "<h4>" + a.replace("h4.","").trim() + "</h4>";  break;
                    case !!a.match(/h5/): b = "<h5>" + a.replace("h5.","").trim() + "</h5>";  break;
                    case !!a.match("\n"): b = a.replace("\n","<br>");  break;
					case !!a.match(/\*.*/g): b = "<li class='" + classy + "'>" + a.replace("*","").trim() + "</li>"; break;
					case (classy!= "dummy"): b = "<span class='" + classy + "'>" + a.replace("*","").trim() + "</span>"; break;

					default: b = "<div>" + a + "</div>";
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
        
        returnText = returnText.replace(/\n/g, "<br/>")
        
        return returnText;
          
    }

    function decodeStyle(originalText,breakType = "single") {

        let outText = originalText;

        //Hyperlink ----------------------------

        if (!outText){ return ""};

        var decodedLinkArray = [];

        if (!!outText.match(/\[.*?\|.*?\]/)) { // [TEXT/https://]

            let linksAndTextArray = outText.match(/\[.*?\|.*?\]/g);

            linksAndTextArray.forEach(function (thisLinkAndText) {
                let cleanedLinkAndText = thisLinkAndText.replace(/(\[|\])/g, ""); //Removing []
                let linkText = cleanedLinkAndText.split("|")[0];
                let link = cleanedLinkAndText.split("|")[1];
                let htmlLink = `<a href=\"${link}\" target='_blank'>${linkText}</a>`;

                decodedLinkArray.push({
                    "original": thisLinkAndText,
                    "decoded": htmlLink
                });
            });

            decodedLinkArray.forEach(function (repl) {
                outText = outText.replace(repl.original, repl.decoded);
            });

        };
