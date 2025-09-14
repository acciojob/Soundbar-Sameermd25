const container = document.getElementById("container");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];
const playList = {};
const tempDom = document.createDocumentFragment();

for (let sound of sounds) {
    createButton(sound);
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
            stopSounds(); // Stop others before playing

            if (playList.hasOwnProperty(sound)) {
                playList[sound].play();
            } else {
                const audio = new Audio(`sounds/${sound}.mp3`);
                playList[sound] = audio;
                audio.play();
            }
        }
    });
}

function stopSounds() {
    for (let key in playList) {
        const audio = playList[key];
        audio.pause();
        audio.currentTime = 0; // reset to beginning
    }
}
