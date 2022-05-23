function generateJSON() {
  //new config object
  var config = new Object();
  config.message = document.getElementById("messageAboveOrderNumber").value;
  config.speech = document.getElementById("speechAfterOrderNumber").value;
  config.voice = document.querySelector("#voices").value;


  var jsonStrings = JSON.stringify(config);
  window.alert(jsonStrings);

  var fs = require('fs');

  fs.writeFile("input.json", jsonStrings, function (err) {
    if (err) throw err;
    console.log('complete');
  });
  //exportJSON("config.json", jsonStrings);
}

function exportJSON(filename, text) {

  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

}