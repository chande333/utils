test_url = "http://localhost/knowledge-base/libraries/apis/opsapi.php";

fetch(test_url, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9"
        },
        "body": `{"fn":"ping", "var1": "${document.getElementById("test").value}"}`,
        "method": "POST"
    }).then(response => response.text())
    .then(data => {
        console.log(data);
    })


// Used in Run.JS to test a specific function within a PHP
function pingURL(testurl,fnName){
 
  fetch(testurl, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9"
            },
            "body": `{"fn":"${fnName}"}`,
  "method": "POST",
        }).then(response=>response.text())
        .then(data=>{
            console.log(data);
           return data;
        })
}
