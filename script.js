const searchForm = document.querySelector("#search-form");
const readInput = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instructions = document.querySelector(".instructions");

const speechSynthesis = window.speechSynthesis;


//check for browser support

if (speechSynthesis) {
    console.log("SPEECH!!!");

    

    micBtn.addEventListener("click", speak);

    function speak(e) {
        e.preventDefault();
        const inputVal = readInput.value;
        const speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = inputVal;
        speech.volume = "1";
        speech.rate = "1";
        speech.pitch = "1";
        speech.voice = speechSynthesis.speak(speech);
    }
}
else {
    console.log("not suppoeted");
    speechBtnDiv.style.display = "none"
}