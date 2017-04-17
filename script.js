function playSounds(e) {
    const keyCode = e.keyCode < 90 ? e.keyCode : e.keyCode - 32; //
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    const bar = document.querySelector(`.bar[data-key="${keyCode}"]`);
    if (!audio) return; //if audio isn't find, stop the fuction
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
    bar.classList.add('active');
};

function removeTransform(e){
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
    const bar = document.querySelector(`.bar[data-key="${this.getAttribute("data-key")}"]`); //find the bar with the same data-key
    bar.classList.remove('active');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransform));

window.addEventListener("keypress", playSounds);