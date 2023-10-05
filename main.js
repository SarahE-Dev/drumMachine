// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickdrum = new Audio('sounds/kick-drum.mp3');
const snaredrum = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
const eightBass = new Audio('489892__tkky__slutty-808.wav');


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
    const kickBeat = document.querySelector('#kickNum');
    const snareBeat = document.querySelector('#snareNum');
    const snareBeat2 = document.querySelector('#snareNum2');
    const hihatBeat = document.querySelector('#hihatNum');
    const hihatBeat2 = document.querySelector('#hihatNum2');
    const eightBassBox = document.querySelector('#eightBass');
    const eightBassBeat = document.querySelector('#eightBassNum');
    const kickBeat2 = document.querySelector('#kickNum2');

    // Play the 'tick' sound
    if(metronomeBox.checked){if(count % 4 !== 0){
        tick.play()
    }else{
        tock.play()
    }}
    if(kickdrumBox.checked){
        if(kickBeat.value == count){
            kickdrum.play()
        }
        if(kickBeat2.value == count){
            kickdrum.play()
        }
    }
    if(snaredrumBox.checked){
        if(snareBeat.value == count){
            snaredrum.play()
        }
        if(snareBeat2.value == count){
            snaredrum.play()
        }
    }
    if(hihatBox.checked){
        if(hihatBeat.value == count){
            hihat.play()
        }
        if(hihatBeat2.value == count){
            hihat.play()
        }
    }
    if(eightBassBox.checked){
        if(eightBassBeat.value == count){
            eightBass.play()
        }
    
    }

    
    
    let counter = document.querySelector('p');
    counter.innerText = count;
    
}

let temposelection = document.querySelector('#tempos');

temposelection.addEventListener('change', ()=>{
    let arm = document.querySelector('.arm');
    if(temposelection.value === 'fastest'){
        clearInterval(intervalID)
        setupUpdate(800)
        arm.style.animation = 'tick 1600ms ease-in-out infinite';
        
    }
    if(temposelection.value === 'faster'){
        clearInterval(intervalID)
        setupUpdate(900)
        arm.style.animation = 'tick 1800ms ease-in-out infinite';
        
    }
    if(temposelection.value === 'normal'){
        clearInterval(intervalID)
        setupUpdate(1000)
        arm.style.animation = 'tick 2000ms ease-in-out infinite';
        
    }
    if(temposelection.value === 'slower'){
        clearInterval(intervalID)
        setupUpdate(1100)
        arm.style.animation = 'tick 2200ms ease-in-out infinite';
        
    }
    if(temposelection.value === 'slowest'){
        clearInterval(intervalID)
        setupUpdate(1200)
        arm.style.animation = 'tick 2400ms ease-in-out infinite';
        
    }
})



var intervalID;

// This function sets up update() to be called every 600ms
function setupUpdate(speed) {
    intervalID = setInterval(update, speed);
}





setTimeout(setupUpdate(1000), 300);

