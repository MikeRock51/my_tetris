const move = new Audio('./audio/move.wav');
const fall = new Audio('./audio/fall.wav');
const rotate = new Audio('./audio/rotate.wav');
const clear = new Audio('./audio/clear.wav');
const gameover = new Audio('./audio/gameover.wav');
const end = new Audio('./audio/end.wav');
const line = new Audio('./audio/success.wav');


(function addBackgroundMusicEventListener() {
  const eventAudio = document.querySelector('audio');
  const playButton = document.querySelector('.sound-button');
  playButton.addEventListener('click', function() {
    if (playButton.dataset.playing === 'false') {
      playButton.dataset.playing = 'true';
      eventAudio.play();
    } else {
      eventAudio.pause();
      playButton.dataset.playing = 'false';
    }
  })
})();
