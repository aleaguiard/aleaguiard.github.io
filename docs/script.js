const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const gradient = document.querySelector(".gradient");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
	const posX = e.clientX;
	const posY = e.clientY;

	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;

	cursorOutline.animate(
		{
			left: `${posX}px`,
			top: `${posY}px`,
		},
		{
			duration: 500,
			easing: "ease-in-out",
			fill: "forwards",
		}
	);

	gradient.style.left = `${posX}px`;
	gradient.style.top = `${posY}px`;
}
