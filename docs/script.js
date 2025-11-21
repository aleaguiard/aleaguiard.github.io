const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const gradient = document.querySelector('.gradient');
const interactiveElements = document.querySelectorAll('a, .tech-item');

function showElements() {
	cursorDot.style.opacity = '1';
	cursorOutline.style.opacity = '1';
	gradient.style.opacity = '1';
}

function moveElements(posX, posY) {
	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;

	cursorOutline.animate(
		{
			left: `${posX}px`,
			top: `${posY}px`,
		},
		{
			duration: 250,
			easing: 'ease-in-out',
			fill: 'both',
		}
	).onfinish = function () {
		const outlineRect = cursorOutline.getBoundingClientRect();
		const outlineCenterX = outlineRect.left + outlineRect.width / 2;
		const outlineCenterY = outlineRect.top + outlineRect.height / 2;

		const gradientSize = parseFloat(getComputedStyle(gradient).getPropertyValue('--size'));
		const halfSize = gradientSize / 2;

		const gradientPosX = outlineCenterX - halfSize;
		const gradientPosY = outlineCenterY - halfSize;

		gradient.style.left = `${gradientPosX}px`;
		gradient.style.top = `${gradientPosY}px`;
	};

	showElements();
}

function centerGradient() {
	const outlineRect = cursorOutline.getBoundingClientRect();
	const outlineCenterX = outlineRect.left + outlineRect.width / 2;
	const outlineCenterY = outlineRect.top + outlineRect.height / 2;

	const gradientSize = parseFloat(getComputedStyle(gradient).getPropertyValue('--size'));
	const halfSize = gradientSize / 2;

	const gradientPosX = outlineCenterX - halfSize;
	const gradientPosY = outlineCenterY - halfSize;

	gradient.style.left = `${gradientPosX}px`;
	gradient.style.top = `${gradientPosY}px`;
}

document.addEventListener('DOMContentLoaded', () => {
	cursorDot.style.opacity = '0';
	cursorOutline.style.opacity = '0';
	gradient.style.opacity = '0';

	centerGradient();

	window.addEventListener('mousemove', (e) => {
		moveElements(e.clientX, e.clientY);
	});

	interactiveElements.forEach((element) => {
		element.addEventListener('mouseenter', () => {
			cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
			cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
		});

		element.addEventListener('mouseleave', () => {
			cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
			cursorOutline.style.backgroundColor = 'transparent';
		});
	});
});
