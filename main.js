const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickdrum = new Audio('sounds/kick-drum.mp3');
const snaredrum = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
const eightBass = new Audio('489892__tkky__slutty-808.wav');
const tom = new Audio('sounds/2108__opm__tm_set4 (1).wav');
const snare2 = new Audio('sounds/2082__opm__cp_set3.wav');
const hat2 = new Audio('sounds/2094__opm__oh_set5.wav');
const closedHat = new Audio('sounds/2079__opm__ch_sset3.wav');


let count = 0;

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
    const tomBox = document.querySelector('#tom');
    const tomNum = document.querySelector('#tomNum');
    const tomNum2 = document.querySelector('#tomNum2');
    const snare2Box = document.querySelector('#snare2');
    const snare2Num = document.querySelector('#snare2Num');
    const snare2Num2 = document.querySelector('#snare2Num2');
    const hat2Box = document.querySelector('#hat2');
    const hat2Num = document.querySelector('#hat2Num');
    const hat2Num2 = document.querySelector('#hat2Num2');
    const closedHatBox = document.querySelector('#closedHat');
    const closedHatNum = document.querySelector('#closedHatNum');
    const closedHatNum2 = document.querySelector('#closedHatNum2');

    if(metronomeBox.checked){if(count % 4 !== 0){
        tick.play()
    }else{
        tock.play()
    }}
    if(kickdrumBox.checked){
        if(kickBeat.value == count || kickBeat2.value == count){
            kickdrum.play()
        }
    }
    if(snaredrumBox.checked){
        if(snareBeat.value == count || snareBeat2.value == count){
            snaredrum.play()
        }
    }
    if(hihatBox.checked){
        if(hihatBeat.value == count || hihatBeat2.value == count){
            hihat.play()
        }
    }
    if(eightBassBox.checked){
        if(eightBassBeat.value == count){
            eightBass.play()
        }
    
    }
    if(tomBox.checked){
        if(tomNum.value == count || tomNum2.value == count){
            tom.play()
        }
    }
    if(snare2Box.checked){
        if(snare2Num.value == count || snare2Num2.value == count){
            snare2.play()
        }
    }
    if(hat2Box.checked){
        if(hat2Num.value == count || hat2Num2.value == count){
            hat2.play()
        }
    }
    if(closedHatBox.checked){
        if(closedHatNum.value == count || closedHatNum2.value == count){
            closedHat.play()
        }
    }

    let counter = document.querySelector('p');
    counter.innerText = count;
    
}

let temposelection = document.querySelector('#tempos');

temposelection.addEventListener('change', ()=>{
    if(temposelection.value === 'fastest'){
        clearInterval(intervalID)
        setupUpdate(500)
        
    }
    if(temposelection.value === 'faster'){
        clearInterval(intervalID)
        setupUpdate(550)
        
    }
    if(temposelection.value === 'normal'){
        clearInterval(intervalID)
        setupUpdate(600)
        
    }
    if(temposelection.value === 'slower'){
        clearInterval(intervalID)
        setupUpdate(650)
        
    }
    if(temposelection.value === 'slowest'){
        clearInterval(intervalID)
        setupUpdate(700)
        
    }
})

let intervalID;

function setupUpdate(speed) {
    intervalID = setInterval(update, speed);
    let pulse = document.querySelector('.a');
    let animationSpeed = speed * 2;
    pulse.style.animation = 'pulse ' + animationSpeed.toString() + 'ms linear infinite';
}

setTimeout(setupUpdate(600), 300);

