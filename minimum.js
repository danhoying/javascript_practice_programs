// Write a function that takes two arguments and returns their minimum.

function min(num1, num2) {
    if (num1 > num2) {
	return num2;
    }
    else if (num2 > num1) {
	return num1;
    }
}

console.log(min(13, 4));
console.log(min(3, 16));
