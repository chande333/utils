    function createDiv(id = false,innerText = false,type= "div",style = false,thisClass = false,thisValue = false){

        let newDiv = document.createElement(type);
        if (id){newDiv.id = id;};
        if (style != false){newDiv.style = style;}
        if (innerText != false){newDiv.innerText = innerText}
        if (thisClass != false){newDiv.className = thisClass}
        if (thisValue != false){newDiv.value = thisValue}


        return newDiv;
    }
