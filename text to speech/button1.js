function t2s() {
    const text = document.getElementById("form1").value;
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
}