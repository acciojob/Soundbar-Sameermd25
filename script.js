//your JS code here. If required.
const container=document.getElementById("container");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong","stop"];

const currentlyPlaying=[];

const tempDom=document.createDocumentFragment();
for(let sound of sounds) {
    createButton(sound);
}
container.appendChild(tempDom);

function  createButton(sound) {
	const button = document.createElement("button");
    button.innerText = sound;
    button.id=sound;
    button.className="btn"+(sound===" stop"?"stop":"");
    tempDom.appendChild(button);

	button.addEventListener("click", () => {
		if (sound === "stop") {
			stopSounds();
		} else {
			stopSounds(); // Stop others before playing
			const audio = new Audio(`sounds/${sound}.mp3`);
			audio.play();
		}
	});	
}
function stopSounds() {
    for (let sound of currentlyPlaying) {
         sound.pause();
    }
}