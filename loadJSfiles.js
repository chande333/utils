    function loadThisTool(location, thisID, withTimestamp = true, callbackFn) {
  
        if (document.getElementById("js_lib_" + thisID)) {
            return;
        }

        let timestamp = withTimestamp ? "?_=" + Date.now() : "";
        let jslib = document.createElement("script");
        jslib.id = "js_lib_" + thisID;
        jslib.type = "text/javascript";
        jslib.src = location + timestamp;

        jslib.onerror = function () {
            // If the JS file is not found, sends a warning in the tool title
            document.querySelector("#tsapp_tool_title").innerText = "Error Loading " + thisID;
            isThereLoadingError = true;
        }

        document.head.appendChild(jslib);

        if (callbackFn) {
            document.getElementById("js_lib_" + thisID).onload = function () {
                console.log("Load -->" + thisID);
                callbackFn();
            }
        }
    }
