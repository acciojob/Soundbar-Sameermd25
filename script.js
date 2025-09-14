const container = document.getElementById("container");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];
const playList = {};
const tempDom = document.createDocumentFragment();

for (let sound of sounds) {
    createButton(sound);

    // Skip creating audio element for "stop"
    if (sound !== "stop") {
        const audio = document.createElement("audio");
        audio.src = `sounds/${sound}.mp3`;
        audio.id = `${sound}-audio`;
        audio.setAttribute("preload", "auto");

        playList[sound] = audio;
        tempDom.appendChild(audio); // append to DOM so Cypress can detect it
    }
}

container.appendChild(tempDom);

function createButton(sound) {
    const button = document.createElement("button");
    button.innerText = sound;
    button.id = sound;
    button.className = "btn" + (sound === "stop" ? " stop" : "");
    tempDom.appendChild(button);

    button.addEventListener("click", () => {
        if (sound === "stop") {
            stopSounds();
        } else {
            stopSounds();
            const audio = playList[sound];
            audio.currentTime = 0;
            audio.play();
        }
    });
}

function stopSounds() {
    for (let key in playList) {
        const audio = playList[key];
        audio.pause();
        audio.currentTime = 0;
    }
}
