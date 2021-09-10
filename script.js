let currentSquare = 's11';

function move(currentLocation, destination) {
	if (destination) {
		// remove the cousin class from currentLocation
		currentLocation = document.getElementById(currentLocation);
		currentLocation.className = "grid__row__square";
		currentSquare = destination;
		
		// add cousin class to destination
		destination = document.getElementById(destination);
		destination.className = "grid__row__square--cousin";
	}
}

document.addEventListener('keyup', e => {
	console.log(MOVES[currentSquare]);

	if (e.key === 'w' || e.key === 'ArrowUp') {
		console.log('UP!');
		move(currentSquare, MOVES[currentSquare].up);
	}
	if (e.key === 'a' || e.key === 'ArrowLeft') {
		console.log('LEFT!');
		move(currentSquare, MOVES[currentSquare].left);
	}
	if (e.key === 's' || e.key === 'ArrowDown') {
		console.log('DOWN!');
		move(currentSquare, MOVES[currentSquare].down);
	}
	if (e.key === 'd' || e.key === 'ArrowRight') {
		console.log('RIGHT!');
		move(currentSquare, MOVES[currentSquare].right);
	}
});