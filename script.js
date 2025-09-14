const container = document.getElementById("container");

        const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];

        const tempDom = document.createDocumentFragment();
        for (let sound of sounds) {
            createButton(sound);
        }
        container.appendChild(tempDom);

        const playList = {}


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
                        console.log(playList,'play list in if condition')
                        playList[sound].play()
                    }
                    else {
                        const audio = new Audio(`sounds/${sound}.mp3`);
                        console.log(audio.currentTime, 'audio played secs')
                        playList[sound] = audio
                        audio.play();
                        console.log("new created")
                    }

                }
            });
        }


        function stopSounds() {
            for (let key in playList) {
                const audio=playList[key];
                audio.pause();
            }
        }