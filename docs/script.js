const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
	const postX = e.clientX;
	const postY = e.clientY;

	cursorDot.style.left = `${postX}px`;
	cursorDot.style.top = `${postY}px`;

	cursorOutline.animate(
		{
			left: `${postX}px`,
			top: `${postY}px`,
		},
		{
			duration: 500,
			easing: "ease-in-out",
			fill: "forwards",
		}
	);
}
