let mousecursor = document.querySelector(".cursor");

window.addEventListener("mousemove", movecursor);

function movecursor(e) {
	mousecursor.style.opacity = 1;
	mousecursor.style.top = e.pageY + 'px';
	mousecursor.style.left = e.pageX + 'px';
}
const text = document.querySelector('.textanimation');
const strtext = text.textContent;
const splittext = strtext.split("");
text.textContent = "";

for (let i = 0; i < splittext.length; i++) {
	if (splittext[i] == " "){
		text.innerHTML += "<span>&nbsp;</span>";
	}
	else
	{
		text.innerHTML += "<span>" + splittext[i] + "</span>";
	}
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
	const span = text.querySelectorAll('span')[char];
	span.classList.add('animation');
	char++;
	if (char === splittext.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}