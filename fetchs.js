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
