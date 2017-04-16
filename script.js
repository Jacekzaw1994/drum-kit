window.addEventListener("keypress", function (e) {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});


function removeTransform(e){
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransform));