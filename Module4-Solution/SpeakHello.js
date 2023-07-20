// SpeakHello.js
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      console.log("Good Bye " + name);
    } else {
      console.log(speakWord + " " + name);
    }
  };

  window.helloSpeaker = helloSpeaker;
})(window);