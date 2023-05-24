test_url = "http://localhost/knowledge-base/libraries/apis/opsapi.php";

    let params = {
        "fn": "ping"
    }

    fetch(test_url, {
        "headers": {
            "accept": "*/*"
        },
        "body": `${JSON.stringify(params)}`,
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
