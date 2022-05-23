let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";

// get voices
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// if voice changes
document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

// wait function as existing javascript wait function was problematic 
function wait(ms) {
  var d = new Date();
  var d2 = null;
  do {
    d2 = new Date();
  }
  while (d2 - d < ms);
}

// test voice button
document.querySelector("#testVoice").addEventListener("click", () => {
  var elem = document.getElementById('speechAfterOrderNumber');
  speech.text = elem.value;
  window.speechSynthesis.speak(speech);
});


// speak function
function speak(num) {

    speech.voice = voices[4];


  //wait 2.5 seconds to wait for ding.mp3
  wait(2500);

  // speak the order number
  speech.text = num;
  window.speechSynthesis.speak(speech);

  //$sound2[0].play();
  // additional speech to say "your food is ready"
  // modify to whatever you wish
  speech.text = "Your food is ready";
  window.speechSynthesis.speak(speech);
}
