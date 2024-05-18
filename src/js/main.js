import '../scss/style.scss';

const printClockNumbers = () => {
	const clock = document.querySelector('.clock__numbers');

	for (let i = 0; i < 12; i++) {
		const numberItem = document.createElement('p');
		const clockNumber = document.createElement('span');

		numberItem.classList.add('clock__number');
		clockNumber.textContent = `${i + 1}`;

		numberItem.appendChild(clockNumber);
		clock.appendChild(numberItem);
	}
};

const handleClockTime = () => {
	const hourHand = document.getElementById('hour-hand');
	const minuteHand = document.getElementById('minute-hand');
	const secondHand = document.getElementById('second-hand');

	const clockTicks = () => {
		const date = new Date();
		// Calculated in fractions to correctly represent the rotation of the clock hands relative to a full circle.

		// Dividing by 60 converts this to a fraction of a full minute.
		const seconds = date.getSeconds() / 60;

		// Adding seconds (which is already a fraction of a minute) accounts for the partial progress into the next minute.
		const minutes = (seconds + date.getMinutes()) / 60;

		// Dividing by 12 converts this to a fraction of a full day (since a clock has 12 hours).
		const hours = (minutes + date.getHours()) / 12;

		rotateClockHand(hourHand, hours);
		rotateClockHand(minuteHand, minutes);
		rotateClockHand(secondHand, seconds);
	};

	const rotateClockHand = (element, rotation) => {
		return element.style.setProperty('--rotate', rotation * 360);
	};

	setInterval(clockTicks, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
	printClockNumbers();
	handleClockTime();
})
