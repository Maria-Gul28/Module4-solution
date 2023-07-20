// SpeakGoodBye.js
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      console.log(speakWord + " " + name);
    } else {
      console.log("Hello " + name);
    }
  };

  window.byeSpeaker = byeSpeaker;
})(window);