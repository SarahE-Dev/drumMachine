// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickdrum = new Audio('sounds/kick-drum.mp3');
const snaredrum = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

let count = 0;
// This function is called every 600ms
function update() {
    count++
    if(count > 4){
        count = 1
    }
    const metronomeBox = document.querySelector('#metronome');
    const kickdrumBox = document.querySelector('#kickdrum');
    const snaredrumBox = document.querySelector('#snaredrum');
    const hihatBox = document.querySelector('#hihat');
    // Play the 'tick' sound
    if(metronomeBox.checked){if(count % 4 !== 0){
        tick.play()
    }else{
        tock.play()
    }}
    if(kickdrumBox.checked){
        kickdrum.play()
    }
    if(snaredrumBox.checked){
        snaredrum.play()
    }
    if(hihatBox.checked){
        hihat.play()
    }

    const kickBeat = document.querySelector('#kickNum');
    const snareBeat = document.querySelector('#snareNum');
    const hihatBeat = document.querySelector('#hihatNum');
    
    let counter = document.querySelector('p');
    counter.innerText = count
    
}





// This function sets up update() to be called every 600ms
function setupUpdate() {
    let intervalID = setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
